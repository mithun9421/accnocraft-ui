/**
 * ANNOCRAFT UI — GLOBAL VARIANT SYSTEM
 *
 * All components must implement these variants with consistent semantic meaning.
 * Variants control appearance but are named by intent, not visual properties.
 */

export const GLOBAL_VARIANTS = {
  size: {
    sm: {
      description: "Compact size for dense interfaces or inline usage",
      minTouchTarget: "36px",
      fontSize: "0.875rem",
      padding: "compact",
    },
    md: {
      description: "Standard size for most use cases",
      minTouchTarget: "40px",
      fontSize: "1rem",
      padding: "comfortable",
    },
    lg: {
      description: "Prominent size for primary actions or accessibility",
      minTouchTarget: "44px",
      fontSize: "1.125rem",
      padding: "spacious",
    },
  },

  density: {
    compact: {
      description: "Minimal spacing for information-dense UIs",
      spacing: "tight",
      usage: "Data tables, toolbars, mobile interfaces",
    },
    comfortable: {
      description: "Balanced spacing for general use",
      spacing: "normal",
      usage: "Default recommendation for most UIs",
    },
  },

  emphasis: {
    low: {
      description: "Subtle appearance, minimal visual weight",
      usage: "Tertiary actions, ghost buttons, subtle links",
      contrast: "low",
    },
    medium: {
      description: "Standard prominence",
      usage: "Secondary actions, default buttons",
      contrast: "medium",
    },
    high: {
      description: "Maximum prominence and attention",
      usage: "Primary actions, critical alerts",
      contrast: "high",
    },
  },

  state: {
    default: {
      description: "Normal interactive state",
      interactive: true,
    },
    disabled: {
      description: "Non-interactive, unavailable state",
      interactive: false,
      ariaDisabled: true,
    },
    loading: {
      description: "Async operation in progress",
      interactive: false,
      ariaBusy: true,
    },
  },
} as const;

export type Size = keyof typeof GLOBAL_VARIANTS.size;
export type Density = keyof typeof GLOBAL_VARIANTS.density;
export type Emphasis = keyof typeof GLOBAL_VARIANTS.emphasis;
export type State = keyof typeof GLOBAL_VARIANTS.state;

export type VariantProps = {
  size?: Size;
  density?: Density;
  emphasis?: Emphasis;
  state?: State;
};
