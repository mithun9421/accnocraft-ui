'use client'

import { Toggle } from '../../../../components/toggle/toggle'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'

export default function TogglePage() {
  const [boldPressed, setBoldPressed] = useState(false)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Toggle</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Toggle button with pressed state
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add toggle"
            language="bash"
          />
        </CardContent>
      </Card>

      {/* Usage */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            code={`import { Toggle } from "@/components/toggle/toggle"

export default function App() {
  return (
    <Toggle>B</Toggle>
  )
}`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-8">
        {/* Default */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Default Toggle</CardTitle>
            <CardDescription>
              Basic toggle button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Toggle>B</Toggle>
              <Toggle>I</Toggle>
              <Toggle>U</Toggle>
            </div>
            <CodeBlock
              code={`<Toggle>B</Toggle>
<Toggle>I</Toggle>
<Toggle>U</Toggle>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Size Variants</CardTitle>
            <CardDescription>
              Three sizes: sm, md (default), and lg
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Toggle size="sm">S</Toggle>
              <Toggle size="md">M</Toggle>
              <Toggle size="lg">L</Toggle>
            </div>
            <CodeBlock
              code={`<Toggle size="sm">S</Toggle>
<Toggle size="md">M</Toggle>
<Toggle size="lg">L</Toggle>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Controlled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Controlled Toggle</CardTitle>
            <CardDescription>
              Control toggle state externally
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Toggle
                pressed={boldPressed}
                onPressedChange={setBoldPressed}
              >
                Bold
              </Toggle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Bold is {boldPressed ? 'active' : 'inactive'}
              </p>
            </div>
            <CodeBlock
              code={`const [boldPressed, setBoldPressed] = useState(false)

return (
  <>
    <Toggle
      pressed={boldPressed}
      onPressedChange={setBoldPressed}
    >
      Bold
    </Toggle>
    <p>Bold is {boldPressed ? 'active' : 'inactive'}</p>
  </>
)`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Toolbar Example */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Text Formatting Toolbar</CardTitle>
            <CardDescription>
              Common use case for toggle buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-1 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Toggle aria-label="Toggle bold">
                <span className="font-bold">B</span>
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <span className="italic">I</span>
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <span className="underline">U</span>
              </Toggle>
              <div className="w-px bg-gray-300 dark:bg-gray-700 mx-1" />
              <Toggle aria-label="Align left">L</Toggle>
              <Toggle aria-label="Align center">C</Toggle>
              <Toggle aria-label="Align right">R</Toggle>
            </div>
            <CodeBlock
              code={`<div className="flex gap-1">
  <Toggle aria-label="Toggle bold">
    <span className="font-bold">B</span>
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <span className="italic">I</span>
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <span className="underline">U</span>
  </Toggle>
</div>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Disabled State</CardTitle>
            <CardDescription>
              Prevent user interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Toggle disabled>Off</Toggle>
              <Toggle disabled pressed>On</Toggle>
            </div>
            <CodeBlock
              code={`<Toggle disabled>Off</Toggle>
<Toggle disabled pressed>On</Toggle>`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      {/* API Reference */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl">API Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Type</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Default</th>
                  <th className="text-left py-2 font-semibold text-gray-900 dark:text-gray-100">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">pressed</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Controlled pressed state</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">onPressedChange</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(pressed: boolean) => void"}</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Callback when state changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Button size</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Disable the toggle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl">Accessibility</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ Uses aria-pressed attribute</li>
            <li>✓ Keyboard accessible (Space and Enter)</li>
            <li>✓ Proper focus indicators</li>
            <li>✓ Screen reader friendly</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
