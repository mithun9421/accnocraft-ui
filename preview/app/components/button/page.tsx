'use client'

import { Button } from '../../../../components/button/button'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Button</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Semantic, accessible buttons with intent-based APIs
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add button"
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
            code={`import { Button } from "@/components/button/button"

export default function App() {
  return (
    <Button intent="primaryAction">
      Click me
    </Button>
  )
}`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-8">
        {/* Intent Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Intent Variants</CardTitle>
            <CardDescription>
              Buttons use semantic intents instead of colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button intent="primaryAction">Primary Action</Button>
              <Button intent="secondaryAction">Secondary Action</Button>
              <Button intent="destructiveAction">Delete</Button>
            </div>
            <CodeBlock
              code={`<Button intent="primaryAction">Primary Action</Button>
<Button intent="secondaryAction">Secondary Action</Button>
<Button intent="destructiveAction">Delete</Button>`}
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
            <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <CodeBlock
              code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Emphasis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Emphasis Levels</CardTitle>
            <CardDescription>
              Control visual weight with emphasis prop
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button emphasis="high">High Emphasis</Button>
              <Button emphasis="medium">Medium Emphasis</Button>
              <Button emphasis="low">Low Emphasis</Button>
            </div>
            <CodeBlock
              code={`<Button emphasis="high">High Emphasis</Button>
<Button emphasis="medium">Medium Emphasis</Button>
<Button emphasis="low">Low Emphasis</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Loading State */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Loading State</CardTitle>
            <CardDescription>
              Show loading state during async operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button
                state={loading ? 'loading' : 'default'}
                disabled={loading}
                onClick={handleClick}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
            <CodeBlock
              code={`const [loading, setLoading] = useState(false)

const handleClick = () => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}

return (
  <Button
    state={loading ? 'loading' : 'default'}
    disabled={loading}
    onClick={handleClick}
  >
    {loading ? 'Saving...' : 'Save Changes'}
  </Button>
)`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Icons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Icons</CardTitle>
            <CardDescription>
              Add icons before, after, or icon-only mode
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button iconBefore={<span>←</span>}>Back</Button>
              <Button iconAfter={<span>→</span>}>Next</Button>
              <Button iconOnly aria-label="Close">✕</Button>
            </div>
            <CodeBlock
              code={`<Button iconBefore={<ChevronLeft />}>Back</Button>
<Button iconAfter={<ChevronRight />}>Next</Button>
<Button iconOnly aria-label="Close">
  <X />
</Button>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Full Width */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Full Width</CardTitle>
            <CardDescription>
              Stretch button to full container width
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button fullWidth>Full Width Button</Button>
            </div>
            <CodeBlock
              code={`<Button fullWidth>Full Width Button</Button>`}
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
                  <td className="py-2 pr-4 font-mono text-xs">intent</td>
                  <td className="py-2 pr-4 font-mono text-xs">"primaryAction" | "secondaryAction" | "destructiveAction"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"primaryAction"</td>
                  <td className="py-2">Semantic intent of the button</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Visual size of the button</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">emphasis</td>
                  <td className="py-2 pr-4 font-mono text-xs">"low" | "medium" | "high"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"high"</td>
                  <td className="py-2">Visual emphasis level</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">state</td>
                  <td className="py-2 pr-4 font-mono text-xs">"default" | "disabled" | "loading"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"default"</td>
                  <td className="py-2">Interactive state</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">iconBefore</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Icon before button text</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">iconAfter</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Icon after button text</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">iconOnly</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Icon-only mode (requires aria-label)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">fullWidth</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Full width button</td>
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
            <li>✓ Keyboard accessible (Enter and Space keys)</li>
            <li>✓ Proper focus indicators</li>
            <li>✓ WCAG 2.1 AA compliant</li>
            <li>✓ Screen reader tested</li>
            <li>✓ Minimum 44px touch target (lg size)</li>
            <li>✓ Icon-only buttons require aria-label</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
