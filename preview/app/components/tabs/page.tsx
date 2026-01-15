'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/tabs/tabs'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function TabsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Tabs</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Organize content into tabbed panels
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add tabs"
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
            code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs/tabs"

export default function App() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
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
            <CardTitle className="text-xl">Default Tabs</CardTitle>
            <CardDescription>
              Basic tabbed navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p className="text-gray-600 dark:text-gray-400">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent value="password">
                  <p className="text-gray-600 dark:text-gray-400">
                    Change your password and security settings.
                  </p>
                </TabsContent>
                <TabsContent value="settings">
                  <p className="text-gray-600 dark:text-gray-400">
                    Configure your application preferences.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            <CodeBlock
              code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Manage your account settings and preferences.
  </TabsContent>
  <TabsContent value="password">
    Change your password and security settings.
  </TabsContent>
  <TabsContent value="settings">
    Configure your application preferences.
  </TabsContent>
</Tabs>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tabs with Card Content</CardTitle>
            <CardDescription>
              Complex content in tab panels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        This is the overview content.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        This is the detailed content.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <CodeBlock
              code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>Content here</CardContent>
    </Card>
  </TabsContent>
  <TabsContent value="details">
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent>Content here</CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
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
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Component</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-gray-100">Type</th>
                  <th className="text-left py-2 font-semibold text-gray-900 dark:text-gray-100">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">Tabs</td>
                  <td className="py-2 pr-4 font-mono text-xs">defaultValue</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Initial active tab</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">Tabs</td>
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Controlled active tab</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">Tabs</td>
                  <td className="py-2 pr-4 font-mono text-xs">onValueChange</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(value: string) => void"}</td>
                  <td className="py-2">Callback when tab changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">TabsTrigger</td>
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Value to activate this tab</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">TabsContent</td>
                  <td className="py-2 pr-4 font-mono text-xs">value</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Show when this value is active</td>
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
            <li>✓ Keyboard navigation (Arrow keys, Home, End)</li>
            <li>✓ Proper ARIA attributes (role="tab", role="tabpanel")</li>
            <li>✓ Focus management</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
