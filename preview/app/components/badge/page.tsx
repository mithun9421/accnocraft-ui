'use client'

import { Badge } from '../../../../components/badge/badge'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'

export default function BadgePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Badge</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Small status indicators and labels
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code="npx annocraft-ui add badge" language="bash" />
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Badge variant="solid">Solid</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="soft">Soft</Badge>
          </div>

          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Badge intent="successFeedback">Success</Badge>
            <Badge intent="errorFeedback">Error</Badge>
            <Badge intent="warningFeedback">Warning</Badge>
            <Badge intent="infoFeedback">Info</Badge>
          </div>

          <CodeBlock
            code={`<Badge variant="solid">Solid</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="soft">Soft</Badge>

<Badge intent="successFeedback">Success</Badge>
<Badge intent="errorFeedback">Error</Badge>`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
