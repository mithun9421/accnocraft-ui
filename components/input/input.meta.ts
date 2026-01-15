/**
 * ANNOCRAFT UI — INPUT METADATA
 */

import { defineMetadata } from "../../design/metadata";

export const inputMeta = defineMetadata({
  name: "Input",
  version: "1.0.0",
  category: "input",
  description:
    "An accessible text input component with label, error, and helper text support.",

  supportedIntents: ["neutralSurface"],
  defaultIntent: "neutralSurface",

  variants: {
    size: {
      name: "size",
      default: "md",
      options: {
        sm: {
          description: "Compact input for dense layouts",
          usage: "Inline forms, toolbars",
        },
        md: {
          description: "Standard input size",
          usage: "Most form fields",
        },
        lg: {
          description: "Large input for prominence",
          usage: "Hero forms, search bars",
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
          usage: "When field is unavailable",
        },
        loading: {
          description: "Loading state",
          usage: "During async validation",
        },
      },
    },
  },

  accessibility: {
    wcag: "2.1 AA",
    keyboardNavigation: true,
    focusManagement: "automatic",
    screenReaderTested: true,
    minTouchTarget: "44px",
    contrastRatio: ">=4.5:1",
    ariaAttributes: [
      "aria-label",
      "aria-describedby",
      "aria-invalid",
      "aria-required",
      "aria-disabled",
    ],
    semanticHTML: true,
  },

  keyboard: [
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
    role: undefined,
    required: [],
    optional: [
      "aria-label",
      "aria-describedby",
      "aria-invalid",
      "aria-required",
    ],
  },

  compositionRules: {
    cannotNestInside: ["button"],
  },

  antiPatterns: [
    {
      pattern: "Placeholder as label",
      reason: "Disappears on input, inaccessible to screen readers",
      instead: "Always provide visible label or use hideLabel with aria-label",
    },
    {
      pattern: "Missing error messages",
      reason: "Users don't understand validation failures",
      instead: "Use error prop with descriptive message",
    },
    {
      pattern: "No visual focus indicator",
      reason: "Keyboard users can't track focus",
      instead: "Keep default focus ring styles",
    },
  ],

  examples: [
    {
      title: "Basic Input",
      description: "Standard text input with label",
      code: `<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  required
/>`,
    },
    {
      title: "Input with Error",
      description: "Input showing validation error",
      code: `<Input
  label="Username"
  error="Username is already taken"
  value="johndoe"
/>`,
    },
    {
      title: "Input with Helper Text",
      description: "Input with additional guidance",
      code: `<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>`,
    },
  ],

  upgradeNotes: ["Version 1.0.0: Initial release"],
});
