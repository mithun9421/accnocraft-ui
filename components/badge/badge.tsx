/**
 * BADGE COMPONENT
 * Small status indicator or label
 */

import * as React from 'react'
import { Intent } from '../../design/intents'
import { Size } from '../../design/variants'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  intent?: Extract<Intent, 'successFeedback' | 'warningFeedback' | 'errorFeedback' | 'infoFeedback' | 'neutralSurface'>
  size?: Extract<Size, 'sm' | 'md'>
  variant?: 'solid' | 'outline' | 'soft'
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ intent = 'neutralSurface', size = 'sm', variant = 'soft', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-medium'

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    }

    const variantStyles = {
      solid: {
        neutralSurface: 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900',
        successFeedback: 'bg-green-600 dark:bg-green-500 text-white',
        warningFeedback: 'bg-amber-600 dark:bg-amber-500 text-white',
        errorFeedback: 'bg-red-600 dark:bg-red-500 text-white',
        infoFeedback: 'bg-blue-600 dark:bg-blue-500 text-white',
      },
      outline: {
        neutralSurface: 'border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100',
        successFeedback: 'border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300',
        warningFeedback: 'border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300',
        errorFeedback: 'border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300',
        infoFeedback: 'border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300',
      },
      soft: {
        neutralSurface: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
        successFeedback: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
        warningFeedback: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
        errorFeedback: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
        infoFeedback: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
      },
    }

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant][intent]} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
