/**
 * ANNOCRAFT UI — DIALOG METADATA
 */

import { defineMetadata } from "../../design/metadata";

export const dialogMeta = defineMetadata({
  name: "Dialog",
  version: "1.0.0",
  category: "overlay",
  description:
    "An accessible modal dialog that overlays content and captures focus, built on Radix UI primitives.",

  supportedIntents: ["elevatedSurface"],
  defaultIntent: "elevatedSurface",

  variants: {
    size: {
      name: "size",
      default: "md",
      options: {
        sm: {
          description: "Compact dialog for simple messages",
          usage: "Confirmations, alerts, simple forms",
        },
        md: {
          description: "Standard dialog size",
          usage: "Most dialog content",
        },
        lg: {
          description: "Large dialog for complex content",
          usage: "Multi-step forms, detailed content",
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
      "aria-labelledby",
      "aria-describedby",
      "role=dialog",
      "aria-modal=true",
    ],
    semanticHTML: true,
  },

  keyboard: [
    {
      key: "Escape",
      action: "Closes the dialog",
    },
    {
      key: "Tab",
      action: "Cycles focus within dialog (focus trap)",
    },
  ],

  aria: {
    role: "dialog",
    required: ["aria-labelledby", "aria-describedby"],
    optional: ["aria-modal"],
  },

  compositionRules: {
    requiresParent: [],
    cannotNestInside: ["dialog"],
    maxChildren: undefined,
  },

  antiPatterns: [
    {
      pattern: "Missing DialogTitle",
      reason: "Screen readers cannot announce dialog purpose",
      instead: "Always include DialogTitle with descriptive text",
    },
    {
      pattern: "Nesting dialogs",
      reason: "Creates confusing focus management and unclear UX",
      instead: "Close first dialog before opening second, or use multi-step form",
    },
    {
      pattern: "Non-dismissible dialog without clear action",
      reason: "Traps users with no escape route",
      instead: "Always provide close button or clear primary action",
    },
  ],

  examples: [
    {
      title: "Basic Dialog",
      description: "Simple confirmation dialog",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button intent="secondaryAction">Cancel</Button>
      <Button intent="primaryAction">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
  ],

  upgradeNotes: ["Version 1.0.0: Initial release with Radix primitives"],
});
