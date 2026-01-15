/**
 * ANNOCRAFT UI — BUTTON COMPONENT
 *
 * A semantic, accessible button that expresses intent over appearance.
 */

import * as React from "react";
import { Intent } from "../../design/intents";
import { Size, Emphasis, State } from "../../design/variants";
import { buttonStyles } from "./button.styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Design intent - what this button represents semantically
   */
  intent?: Intent;

  /**
   * Visual size
   */
  size?: Size;

  /**
   * Visual emphasis level
   */
  emphasis?: Emphasis;

  /**
   * Interactive state
   */
  state?: State;

  /**
   * Icon to display before content
   */
  iconBefore?: React.ReactNode;

  /**
   * Icon to display after content
   */
  iconAfter?: React.ReactNode;

  /**
   * Icon-only mode - requires aria-label
   */
  iconOnly?: boolean;

  /**
   * Full width
   */
  fullWidth?: boolean;

  /**
   * Children content
   */
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent = "primaryAction",
      size = "md",
      emphasis = "high",
      state = "default",
      iconBefore,
      iconAfter,
      iconOnly = false,
      fullWidth = false,
      className = "",
      disabled,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Validate icon-only requires label
    if (iconOnly && !props["aria-label"]) {
      console.warn(
        "Button: iconOnly mode requires aria-label for accessibility"
      );
    }

    // Validate destructive actions
    if (intent === "destructiveAction" && !props["aria-describedby"]) {
      console.warn(
        "Button: destructiveAction intent should include aria-describedby with confirmation details"
      );
    }

    const isDisabled = disabled || state === "disabled";
    const isLoading = state === "loading";

    const styles = buttonStyles({
      intent,
      size,
      emphasis,
      state,
      iconOnly,
      fullWidth,
    });

    const classNames = `${styles} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        data-intent={intent}
        data-emphasis={emphasis}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          </span>
        )}
        <span
          className={`flex items-center justify-center ${
            isLoading ? "opacity-0" : ""
          }`}
        >
          {iconBefore && <span className="flex-shrink-0">{iconBefore}</span>}
          {!iconOnly && children}
          {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
