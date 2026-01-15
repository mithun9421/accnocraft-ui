'use client'

import { Input } from '../../../../components/input/input'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'

export default function InputPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Input</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Text input with label, error, and helper text support
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code="npx annocraft-ui add input" language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 max-w-md">
          <div className="space-y-4">
            <Input label="Email" type="email" placeholder="you@example.com" />

            <Input label="Password" type="password" helperText="Minimum 8 characters" />

            <Input label="Username" error="Username is already taken" defaultValue="johndoe" />

            <Input label="Disabled" state="disabled" value="Cannot edit" />
          </div>

          <CodeBlock
            code={`<Input label="Email" type="email" placeholder="you@example.com" />

<Input label="Password" type="password" helperText="Minimum 8 characters" />

<Input label="Username" error="Username is already taken" />

<Input label="Disabled" state="disabled" />`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
