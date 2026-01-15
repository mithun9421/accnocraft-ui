'use client'

import { Switch } from '../../../../components/switch/switch'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Switch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Toggle between enabled and disabled states
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add switch"
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
            code={`import { Switch } from "@/components/switch/switch"

export default function App() {
  return (
    <Switch label="Enable notifications" />
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
            <CardTitle className="text-xl">Default</CardTitle>
            <CardDescription>
              Basic switch with optional label
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Switch />
              <Switch label="Enable feature" />
              <Switch label="Dark mode" defaultChecked />
            </div>
            <CodeBlock
              code={`<Switch />
<Switch label="Enable feature" />
<Switch label="Dark mode" defaultChecked />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Size Variants</CardTitle>
            <CardDescription>
              Two sizes: sm and md (default)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Switch size="sm" label="Small switch" />
              <Switch size="md" label="Medium switch" />
            </div>
            <CodeBlock
              code={`<Switch size="sm" label="Small switch" />
<Switch size="md" label="Medium switch" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Controlled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Controlled</CardTitle>
            <CardDescription>
              Control switch state externally
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Switch
                label="Notifications"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Notifications are {enabled ? 'enabled' : 'disabled'}
              </p>
            </div>
            <CodeBlock
              code={`const [enabled, setEnabled] = useState(false)

return (
  <>
    <Switch
      label="Notifications"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
    <p>Notifications are {enabled ? 'enabled' : 'disabled'}</p>
  </>
)`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Disabled</CardTitle>
            <CardDescription>
              Disable switch interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" disabled defaultChecked />
            </div>
            <CodeBlock
              code={`<Switch label="Disabled off" disabled />
<Switch label="Disabled on" disabled defaultChecked />`}
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
                  <td className="py-2 pr-4 font-mono text-xs">label</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Label text for the switch</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Switch size</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">checked</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Controlled checked state</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">defaultChecked</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Initial checked state</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Disable the switch</td>
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
            <li>✓ Keyboard accessible (Space to toggle)</li>
            <li>✓ Proper focus indicators</li>
            <li>✓ Associated label for screen readers</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
