'use client'

import { Alert } from '../../../../components/alert/alert'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'

export default function AlertPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Alert</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Display important messages with semantic feedback types
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code="npx annocraft-ui add alert" language="bash" />
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={`import { Alert } from "@/components/alert/alert"

<Alert intent="successFeedback">
  Your changes have been saved!
</Alert>`}
            language="tsx"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Alert intent="successFeedback" title="Success">
              Your changes have been saved successfully.
            </Alert>

            <Alert intent="errorFeedback" title="Error">
              There was a problem with your request.
            </Alert>

            <Alert intent="warningFeedback" title="Warning">
              Please review your information before submitting.
            </Alert>

            <Alert intent="infoFeedback" title="Information">
              This feature is currently in beta.
            </Alert>
          </div>

          <CodeBlock
            code={`<Alert intent="successFeedback" title="Success">
  Your changes have been saved successfully.
</Alert>

<Alert intent="errorFeedback" title="Error">
  There was a problem with your request.
</Alert>

<Alert intent="warningFeedback" title="Warning">
  Please review your information before submitting.
</Alert>

<Alert intent="infoFeedback" title="Information">
  This feature is currently in beta.
</Alert>`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
