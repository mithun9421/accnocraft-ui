/**
 * ANNOCRAFT UI — MCP VALIDATORS
 *
 * Runtime validation for MCP tool parameters
 */

import { ComponentMetadata } from "../design/metadata";

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Validates component name exists in registry
 */
export function validateComponentName(
  name: string,
  registry: Record<string, ComponentMetadata<any>>
): void {
  if (!registry[name]) {
    throw new ValidationError(
      `Component "${name}" not found. Available: ${Object.keys(registry).join(", ")}`
    );
  }
}

/**
 * Validates intent string
 */
export function validateIntent(intent: string): void {
  const validIntents = [
    "primaryAction",
    "secondaryAction",
    "destructiveAction",
    "neutralSurface",
    "elevatedSurface",
    "successFeedback",
    "warningFeedback",
    "errorFeedback",
    "infoFeedback",
  ];

  if (!validIntents.includes(intent)) {
    throw new ValidationError(
      `Invalid intent "${intent}". Valid intents: ${validIntents.join(", ")}`
    );
  }
}

/**
 * Validates component category
 */
export function validateCategory(category: string): void {
  const validCategories = [
    "action",
    "input",
    "feedback",
    "layout",
    "overlay",
    "navigation",
    "display",
  ];

  if (!validCategories.includes(category)) {
    throw new ValidationError(
      `Invalid category "${category}". Valid categories: ${validCategories.join(", ")}`
    );
  }
}

/**
 * Validates props object structure
 */
export function validateProps(props: unknown): asserts props is Record<string, any> {
  if (typeof props !== "object" || props === null) {
    throw new ValidationError("Props must be an object");
  }
}

/**
 * Validates array of components for audit
 */
export function validateComponentArray(
  components: unknown
): asserts components is Array<{ name: string; props: Record<string, any> }> {
  if (!Array.isArray(components)) {
    throw new ValidationError("Components must be an array");
  }

  components.forEach((comp, index) => {
    if (typeof comp !== "object" || comp === null) {
      throw new ValidationError(`Component at index ${index} must be an object`);
    }

    if (!("name" in comp) || typeof comp.name !== "string") {
      throw new ValidationError(`Component at index ${index} must have a name string`);
    }

    if (!("props" in comp) || typeof comp.props !== "object" || comp.props === null) {
      throw new ValidationError(`Component at index ${index} must have a props object`);
    }
  });
}

/**
 * Safe validator wrapper that returns result instead of throwing
 */
export function safeValidate<T>(
  validator: () => T
): { success: true; data: T } | { success: false; error: string } {
  try {
    const data = validator();
    return { success: true, data };
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown validation error" };
  }
}
