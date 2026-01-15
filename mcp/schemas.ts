/**
 * ANNOCRAFT UI — MCP SCHEMAS
 *
 * JSON schemas for MCP tool parameters and responses
 */

export const MCPSchemas = {
  listComponents: {
    input: {},
    output: {
      type: "object",
      properties: {
        components: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              category: { type: "string" },
              description: { type: "string" },
              version: { type: "string" },
            },
          },
        },
      },
    },
  },

  describeComponent: {
    input: {
      type: "object",
      properties: {
        componentName: {
          type: "string",
          description: "Name of the component to describe",
        },
      },
      required: ["componentName"],
    },
    output: {
      type: "object",
      properties: {
        component: {
          type: "object",
          description: "Full component metadata",
        },
        error: { type: "string" },
      },
    },
  },

  recommendComponent: {
    input: {
      type: "object",
      properties: {
        intent: {
          type: "string",
          description: "Design intent (e.g., 'primaryAction', 'feedback')",
        },
        category: {
          type: "string",
          description: "Component category filter (optional)",
        },
        constraints: {
          type: "array",
          items: { type: "string" },
          description: "Additional constraints (optional)",
        },
      },
      required: ["intent"],
    },
    output: {
      type: "object",
      properties: {
        recommendations: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              category: { type: "string" },
              description: { type: "string" },
              confidence: { type: "number" },
            },
          },
        },
      },
    },
  },

  validateUsage: {
    input: {
      type: "object",
      properties: {
        component: { type: "string" },
        props: {
          type: "object",
          description: "Component props to validate",
        },
        context: {
          type: "object",
          properties: {
            parent: { type: "string" },
            children: {
              type: "array",
              items: { type: "string" },
            },
          },
        },
      },
      required: ["component", "props"],
    },
    output: {
      type: "object",
      properties: {
        valid: { type: "boolean" },
        errors: {
          type: "array",
          items: { type: "string" },
        },
        warnings: {
          type: "array",
          items: { type: "string" },
        },
      },
    },
  },

  composeLayout: {
    input: {
      type: "object",
      properties: {
        goal: {
          type: "string",
          description: "What you want to build",
        },
        constraints: {
          type: "array",
          items: { type: "string" },
        },
      },
      required: ["goal"],
    },
    output: {
      type: "object",
      properties: {
        layout: {
          type: "object",
          description: "Generated layout structure",
        },
        error: { type: "string" },
      },
    },
  },

  auditAccessibility: {
    input: {
      type: "object",
      properties: {
        components: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              props: { type: "object" },
            },
          },
        },
      },
      required: ["components"],
    },
    output: {
      type: "object",
      properties: {
        results: {
          type: "array",
          items: {
            type: "object",
            properties: {
              component: { type: "string" },
              wcag: { type: "string" },
              issues: {
                type: "array",
                items: { type: "string" },
              },
              passed: { type: "boolean" },
            },
          },
        },
        summary: {
          type: "object",
          properties: {
            total: { type: "number" },
            passed: { type: "number" },
            failed: { type: "number" },
          },
        },
      },
    },
  },
};
