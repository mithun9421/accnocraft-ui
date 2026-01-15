'use client'

import { Checkbox } from '../../../../components/checkbox/checkbox'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'

export default function CheckboxPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Checkbox</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Accessible checkbox component built with Radix UI
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code="npx annocraft-ui add checkbox" language="bash" />
          <CodeBlock code="npm install @radix-ui/react-checkbox" language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" />
            <Checkbox label="Enable notifications" defaultChecked />
          </div>

          <CodeBlock
            code={`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Enable notifications" defaultChecked />`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
