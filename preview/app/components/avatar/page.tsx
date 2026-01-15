'use client'

import { Avatar } from '../../../../components/avatar/avatar'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function AvatarPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Avatar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display user profile pictures with automatic fallback handling
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add avatar"
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
            code={`import { Avatar } from "@/components/avatar/avatar"

export default function App() {
  return (
    <Avatar
      src="/avatar.jpg"
      alt="John Doe"
    />
  )
}`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-8">
        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Size Variants</CardTitle>
            <CardDescription>
              Three sizes available: sm, md (default), and lg
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" size="sm" />
              <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" size="md" />
              <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" size="lg" />
            </div>
            <CodeBlock
              code={`<Avatar src="/avatar.jpg" alt="User" size="sm" />
<Avatar src="/avatar.jpg" alt="User" size="md" />
<Avatar src="/avatar.jpg" alt="User" size="lg" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Fallback */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Fallback</CardTitle>
            <CardDescription>
              Shows initials when image fails to load or is not provided
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Avatar alt="John Doe" />
              <Avatar alt="Jane Smith" fallback="JS" />
              <Avatar fallback="AB" />
            </div>
            <CodeBlock
              code={`<Avatar alt="John Doe" />
<Avatar alt="Jane Smith" fallback="JS" />
<Avatar fallback="AB" />`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Image */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Image</CardTitle>
            <CardDescription>
              Display user profile images
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Avatar src="https://i.pravatar.cc/150?img=5" alt="User" />
              <Avatar src="https://i.pravatar.cc/150?img=6" alt="User" />
              <Avatar src="https://i.pravatar.cc/150?img=7" alt="User" />
            </div>
            <CodeBlock
              code={`<Avatar src="https://example.com/avatar1.jpg" alt="User 1" />
<Avatar src="https://example.com/avatar2.jpg" alt="User 2" />
<Avatar src="https://example.com/avatar3.jpg" alt="User 3" />`}
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
                  <td className="py-2 pr-4 font-mono text-xs">src</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Image source URL</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">alt</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4 font-mono text-xs">""</td>
                  <td className="py-2">Alternative text for image</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2">Avatar size</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">fallback</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Custom fallback text when image unavailable</td>
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
            <li>✓ Requires alt text for images</li>
            <li>✓ Automatic fallback to initials</li>
            <li>✓ Proper image error handling</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
