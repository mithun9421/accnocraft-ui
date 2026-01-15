/**
 * SWITCH COMPONENT
 */

import * as React from 'react'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className = '', id, ...props }, ref) => {
    const switchId = id || React.useId()

    const sizeClasses = {
      sm: {
        track: 'h-5 w-9',
        thumb: 'h-4 w-4',
        translate: 'translate-x-4',
      },
      md: {
        track: 'h-6 w-11',
        thumb: 'h-5 w-5',
        translate: 'translate-x-5',
      },
    }

    const classes = sizeClasses[size]

    return (
      <div className="flex items-center gap-2">
        <label htmlFor={switchId} className="relative inline-block cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className="sr-only peer"
            {...props}
          />
          <div
            className={`${classes.track} rounded-full bg-gray-300 dark:bg-gray-700 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 transition-colors`}
          >
            <div
              className={`${classes.thumb} absolute left-0.5 top-0.5 rounded-full bg-white transition-transform peer-checked:${classes.translate}`}
            />
          </div>
        </label>
        {label && (
          <label htmlFor={switchId} className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer">
            {label}
          </label>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'
