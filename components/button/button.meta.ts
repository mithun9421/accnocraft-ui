/**
 * ANNOCRAFT UI — BUTTON METADATA
 *
 * Machine-readable component intelligence for AI agents and MCP
 */

import { defineMetadata } from "../../design/metadata";

export const buttonMeta = defineMetadata({
  name: "Button",
  version: "1.0.0",
  category: "action",
  description:
    "An accessible, semantic button component that represents user actions with clear intent.",

  supportedIntents: [
    "primaryAction",
    "secondaryAction",
    "destructiveAction",
  ],
  defaultIntent: "primaryAction",

  variants: {
    intent: {
      name: "intent",
      default: "primaryAction",
      options: {
        primaryAction: {
          description: "Main call-to-action",
          usage: "Submit forms, confirm dialogs, primary navigation",
        },
        secondaryAction: {
          description: "Supporting action",
          usage: "Cancel buttons, alternative paths",
        },
        destructiveAction: {
          description: "Dangerous or irreversible action",
          usage: "Delete, remove, clear data - must include confirmation",
        },
      },
    },
    size: {
      name: "size",
      default: "md",
      options: {
        sm: {
          description: "Compact size for dense interfaces",
          usage: "Toolbars, inline actions, mobile interfaces",
        },
        md: {
          description: "Standard size for most use cases",
          usage: "Forms, dialogs, general UI",
        },
        lg: {
          description: "Prominent size for primary actions",
          usage: "Hero sections, landing pages, critical CTAs",
        },
      },
    },
    emphasis: {
      name: "emphasis",
      default: "high",
      options: {
        low: {
          description: "Minimal visual weight",
          usage: "Tertiary actions, text links",
        },
        medium: {
          description: "Outlined style",
          usage: "Secondary actions",
        },
        high: {
          description: "Solid fill, maximum prominence",
          usage: "Primary actions",
        },
      },
    },
    state: {
      name: "state",
      default: "default",
      options: {
        default: {
          description: "Normal interactive state",
          usage: "Default state",
        },
        disabled: {
          description: "Non-interactive",
          usage: "When action is unavailable",
        },
        loading: {
          description: "Async operation in progress",
          usage: "During API calls or processing",
        },
      },
    },
  },

  accessibility: {
    wcag: "2.1 AA",
    keyboardNavigation: true,
    focusManagement: "automatic",
    screenReaderTested: true,
    minTouchTarget: "44px (lg) / 40px (md) / 36px (sm)",
    contrastRatio: ">=4.5:1",
    ariaAttributes: ["aria-label", "aria-describedby", "aria-disabled", "aria-busy"],
    semanticHTML: true,
  },

  keyboard: [
    {
      key: "Enter",
      action: "Activates the button",
    },
    {
      key: "Space",
      action: "Activates the button",
    },
    {
      key: "Tab",
      action: "Moves focus to next focusable element",
    },
    {
      key: "Shift+Tab",
      action: "Moves focus to previous focusable element",
    },
  ],

  aria: {
    role: "button",
    required: [],
    optional: ["aria-label", "aria-describedby", "aria-pressed", "aria-expanded"],
  },

  compositionRules: {
    cannotNestInside: ["button", "a"],
    destructiveRequiresConfirmation: true,
    iconOnlyRequiresLabel: true,
  },

  antiPatterns: [
    {
      pattern: "Using <div> or <span> styled as button",
      reason: "Breaks keyboard navigation and screen reader semantics",
      instead: "Always use <button> element with proper type attribute",
    },
    {
      pattern: "Icon-only button without aria-label",
      reason: "Screen readers cannot announce button purpose",
      instead: "Add aria-label describing the action",
    },
    {
      pattern: "Destructive action without confirmation",
      reason: "Users may accidentally trigger irreversible actions",
      instead: "Wrap in confirmation dialog or use aria-describedby",
    },
    {
      pattern: "Using onClick on disabled button",
      reason: "Disabled buttons should not be interactive",
      instead: "Enable button when action becomes available",
    },
    {
      pattern: "Nesting interactive elements inside button",
      reason: "Violates HTML semantics and confuses assistive tech",
      instead: "Keep button content non-interactive",
    },
  ],

  examples: [
    {
      title: "Primary Action",
      description: "Main call-to-action in a form or dialog",
      intent: "primaryAction",
      code: `<Button intent="primaryAction" size="md" emphasis="high">
  Save Changes
</Button>`,
    },
    {
      title: "Destructive Action",
      description: "Dangerous action requiring confirmation",
      intent: "destructiveAction",
      code: `<Button
  intent="destructiveAction"
  emphasis="high"
  aria-describedby="delete-warning"
>
  Delete Account
</Button>
<p id="delete-warning" className="sr-only">
  This action cannot be undone
</p>`,
    },
    {
      title: "Icon-Only Button",
      description: "Button with only an icon, requires aria-label",
      code: `<Button
  iconOnly
  aria-label="Close dialog"
  emphasis="low"
>
  <XIcon />
</Button>`,
    },
    {
      title: "Loading State",
      description: "Button showing async operation",
      code: `<Button state="loading" disabled>
  Saving...
</Button>`,
    },
  ],

  upgradeNotes: [
    "Version 1.0.0: Initial release with full intent system",
  ],
});
