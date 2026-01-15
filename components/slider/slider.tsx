/**
 * SLIDER COMPONENT
 */

import * as React from 'react'

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, size = 'md', className = '', id, ...props }, ref) => {
    const sliderId = id || React.useId()

    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
    }

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={sliderId} className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="range"
          id={sliderId}
          className={`w-full ${sizeClasses[size]} appearance-none cursor-pointer rounded-lg bg-gray-200 dark:bg-gray-700 accent-blue-600 dark:accent-blue-500 ${className}`}
          {...props}
        />
      </div>
    )
  }
)

Slider.displayName = 'Slider'
