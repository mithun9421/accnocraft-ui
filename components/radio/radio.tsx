/**
 * RADIO COMPONENT
 */

import * as React from 'react'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const radioId = id || React.useId()

    const radio = (
      <input
        ref={ref}
        type="radio"
        id={radioId}
        className={`h-4 w-4 rounded-full border border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    )

    if (label) {
      return (
        <div className="flex items-center gap-2">
          {radio}
          <label htmlFor={radioId} className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
            {label}
          </label>
        </div>
      )
    }

    return radio
  }
)

Radio.displayName = 'Radio'
