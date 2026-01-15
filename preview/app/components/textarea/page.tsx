'use client'

import { Textarea } from '../../../../components/textarea/textarea'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function TextareaPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Textarea</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Multi-line text input with labels and validation
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add textarea"
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
            code={`import { Textarea } from "@/components/textarea/textarea"

export default function App() {
  return (
    <Textarea
      label="Description"
      placeholder="Enter your description"
    />
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
              Basic textarea with label
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Textarea
                label="Comments"
                placeholder="Enter your comments..."
              />
            </div>
            <CodeBlock
              code={`<Textarea
  label="Comments"
  placeholder="Enter your comments..."
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Helper Text */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Helper Text</CardTitle>
            <CardDescription>
              Display helpful information below the textarea
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Textarea
                label="Bio"
                placeholder="Tell us about yourself"
                helperText="Maximum 500 characters"
              />
            </div>
            <CodeBlock
              code={`<Textarea
  label="Bio"
  placeholder="Tell us about yourself"
  helperText="Maximum 500 characters"
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Error */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Error</CardTitle>
            <CardDescription>
              Display validation errors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Textarea
                label="Message"
                placeholder="Enter your message"
                error="Message is required"
              />
            </div>
            <CodeBlock
              code={`<Textarea
  label="Message"
  placeholder="Enter your message"
  error="Message is required"
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Required */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Required Field</CardTitle>
            <CardDescription>
              Mark field as required with asterisk
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Textarea
                label="Feedback"
                placeholder="Your feedback..."
                required
              />
            </div>
            <CodeBlock
              code={`<Textarea
  label="Feedback"
  placeholder="Your feedback..."
  required
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Disabled */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Disabled</CardTitle>
            <CardDescription>
              Prevent user interaction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Textarea
                label="Read only"
                placeholder="This is disabled"
                disabled
              />
            </div>
            <CodeBlock
              code={`<Textarea
  label="Read only"
  placeholder="This is disabled"
  disabled
/>`}
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
                  <td className="py-2 pr-4 font-mono text-xs">error</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Error message</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">helperText</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Helper text below textarea</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">required</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Mark as required</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">disabled</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">false</td>
                  <td className="py-2">Disable the textarea</td>
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
            <li>✓ Proper label association</li>
            <li>✓ Error states with aria-invalid</li>
            <li>✓ Helper text with aria-describedby</li>
            <li>✓ Keyboard accessible</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
