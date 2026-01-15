'use client'

import { Progress } from '../../../../components/progress/progress'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'
import { Button } from '../../../../components/button/button'

export default function ProgressPage() {
  const [progress, setProgress] = useState(33)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Progress</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display progress of tasks with accessible progress bars
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add progress"
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
            code={`import { Progress } from "@/components/progress/progress"

export default function App() {
  return (
    <Progress value={60} />
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
            <CardTitle className="text-xl">Default Progress</CardTitle>
            <CardDescription>
              Basic progress bar with percentage value
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Progress value={25} />
              <Progress value={50} />
              <Progress value={75} />
            </div>
            <CodeBlock
              code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />`}
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
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Progress value={60} size="sm" />
              <Progress value={60} size="md" />
              <Progress value={60} size="lg" />
            </div>
            <CodeBlock
              code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Interactive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Interactive Example</CardTitle>
            <CardDescription>
              Control progress dynamically
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Progress value={progress} />
              <div className="flex gap-2">
                <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                  -10%
                </Button>
                <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                  +10%
                </Button>
                <Button size="sm" onClick={() => setProgress(0)}>
                  Reset
                </Button>
              </div>
            </div>
            <CodeBlock
              code={`const [progress, setProgress] = useState(33)

return (
  <>
    <Progress value={progress} />
    <div className="flex gap-2">
      <Button onClick={() => setProgress(Math.max(0, progress - 10))}>
        -10%
      </Button>
      <Button onClick={() => setProgress(Math.min(100, progress + 10))}>
        +10%
      </Button>
    </div>
  </>
)`}
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
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Current progress value</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">max</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">100</td>
                  <td className="py-2">Maximum value</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Progress bar height</td>
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
            <li>✓ Uses role="progressbar"</li>
            <li>✓ Includes aria-valuenow, aria-valuemin, aria-valuemax</li>
            <li>✓ Visual progress indication</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
