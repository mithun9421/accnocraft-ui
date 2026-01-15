/**
 * AVATAR COMPONENT
 */

import * as React from 'react'
import { Size } from '../../design/variants'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: Size
  fallback?: string
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = '', size = 'md', fallback, className = '', ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false)

    const sizeClasses = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
    }

    const showFallback = !src || imgError

    return (
      <div
        ref={ref}
        className={`relative inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {!showFallback && (
          <img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}
        {showFallback && (
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {fallback || alt.charAt(0).toUpperCase() || '?'}
          </span>
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'
