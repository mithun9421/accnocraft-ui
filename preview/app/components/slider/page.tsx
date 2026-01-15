'use client'

import { Slider } from '../../../../components/slider/slider'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'

export default function SliderPage() {
  const [volume, setVolume] = useState(50)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Slider</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Range input for selecting numerical values
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add slider"
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
            code={`import { Slider } from "@/components/slider/slider"

export default function App() {
  return (
    <Slider label="Volume" defaultValue={50} />
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
            <CardTitle className="text-xl">Default Slider</CardTitle>
            <CardDescription>
              Basic slider with label
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Slider label="Brightness" defaultValue={75} />
            </div>
            <CodeBlock
              code={`<Slider label="Brightness" defaultValue={75} />`}
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
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-6">
              <Slider label="Small slider" size="sm" defaultValue={30} />
              <Slider label="Medium slider" size="md" defaultValue={70} />
            </div>
            <CodeBlock
              code={`<Slider label="Small slider" size="sm" defaultValue={30} />
<Slider label="Medium slider" size="md" defaultValue={70} />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Controlled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Controlled Slider</CardTitle>
            <CardDescription>
              Control slider value externally
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Slider
                label={`Volume: ${volume}%`}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
              />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Current value: {volume}
              </div>
            </div>
            <CodeBlock
              code={`const [volume, setVolume] = useState(50)

return (
  <>
    <Slider
      label={\`Volume: \${volume}%\`}
      value={volume}
      onChange={(e) => setVolume(Number(e.target.value))}
    />
    <div>Current value: {volume}</div>
  </>
)`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Custom Range */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Custom Range</CardTitle>
            <CardDescription>
              Set custom min, max, and step values
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-6">
              <Slider label="Price (0-1000)" min={0} max={1000} step={10} defaultValue={500} />
              <Slider label="Temperature (0-100°C)" min={0} max={100} step={5} defaultValue={20} />
            </div>
            <CodeBlock
              code={`<Slider label="Price (0-1000)" min={0} max={1000} step={10} defaultValue={500} />
<Slider label="Temperature (0-100°C)" min={0} max={100} step={5} defaultValue={20} />`}
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
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Slider label="Disabled slider" defaultValue={40} disabled />
            </div>
            <CodeBlock
              code={`<Slider label="Disabled slider" defaultValue={40} disabled />`}
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
                  <td className="py-2">Label text</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Slider height</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">min</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">0</td>
                  <td className="py-2">Minimum value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">max</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">100</td>
                  <td className="py-2">Maximum value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">step</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">1</td>
                  <td className="py-2">Step increment</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">defaultValue</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Initial value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Controlled value</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Disable the slider</td>
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
            <li>✓ Keyboard accessible (Arrow keys to adjust)</li>
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
