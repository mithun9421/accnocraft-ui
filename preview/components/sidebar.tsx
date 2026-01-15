'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Alert', href: '/components/alert' },
      { title: 'Avatar', href: '/components/avatar' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Button', href: '/components/button' },
      { title: 'Card', href: '/components/card' },
      { title: 'Checkbox', href: '/components/checkbox' },
      { title: 'Dialog', href: '/components/dialog' },
      { title: 'Dropdown', href: '/components/dropdown' },
      { title: 'Input', href: '/components/input' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Radio', href: '/components/radio' },
      { title: 'Select', href: '/components/select' },
      { title: 'Skeleton', href: '/components/skeleton' },
      { title: 'Slider', href: '/components/slider' },
      { title: 'Switch', href: '/components/switch' },
      { title: 'Tabs', href: '/components/tabs' },
      { title: 'Textarea', href: '/components/textarea' },
      { title: 'Toast', href: '/components/toast' },
      { title: 'Toggle', href: '/components/toggle' },
      { title: 'Tooltip', href: '/components/tooltip' },
    ],
  },
  {
    title: 'Animation',
    items: [
      { title: 'Framer Motion', href: '/animation/framer-motion' },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-16 left-0 bottom-0 w-64 overflow-y-auto border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
      <nav className="space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-sm px-3 py-1.5 rounded-md transition-colors ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
