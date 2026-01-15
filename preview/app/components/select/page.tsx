'use client'

import { Select } from '../../../../components/select/select'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function SelectPage() {
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ]

  const fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
  ]

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Select</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Dropdown selection with labels and validation
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add select"
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
            code={`import { Select } from "@/components/select/select"

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
]

export default function App() {
  return (
    <Select
      label="Choose option"
      options={options}
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
            <CardTitle className="text-xl">Default Select</CardTitle>
            <CardDescription>
              Basic dropdown with label
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Select
                label="Country"
                options={countries}
              />
            </div>
            <CodeBlock
              code={`const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
]

<Select
  label="Country"
  options={countries}
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
              Display helpful information below the select
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Select
                label="Favorite Fruit"
                options={fruits}
                helperText="Choose your favorite fruit from the list"
              />
            </div>
            <CodeBlock
              code={`<Select
  label="Favorite Fruit"
  options={fruits}
  helperText="Choose your favorite fruit from the list"
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
              <Select
                label="Country"
                options={countries}
                error="Please select a country"
              />
            </div>
            <CodeBlock
              code={`<Select
  label="Country"
  options={countries}
  error="Please select a country"
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
              <Select
                label="Country"
                options={countries}
                required
              />
            </div>
            <CodeBlock
              code={`<Select
  label="Country"
  options={countries}
  required
/>`}
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
              <Select
                label="Disabled Select"
                options={countries}
                disabled
              />
            </div>
            <CodeBlock
              code={`<Select
  label="Disabled Select"
  options={countries}
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
                  <td className="py-2 pr-4 font-mono text-xs">options</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"Array<{value: string, label: string}>"}</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Options array</td>
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
                  <td className="py-2">Helper text below select</td>
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
                  <td className="py-2">Disable the select</td>
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
