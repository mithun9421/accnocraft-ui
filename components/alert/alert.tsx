/**
 * ALERT COMPONENT
 * Displays important messages with semantic intent
 */

import * as React from 'react'
import { Intent } from '../../design/intents'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: Extract<Intent, 'successFeedback' | 'warningFeedback' | 'errorFeedback' | 'infoFeedback'>
  title?: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ intent = 'infoFeedback', title, children, icon, className = '', ...props }, ref) => {
    const styles = {
      successFeedback: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
      warningFeedback: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100',
      errorFeedback: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
      infoFeedback: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    }

    const defaultIcons = {
      successFeedback: '✓',
      warningFeedback: '⚠',
      errorFeedback: '✕',
      infoFeedback: 'ℹ',
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={`rounded-lg border p-4 ${styles[intent]} ${className}`}
        {...props}
      >
        <div className="flex gap-3">
          {(icon !== undefined ? icon : defaultIcons[intent]) && (
            <span className="flex-shrink-0 text-lg">
              {icon || defaultIcons[intent]}
            </span>
          )}
          <div className="flex-1">
            {title && (
              <h5 className="font-semibold mb-1">{title}</h5>
            )}
            <div className="text-sm">{children}</div>
          </div>
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'
