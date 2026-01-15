'use client'

import { Tooltip } from '../../../../components/tooltip/tooltip'
import { Button } from '../../../../components/button/button'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function TooltipPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Tooltip</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display contextual information on hover or focus
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add tooltip"
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
            code={`import { Tooltip } from "@/components/tooltip/tooltip"

export default function App() {
  return (
    <Tooltip content="Helpful information">
      <Button>Hover me</Button>
    </Tooltip>
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
            <CardTitle className="text-xl">Default Tooltip</CardTitle>
            <CardDescription>
              Basic tooltip on top
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Tooltip content="This is a tooltip">
                <Button>Hover me</Button>
              </Tooltip>
            </div>
            <CodeBlock
              code={`<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Position */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tooltip Positions</CardTitle>
            <CardDescription>
              Control tooltip placement: top, right, bottom, left
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-8 justify-center items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Tooltip content="Top tooltip" side="top">
                <Button>Top</Button>
              </Tooltip>
              <Tooltip content="Right tooltip" side="right">
                <Button>Right</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" side="bottom">
                <Button>Bottom</Button>
              </Tooltip>
              <Tooltip content="Left tooltip" side="left">
                <Button>Left</Button>
              </Tooltip>
            </div>
            <CodeBlock
              code={`<Tooltip content="Top tooltip" side="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Right tooltip" side="right">
  <Button>Right</Button>
</Tooltip>
<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left tooltip" side="left">
  <Button>Left</Button>
</Tooltip>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Text */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tooltip on Text</CardTitle>
            <CardDescription>
              Show tooltips on inline elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100">
                This is{' '}
                <Tooltip content="Additional context">
                  <span className="underline decoration-dotted cursor-help">helpful text</span>
                </Tooltip>
                {' '}with a tooltip
              </p>
            </div>
            <CodeBlock
              code={`<p>
  This is{' '}
  <Tooltip content="Additional context">
    <span className="underline decoration-dotted cursor-help">
      helpful text
    </span>
  </Tooltip>
  {' '}with a tooltip
</p>`}
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
                  <td className="py-2 pr-4 font-mono text-xs">content</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Tooltip content</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">side</td>
                  <td className="py-2 pr-4 font-mono text-xs">"top" | "right" | "bottom" | "left"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"top"</td>
                  <td className="py-2">Tooltip position</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">children</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Trigger element</td>
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
            <li>✓ Shows on both hover and focus</li>
            <li>✓ Uses role="tooltip"</li>
            <li>✓ Keyboard accessible</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
