'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../../../components/card/card'
import { CodeBlock } from '../../../components/code-block'
import { Button } from '../../../../components/button/button'

export default function CardPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Card</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Container for grouping related content
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code="npx annocraft-ui add card" language="bash" />
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This is the card content area where you can put any content.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
