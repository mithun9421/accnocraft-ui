/**
 * ANNOCRAFT UI — DESIGN TOKENS
 *
 * Semantic tokens mapped to Tailwind utilities.
 * Never expose raw color names in component APIs.
 */

import { Intent } from "./intents";

/**
 * Maps design intents to Tailwind class utilities
 * These are semantic mappings - can be overridden via Tailwind config
 */
export const intentTokens: Record<Intent, {
  background: string;
  foreground: string;
  border: string;
  hover: string;
  active: string;
  focus: string;
}> = {
  primaryAction: {
    background: "bg-blue-600 dark:bg-blue-500",
    foreground: "text-white dark:text-white",
    border: "border-blue-600 dark:border-blue-500",
    hover: "hover:bg-blue-700 dark:hover:bg-blue-600",
    active: "active:bg-blue-800 dark:active:bg-blue-700",
    focus: "focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2",
  },
  secondaryAction: {
    background: "bg-gray-100",
    foreground: "text-gray-900",
    border: "border-gray-300",
    hover: "hover:bg-gray-200",
    active: "active:bg-gray-300",
    focus: "focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
  },
  destructiveAction: {
    background: "bg-red-600",
    foreground: "text-white",
    border: "border-red-600",
    hover: "hover:bg-red-700",
    active: "active:bg-red-800",
    focus: "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
  },
  neutralSurface: {
    background: "bg-white",
    foreground: "text-gray-900",
    border: "border-gray-200",
    hover: "hover:bg-gray-50",
    active: "active:bg-gray-100",
    focus: "focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
  },
  elevatedSurface: {
    background: "bg-white shadow-lg",
    foreground: "text-gray-900",
    border: "border-gray-200",
    hover: "hover:shadow-xl",
    active: "active:shadow-md",
    focus: "focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
  },
  successFeedback: {
    background: "bg-green-50",
    foreground: "text-green-900",
    border: "border-green-200",
    hover: "hover:bg-green-100",
    active: "active:bg-green-200",
    focus: "focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
  },
  warningFeedback: {
    background: "bg-amber-50",
    foreground: "text-amber-900",
    border: "border-amber-200",
    hover: "hover:bg-amber-100",
    active: "active:bg-amber-200",
    focus: "focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
  },
  errorFeedback: {
    background: "bg-red-50",
    foreground: "text-red-900",
    border: "border-red-200",
    hover: "hover:bg-red-100",
    active: "active:bg-red-200",
    focus: "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
  },
  infoFeedback: {
    background: "bg-blue-50",
    foreground: "text-blue-900",
    border: "border-blue-200",
    hover: "hover:bg-blue-100",
    active: "active:bg-blue-200",
    focus: "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  },
};

/**
 * Size-based token mappings
 */
export const sizeTokens = {
  sm: {
    height: "h-8",
    padding: "px-3 py-1.5",
    text: "text-sm",
    gap: "gap-1.5",
  },
  md: {
    height: "h-10",
    padding: "px-4 py-2",
    text: "text-base",
    gap: "gap-2",
  },
  lg: {
    height: "h-12",
    padding: "px-6 py-3",
    text: "text-lg",
    gap: "gap-2.5",
  },
} as const;

/**
 * State-based token mappings
 */
export const stateTokens = {
  default: "",
  disabled: "opacity-50 cursor-not-allowed",
  loading: "cursor-wait",
} as const;
