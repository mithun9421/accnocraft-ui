/**
 * ANNOCRAFT UI — BUTTON STYLES
 *
 * Tailwind-based style composition using semantic tokens
 */

import { Intent } from "../../design/intents";
import { Size, Emphasis, State } from "../../design/variants";
import { intentTokens, sizeTokens, stateTokens } from "../../design/tokens";

export interface ButtonStyleProps {
  intent: Intent;
  size: Size;
  emphasis: Emphasis;
  state: State;
  iconOnly: boolean;
  fullWidth: boolean;
}

export function buttonStyles({
  intent,
  size,
  emphasis,
  state,
  iconOnly,
  fullWidth,
}: ButtonStyleProps): string {
  const baseStyles = [
    // Base
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "rounded-md",
    "transition-colors",
    "outline-none",

    // Focus (WCAG 2.1 AA compliant)
    "focus-visible:outline-none",
    intentTokens[intent].focus,
  ];

  // Size styles
  const sizeStyle = sizeTokens[size];
  if (iconOnly) {
    // Square aspect ratio for icon-only
    baseStyles.push(sizeStyle.height, `w-${sizeStyle.height.replace('h-', '')}`);
  } else {
    baseStyles.push(sizeStyle.height, sizeStyle.padding, sizeStyle.gap);
  }
  baseStyles.push(sizeStyle.text);

  // Intent + Emphasis combination
  if (emphasis === "high") {
    baseStyles.push(
      intentTokens[intent].background,
      intentTokens[intent].foreground,
      intentTokens[intent].hover,
      intentTokens[intent].active
    );
  } else if (emphasis === "medium") {
    baseStyles.push(
      "bg-transparent",
      intentTokens[intent].foreground,
      `border`,
      intentTokens[intent].border,
      intentTokens[intent].hover,
      intentTokens[intent].active
    );
  } else {
    // low emphasis
    baseStyles.push(
      "bg-transparent",
      intentTokens[intent].foreground,
      intentTokens[intent].hover,
      intentTokens[intent].active
    );
  }

  // State styles
  baseStyles.push(stateTokens[state]);

  // Full width
  if (fullWidth) {
    baseStyles.push("w-full");
  }

  return baseStyles.join(" ");
}
