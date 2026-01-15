/**
 * ANNOCRAFT UI — DESIGN INTENT SYSTEM
 *
 * Intent tokens represent semantic meaning, not visual properties.
 * They map user goals to design decisions while remaining theme-agnostic.
 */

export const INTENTS = {
  // Actions
  primaryAction: {
    purpose: "Main call-to-action in a given context",
    usage: "Submit forms, confirm dialogs, primary navigation",
    hierarchy: "high",
  },
  secondaryAction: {
    purpose: "Supporting actions that complement primary",
    usage: "Cancel buttons, alternative paths, secondary CTAs",
    hierarchy: "medium",
  },
  destructiveAction: {
    purpose: "Actions with irreversible or dangerous consequences",
    usage: "Delete, remove, clear data operations",
    hierarchy: "high",
    requiresConfirmation: true,
  },

  // Surfaces
  neutralSurface: {
    purpose: "Default background for content areas",
    usage: "Page backgrounds, card backgrounds",
    elevation: 0,
  },
  elevatedSurface: {
    purpose: "Content that sits above the base layer",
    usage: "Modals, popovers, dropdown menus",
    elevation: 1,
  },

  // Feedback
  successFeedback: {
    purpose: "Positive confirmation of completed actions",
    usage: "Success messages, completed states",
    tone: "positive",
  },
  warningFeedback: {
    purpose: "Caution about potential issues",
    usage: "Warning messages, validation hints",
    tone: "cautionary",
  },
  errorFeedback: {
    purpose: "Critical errors requiring attention",
    usage: "Error messages, failed validations",
    tone: "negative",
  },
  infoFeedback: {
    purpose: "Neutral informational content",
    usage: "Info messages, helper text",
    tone: "neutral",
  },
} as const;

export type Intent = keyof typeof INTENTS;

export type IntentMetadata = {
  purpose: string;
  usage: string;
  hierarchy?: "low" | "medium" | "high";
  elevation?: number;
  tone?: "positive" | "negative" | "cautionary" | "neutral";
  requiresConfirmation?: boolean;
};
