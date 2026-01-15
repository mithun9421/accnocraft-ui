/**
 * ANNOCRAFT UI — INPUT COMPONENT
 *
 * An accessible text input with semantic variants
 */

import * as React from "react";
import { Size, State } from "../../design/variants";
import { inputStyles } from "./input.styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual size
   */
  size?: Size;

  /**
   * Interactive state
   */
  state?: State;

  /**
   * Error state with message
   */
  error?: string;

  /**
   * Helper text below input
   */
  helperText?: string;

  /**
   * Label for the input
   */
  label?: string;

  /**
   * Whether label should be visible
   */
  hideLabel?: boolean;

  /**
   * Icon before input
   */
  iconBefore?: React.ReactNode;

  /**
   * Icon after input
   */
  iconAfter?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      state = "default",
      error,
      helperText,
      label,
      hideLabel = false,
      iconBefore,
      iconAfter,
      className = "",
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const isDisabled = disabled || state === "disabled";
    const hasError = !!error;

    const styles = inputStyles({
      size,
      state,
      hasError,
      hasIconBefore: !!iconBefore,
      hasIconAfter: !!iconAfter,
    });

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-medium text-gray-700 mb-1 ${
              hideLabel ? "sr-only" : ""
            }`}
          >
            {label}
            {required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {iconBefore && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {iconBefore}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`${styles} ${className}`}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={
              [errorId, helperId].filter(Boolean).join(" ") || undefined
            }
            required={required}
            {...props}
          />

          {iconAfter && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {iconAfter}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
