/**
 * TOAST COMPONENT
 */

import * as React from 'react'
import { Intent } from '../../design/intents'

export interface ToastProps {
  title?: string
  description?: string
  intent?: Extract<Intent, 'successFeedback' | 'errorFeedback' | 'warningFeedback' | 'infoFeedback'>
  duration?: number
  onClose?: () => void
}

export function Toast({ title, description, intent = 'infoFeedback', duration = 5000, onClose }: ToastProps) {
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const styles = {
    successFeedback: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
    errorFeedback: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
    warningFeedback: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100',
    infoFeedback: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
  }

  return (
    <div className={`rounded-lg border p-4 shadow-lg ${styles[intent]}`} role="alert">
      <div className="flex items-start justify-between gap-3">
        <div>
          {title && <div className="font-semibold mb-1">{title}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-current opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
