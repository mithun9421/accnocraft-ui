'use client'

import { Radio } from '../../../../components/radio/radio'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function RadioPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Radio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Select one option from a group
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add radio"
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
            code={`import { Radio } from "@/components/radio/radio"

export default function App() {
  return (
    <Radio name="option" label="Option 1" />
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
            <CardTitle className="text-xl">Radio Group</CardTitle>
            <CardDescription>
              Group of radio buttons with same name
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Radio name="plan" label="Free Plan" value="free" defaultChecked />
              <Radio name="plan" label="Pro Plan" value="pro" />
              <Radio name="plan" label="Enterprise Plan" value="enterprise" />
            </div>
            <CodeBlock
              code={`<Radio name="plan" label="Free Plan" value="free" defaultChecked />
<Radio name="plan" label="Pro Plan" value="pro" />
<Radio name="plan" label="Enterprise Plan" value="enterprise" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Without Labels */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Without Labels</CardTitle>
            <CardDescription>
              Radio buttons without labels (use with custom layout)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Radio name="choice" value="a" />
              <Radio name="choice" value="b" />
              <Radio name="choice" value="c" />
            </div>
            <CodeBlock
              code={`<Radio name="choice" value="a" />
<Radio name="choice" value="b" />
<Radio name="choice" value="c" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Descriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Descriptions</CardTitle>
            <CardDescription>
              Radio group with custom layout for descriptions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <label className="flex gap-3 p-3 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer hover:bg-white dark:hover:bg-gray-950">
                <Radio name="subscription" value="monthly" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">Monthly</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">$9.99/month</div>
                </div>
              </label>
              <label className="flex gap-3 p-3 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer hover:bg-white dark:hover:bg-gray-950">
                <Radio name="subscription" value="yearly" defaultChecked />
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">Yearly</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">$99.99/year (Save 17%)</div>
                </div>
              </label>
            </div>
            <CodeBlock
              code={`<label className="flex gap-3 p-3 border rounded-lg cursor-pointer">
  <Radio name="subscription" value="monthly" />
  <div>
    <div className="font-medium">Monthly</div>
    <div className="text-sm text-gray-600">$9.99/month</div>
  </div>
</label>
<label className="flex gap-3 p-3 border rounded-lg cursor-pointer">
  <Radio name="subscription" value="yearly" defaultChecked />
  <div>
    <div className="font-medium">Yearly</div>
    <div className="text-sm text-gray-600">$99.99/year (Save 17%)</div>
  </div>
</label>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Disabled State</CardTitle>
            <CardDescription>
              Prevent interaction with disabled prop
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Radio name="status" label="Available" value="available" />
              <Radio name="status" label="Unavailable" value="unavailable" disabled />
              <Radio name="status" label="Selected but disabled" value="selected" disabled defaultChecked />
            </div>
            <CodeBlock
              code={`<Radio name="status" label="Available" value="available" />
<Radio name="status" label="Unavailable" value="unavailable" disabled />
<Radio name="status" label="Selected but disabled" value="selected" disabled defaultChecked />`}
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
                  <td className="py-2">Label text for the radio</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">name</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Radio group name</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Radio value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">defaultChecked</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Initially selected</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Disable the radio</td>
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
            <li>✓ Keyboard accessible (Arrow keys to navigate group)</li>
            <li>✓ Proper label association</li>
            <li>✓ Focus indicators</li>
            <li>✓ Screen reader friendly</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
