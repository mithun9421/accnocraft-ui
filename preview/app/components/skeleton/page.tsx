'use client'

import { Skeleton } from '../../../../components/skeleton/skeleton'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function SkeletonPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Skeleton</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display loading placeholders while content loads
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add skeleton"
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
            code={`import { Skeleton } from "@/components/skeleton/skeleton"

export default function App() {
  return (
    <Skeleton variant="text" />
  )
}`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-8">
        {/* Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Variants</CardTitle>
            <CardDescription>
              Three shape variants: text, rectangular, and circular
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Skeleton variant="text" />
              <Skeleton variant="rectangular" height={100} />
              <Skeleton variant="circular" />
            </div>
            <CodeBlock
              code={`<Skeleton variant="text" />
<Skeleton variant="rectangular" height={100} />
<Skeleton variant="circular" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Custom Dimensions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Custom Dimensions</CardTitle>
            <CardDescription>
              Specify width and height
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg space-y-4">
              <Skeleton width={200} height={20} />
              <Skeleton width="50%" height={20} />
              <Skeleton width="100%" height={100} />
            </div>
            <CodeBlock
              code={`<Skeleton width={200} height={20} />
<Skeleton width="50%" height={20} />
<Skeleton width="100%" height={100} />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Card Loading Example */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Card Loading Pattern</CardTitle>
            <CardDescription>
              Common pattern for loading card content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex gap-4">
                <Skeleton variant="circular" width={48} height={48} />
                <div className="flex-1 space-y-2">
                  <Skeleton width="60%" height={20} />
                  <Skeleton width="40%" height={16} />
                </div>
              </div>
            </div>
            <CodeBlock
              code={`<div className="flex gap-4">
  <Skeleton variant="circular" width={48} height={48} />
  <div className="flex-1 space-y-2">
    <Skeleton width="60%" height={20} />
    <Skeleton width="40%" height={16} />
  </div>
</div>`}
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
                  <td className="py-2 pr-4 font-mono text-xs">variant</td>
                  <td className="py-2 pr-4 font-mono text-xs">"text" | "circular" | "rectangular"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"text"</td>
                  <td className="py-2">Shape variant</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">width</td>
                  <td className="py-2 pr-4 font-mono text-xs">string | number</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Width of skeleton</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">height</td>
                  <td className="py-2 pr-4 font-mono text-xs">string | number</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Height of skeleton</td>
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
            <li>✓ Visual loading indication</li>
            <li>✓ Pulse animation to show loading state</li>
            <li>✓ Consider adding aria-live regions for screen readers</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
