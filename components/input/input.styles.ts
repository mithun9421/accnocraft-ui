/**
 * ANNOCRAFT UI — INPUT STYLES
 */

import { Size, State } from "../../design/variants";
import { sizeTokens, stateTokens } from "../../design/tokens";

export interface InputStyleProps {
  size: Size;
  state: State;
  hasError: boolean;
  hasIconBefore: boolean;
  hasIconAfter: boolean;
}

export function inputStyles({
  size,
  state,
  hasError,
  hasIconBefore,
  hasIconAfter,
}: InputStyleProps): string {
  const baseStyles = [
    // Base
    "w-full",
    "rounded-md",
    "border",
    "bg-white",
    "transition-colors",
    "outline-none",

    // Focus
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
  ];

  // Size styles
  const sizeStyle = sizeTokens[size];
  baseStyles.push(sizeStyle.height, sizeStyle.text);

  // Padding (adjusted for icons)
  if (hasIconBefore) {
    baseStyles.push("pl-10");
  } else {
    baseStyles.push("pl-3");
  }

  if (hasIconAfter) {
    baseStyles.push("pr-10");
  } else {
    baseStyles.push("pr-3");
  }

  // Error state
  if (hasError) {
    baseStyles.push(
      "border-red-300",
      "text-red-900",
      "placeholder-red-300",
      "focus:border-red-500",
      "focus:ring-red-500"
    );
  } else {
    baseStyles.push(
      "border-gray-300",
      "text-gray-900",
      "placeholder-gray-400",
      "focus:border-blue-500",
      "focus:ring-blue-500"
    );
  }

  // State styles
  baseStyles.push(stateTokens[state]);

  return baseStyles.join(" ");
}
