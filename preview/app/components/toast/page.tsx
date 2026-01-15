'use client'

import { Toast } from '../../../../components/toast/toast'
import { Button } from '../../../../components/button/button'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { useState } from 'react'

export default function ToastPage() {
  const [showToast, setShowToast] = useState(false)
  const [toastConfig, setToastConfig] = useState<{
    title: string
    description: string
    intent: 'successFeedback' | 'errorFeedback' | 'warningFeedback' | 'infoFeedback'
  }>({
    title: 'Success',
    description: 'Your changes have been saved.',
    intent: 'successFeedback',
  })

  const showToastNotification = (
    title: string,
    description: string,
    intent: 'successFeedback' | 'errorFeedback' | 'warningFeedback' | 'infoFeedback'
  ) => {
    setToastConfig({ title, description, intent })
    setShowToast(true)
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Toast</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display temporary notification messages
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add toast"
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
            code={`import { Toast } from "@/components/toast/toast"

export default function App() {
  const [showToast, setShowToast] = useState(false)

  return (
    <>
      <Button onClick={() => setShowToast(true)}>
        Show Toast
      </Button>
      {showToast && (
        <Toast
          title="Success"
          description="Your changes have been saved."
          intent="successFeedback"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}`}
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="space-y-8">
        {/* Intent Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Intent Variants</CardTitle>
            <CardDescription>
              Four intent types for different feedback scenarios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Button
                size="sm"
                onClick={() =>
                  showToastNotification('Success', 'Your changes have been saved.', 'successFeedback')
                }
              >
                Success
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  showToastNotification('Error', 'Something went wrong. Please try again.', 'errorFeedback')
                }
              >
                Error
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  showToastNotification('Warning', 'Your session will expire soon.', 'warningFeedback')
                }
              >
                Warning
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  showToastNotification('Info', 'New updates are available.', 'infoFeedback')
                }
              >
                Info
              </Button>
            </div>
            <CodeBlock
              code={`<Toast
  title="Success"
  description="Your changes have been saved."
  intent="successFeedback"
  onClose={() => setShowToast(false)}
/>

<Toast
  title="Error"
  description="Something went wrong."
  intent="errorFeedback"
  onClose={() => setShowToast(false)}
/>

<Toast
  title="Warning"
  description="Your session will expire soon."
  intent="warningFeedback"
  onClose={() => setShowToast(false)}
/>

<Toast
  title="Info"
  description="New updates are available."
  intent="infoFeedback"
  onClose={() => setShowToast(false)}
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Toast Preview</CardTitle>
            <CardDescription>
              Click buttons above to see toast notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showToast && (
              <div className="fixed bottom-4 right-4 z-50 max-w-md">
                <Toast
                  title={toastConfig.title}
                  description={toastConfig.description}
                  intent={toastConfig.intent}
                  onClose={() => setShowToast(false)}
                />
              </div>
            )}
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg text-center text-gray-600 dark:text-gray-400">
              Click the buttons above to see toast notifications appear here
            </div>
          </CardContent>
        </Card>

        {/* Without Title */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Description Only</CardTitle>
            <CardDescription>
              Toast with only description text
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Toast
                description="This is a simple notification."
                intent="infoFeedback"
                duration={0}
              />
            </div>
            <CodeBlock
              code={`<Toast
  description="This is a simple notification."
  intent="infoFeedback"
/>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Custom Duration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Custom Duration</CardTitle>
            <CardDescription>
              Control auto-dismiss timing or disable it
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <CodeBlock
              code={`// Auto-dismiss after 3 seconds
<Toast
  title="Quick notification"
  description="This will disappear in 3 seconds"
  duration={3000}
  onClose={() => setShowToast(false)}
/>

// Never auto-dismiss (duration={0})
<Toast
  title="Important"
  description="This will stay until manually closed"
  duration={0}
  onClose={() => setShowToast(false)}
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
                  <td className="py-2 pr-4 font-mono text-xs">title</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Toast title</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">description</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Toast description</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">intent</td>
                  <td className="py-2 pr-4 font-mono text-xs">"successFeedback" | "errorFeedback" | "warningFeedback" | "infoFeedback"</td>
                  <td className="py-2 pr-4 font-mono text-xs">"infoFeedback"</td>
                  <td className="py-2">Feedback intent</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">duration</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">5000</td>
                  <td className="py-2">Auto-dismiss time (ms), 0 to disable</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">onClose</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"() => void"}</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Close callback</td>
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
            <li>✓ Uses role="alert" for screen readers</li>
            <li>✓ Auto-dismiss with adjustable timing</li>
            <li>✓ Manual close button</li>
            <li>✓ Keyboard accessible close button</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
