/**
 * SKELETON COMPONENT
 */

import * as React from 'react'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'text', width, height, className = '', ...props }, ref) => {
    const variantClasses = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-md',
    }

    const style: React.CSSProperties = {
      width: width || (variant === 'circular' ? '40px' : '100%'),
      height: height || (variant === 'circular' ? '40px' : variant === 'text' ? '1em' : '100px'),
    }

    return (
      <div
        ref={ref}
        className={`animate-pulse bg-gray-200 dark:bg-gray-800 ${variantClasses[variant]} ${className}`}
        style={style}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'
