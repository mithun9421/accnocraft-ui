/**
 * ANNOCRAFT UI — MCP SERVER
 *
 * Model Context Protocol server that exposes component intelligence to AI agents
 *
 * Capabilities:
 * - list_components: Get all available components
 * - describe_component: Get detailed metadata for a component
 * - recommend_component: AI-safe component recommendations
 * - validate_usage: Check component usage for accessibility and composition rules
 * - compose_layout: Generate layout from intent and constraints
 * - audit_accessibility: Audit project for a11y compliance
 */

import { ComponentMetadata } from "../design/metadata";
import { buttonMeta } from "../components/button/button.meta";
import { dialogMeta } from "../components/dialog/dialog.meta";
import { inputMeta } from "../components/input/input.meta";

// Component registry
const COMPONENT_REGISTRY: Record<string, ComponentMetadata<any>> = {
  Button: buttonMeta,
  Dialog: dialogMeta,
  Input: inputMeta,
};

/**
 * MCP Tool: list_components
 * Returns list of all available components with basic info
 */
export function listComponents() {
  return {
    components: Object.entries(COMPONENT_REGISTRY).map(([name, meta]) => ({
      name,
      category: meta.category,
      description: meta.description,
      version: meta.version,
    })),
  };
}

/**
 * MCP Tool: describe_component
 * Returns full metadata for a specific component
 */
export function describeComponent(componentName: string) {
  const meta = COMPONENT_REGISTRY[componentName];

  if (!meta) {
    return {
      error: `Component "${componentName}" not found`,
      available: Object.keys(COMPONENT_REGISTRY),
    };
  }

  return {
    component: meta,
  };
}

/**
 * MCP Tool: recommend_component
 * Recommends components based on user intent and constraints
 */
export function recommendComponent(params: {
  intent: string;
  category?: string;
  constraints?: string[];
}) {
  const { intent, category, constraints = [] } = params;

  const recommendations = Object.entries(COMPONENT_REGISTRY)
    .filter(([_, meta]) => {
      // Filter by category if specified
      if (category && meta.category !== category) {
        return false;
      }

      // Check if component supports the intent
      const supportsIntent = meta.supportedIntents.some(
        (supportedIntent) =>
          supportedIntent.toLowerCase().includes(intent.toLowerCase()) ||
          intent.toLowerCase().includes(supportedIntent.toLowerCase())
      );

      return supportsIntent;
    })
    .map(([name, meta]) => ({
      name,
      category: meta.category,
      description: meta.description,
      supportedIntents: meta.supportedIntents,
      confidence: calculateConfidence(meta, intent),
    }))
    .sort((a, b) => b.confidence - a.confidence);

  return {
    recommendations,
    query: { intent, category, constraints },
  };
}

/**
 * MCP Tool: validate_usage
 * Validates component usage against composition rules and a11y requirements
 */
export function validateUsage(params: {
  component: string;
  props: Record<string, any>;
  context?: {
    parent?: string;
    children?: string[];
  };
}) {
  const { component, props, context } = params;
  const meta = COMPONENT_REGISTRY[component];

  if (!meta) {
    return {
      valid: false,
      errors: [`Component "${component}" not found`],
    };
  }

  const errors: string[] = [];
  const warnings: string[] = [];

  // Check composition rules
  if (context?.parent && meta.compositionRules.cannotNestInside) {
    if (meta.compositionRules.cannotNestInside.includes(context.parent)) {
      errors.push(
        `${component} cannot be nested inside ${context.parent}`
      );
    }
  }

  if (meta.compositionRules.requiresParent) {
    if (!context?.parent || !meta.compositionRules.requiresParent.includes(context.parent)) {
      errors.push(
        `${component} requires parent: ${meta.compositionRules.requiresParent.join(" or ")}`
      );
    }
  }

  // Check icon-only requires label
  if (meta.compositionRules.iconOnlyRequiresLabel && props.iconOnly && !props["aria-label"]) {
    errors.push("iconOnly mode requires aria-label");
  }

  // Check destructive requires confirmation
  if (
    meta.compositionRules.destructiveRequiresConfirmation &&
    props.intent === "destructiveAction" &&
    !props["aria-describedby"]
  ) {
    warnings.push(
      "destructiveAction intent should include aria-describedby with confirmation details"
    );
  }

  // Check required ARIA attributes
  if (meta.aria.required) {
    meta.aria.required.forEach((attr) => {
      if (!props[attr]) {
        errors.push(`Required ARIA attribute missing: ${attr}`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    accessibility: meta.accessibility,
  };
}

/**
 * MCP Tool: compose_layout
 * Generates layout structure from goals and constraints
 */
export function composeLayout(params: {
  goal: string;
  constraints?: string[];
  components?: string[];
}) {
  const { goal, constraints = [], components } = params;

  // Simple pattern matching for common layouts
  const layouts: Record<string, any> = {
    "confirmation dialog": {
      component: "Dialog",
      children: [
        { component: "DialogContent", children: [
          { component: "DialogHeader", children: [
            { component: "DialogTitle", content: "Confirm Action" },
            { component: "DialogDescription", content: "Description here" },
          ]},
          { component: "DialogFooter", children: [
            { component: "Button", props: { intent: "secondaryAction" }, content: "Cancel" },
            { component: "Button", props: { intent: "primaryAction" }, content: "Confirm" },
          ]},
        ]},
      ],
    },
    "login form": {
      component: "form",
      children: [
        { component: "Input", props: { label: "Email", type: "email", required: true } },
        { component: "Input", props: { label: "Password", type: "password", required: true } },
        { component: "Button", props: { intent: "primaryAction", type: "submit" }, content: "Log In" },
      ],
    },
  };

  const matchedLayout = Object.keys(layouts).find((key) =>
    goal.toLowerCase().includes(key)
  );

  if (matchedLayout) {
    return {
      layout: layouts[matchedLayout],
      goal,
      matched: matchedLayout,
    };
  }

  return {
    error: "No matching layout pattern found",
    goal,
    suggestions: Object.keys(layouts),
  };
}

/**
 * MCP Tool: audit_accessibility
 * Audits component usage for accessibility compliance
 */
export function auditAccessibility(params: {
  components: Array<{
    name: string;
    props: Record<string, any>;
  }>;
}) {
  const { components } = params;

  const results = components.map((comp) => {
    const meta = COMPONENT_REGISTRY[comp.name];

    if (!meta) {
      return {
        component: comp.name,
        error: "Component not found",
      };
    }

    const issues: string[] = [];

    // Check keyboard navigation
    if (meta.accessibility.keyboardNavigation && comp.props.disabled) {
      issues.push("Disabled components break keyboard navigation flow");
    }

    // Check touch targets
    if (comp.props.size === "sm" && meta.accessibility.minTouchTarget.includes("44px")) {
      issues.push(`Small size may not meet minimum touch target of ${meta.accessibility.minTouchTarget}`);
    }

    // Check semantic HTML
    if (!meta.accessibility.semanticHTML) {
      issues.push("Component does not use semantic HTML");
    }

    return {
      component: comp.name,
      wcag: meta.accessibility.wcag,
      issues,
      passed: issues.length === 0,
    };
  });

  return {
    results,
    summary: {
      total: results.length,
      passed: results.filter((r) => r.passed).length,
      failed: results.filter((r) => !r.passed).length,
    },
  };
}

/**
 * Helper: Calculate confidence score for recommendations
 */
function calculateConfidence(meta: ComponentMetadata<any>, intent: string): number {
  let score = 0;

  // Exact match
  if (meta.supportedIntents.includes(intent as any)) {
    score += 100;
  }

  // Partial match
  meta.supportedIntents.forEach((supportedIntent) => {
    if (
      supportedIntent.toLowerCase().includes(intent.toLowerCase()) ||
      intent.toLowerCase().includes(supportedIntent.toLowerCase())
    ) {
      score += 50;
    }
  });

  // Category relevance
  if (intent.includes("action") && meta.category === "action") {
    score += 25;
  }

  return score;
}

/**
 * MCP Server Configuration
 * This would be exposed via Model Context Protocol
 */
export const MCPServerConfig = {
  name: "annocraft-ui",
  version: "1.0.0",
  description: "AI-native component intelligence for Annocraft UI",
  tools: [
    {
      name: "list_components",
      description: "List all available components",
      parameters: {},
    },
    {
      name: "describe_component",
      description: "Get detailed metadata for a component",
      parameters: {
        componentName: {
          type: "string",
          required: true,
          description: "Name of the component",
        },
      },
    },
    {
      name: "recommend_component",
      description: "Get component recommendations based on intent",
      parameters: {
        intent: {
          type: "string",
          required: true,
          description: "Design intent (e.g., 'primaryAction', 'destructive')",
        },
        category: {
          type: "string",
          required: false,
          description: "Component category filter",
        },
      },
    },
    {
      name: "validate_usage",
      description: "Validate component usage for accessibility and composition",
      parameters: {
        component: {
          type: "string",
          required: true,
        },
        props: {
          type: "object",
          required: true,
        },
        context: {
          type: "object",
          required: false,
        },
      },
    },
    {
      name: "compose_layout",
      description: "Generate layout from goal description",
      parameters: {
        goal: {
          type: "string",
          required: true,
          description: "What you want to build",
        },
      },
    },
    {
      name: "audit_accessibility",
      description: "Audit components for accessibility compliance",
      parameters: {
        components: {
          type: "array",
          required: true,
        },
      },
    },
  ],
};
