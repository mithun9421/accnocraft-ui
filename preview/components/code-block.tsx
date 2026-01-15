'use client'

import * as React from 'react'
import { Button } from '../../components/button/button'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = 'tsx', title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          aria-label="Copy code"
          className="absolute top-2 right-2 px-3 py-1.5 text-xs font-medium rounded-md bg-gray-800 dark:bg-gray-700 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
