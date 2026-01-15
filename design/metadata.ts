/**
 * ANNOCRAFT UI — COMPONENT METADATA SCHEMA
 *
 * Machine-readable intelligence that:
 * - Has zero runtime cost (tree-shakable)
 * - Is consumable by MCP servers
 * - Guides AI agents safely
 * - Documents accessibility guarantees
 */

import { Intent } from "./intents";
import { Size, Density, Emphasis, State } from "./variants";

export type ComponentCategory =
  | "action"      // Buttons, links
  | "input"       // Forms, text fields
  | "feedback"    // Alerts, toasts, badges
  | "layout"      // Containers, grids, stacks
  | "overlay"     // Modals, popovers, tooltips
  | "navigation"  // Tabs, breadcrumbs, pagination
  | "display";    // Cards, tables, lists

export type WCAGLevel = "A" | "AA" | "AAA";

export type FocusManagement = "automatic" | "manual" | "none";

export type AccessibilityGuarantees = {
  wcag: `${number}.${number} ${WCAGLevel}`;
  keyboardNavigation: boolean;
  focusManagement: FocusManagement;
  screenReaderTested: boolean;
  minTouchTarget: string;
  contrastRatio: string;
  ariaAttributes: string[];
  semanticHTML: boolean;
};

export type KeyboardBehavior = {
  key: string;
  action: string;
  condition?: string;
}[];

export type CompositionRules = {
  cannotNestInside?: string[];
  requiresParent?: string[];
  destructiveRequiresConfirmation?: boolean;
  iconOnlyRequiresLabel?: boolean;
  maxChildren?: number;
  allowedChildren?: string[];
};

export type VariantDefinition<T extends string = string> = {
  name: T;
  default: T;
  options: Record<T, {
    description: string;
    usage: string;
  }>;
};

export type ComponentExample = {
  title: string;
  description: string;
  code: string;
  intent?: Intent;
};

export type AntiPattern = {
  pattern: string;
  reason: string;
  instead: string;
};

export type ComponentMetadata<TVariants extends Record<string, string> = Record<string, string>> = {
  // Identity
  name: string;
  category: ComponentCategory;
  description: string;

  // Design Intent
  supportedIntents: Intent[];
  defaultIntent?: Intent;

  // Variants
  variants: {
    [K in keyof TVariants]: VariantDefinition<TVariants[K]>;
  };

  // Accessibility
  accessibility: AccessibilityGuarantees;
  keyboard: KeyboardBehavior;
  aria: {
    role?: string;
    required: string[];
    optional: string[];
  };

  // AI Safety
  compositionRules: CompositionRules;
  antiPatterns: AntiPattern[];

  // Documentation
  examples: ComponentExample[];
  upgradeNotes?: string[];

  // Version
  version: string;
};

/**
 * Type-safe helper to define component metadata
 */
export function defineMetadata<T extends Record<string, string>>(
  metadata: ComponentMetadata<T>
): ComponentMetadata<T> {
  return metadata;
}
