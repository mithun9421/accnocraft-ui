'use client'

import { Dropdown, DropdownItem } from '../../../../components/dropdown/dropdown'
import { Button } from '../../../../components/button/button'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'

export default function DropdownPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dropdown</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Display a menu of actions or options
        </p>
      </div>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npx annocraft-ui add dropdown"
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
            code={`import { Dropdown, DropdownItem } from "@/components/dropdown/dropdown"

export default function App() {
  return (
    <Dropdown trigger={<Button>Open Menu</Button>}>
      <DropdownItem onClick={() => console.log('Item 1')}>
        Item 1
      </DropdownItem>
      <DropdownItem onClick={() => console.log('Item 2')}>
        Item 2
      </DropdownItem>
    </Dropdown>
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
            <CardTitle className="text-xl">Default Dropdown</CardTitle>
            <CardDescription>
              Basic dropdown menu with button trigger
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Dropdown trigger={<Button>Actions</Button>}>
                <DropdownItem onClick={() => alert('Edit clicked')}>Edit</DropdownItem>
                <DropdownItem onClick={() => alert('Duplicate clicked')}>Duplicate</DropdownItem>
                <DropdownItem onClick={() => alert('Archive clicked')}>Archive</DropdownItem>
                <DropdownItem onClick={() => alert('Delete clicked')}>Delete</DropdownItem>
              </Dropdown>
            </div>
            <CodeBlock
              code={`<Dropdown trigger={<Button>Actions</Button>}>
  <DropdownItem onClick={() => alert('Edit clicked')}>Edit</DropdownItem>
  <DropdownItem onClick={() => alert('Duplicate clicked')}>Duplicate</DropdownItem>
  <DropdownItem onClick={() => alert('Archive clicked')}>Archive</DropdownItem>
  <DropdownItem onClick={() => alert('Delete clicked')}>Delete</DropdownItem>
</Dropdown>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Alignment */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Menu Alignment</CardTitle>
            <CardDescription>
              Control dropdown position: start, center, end
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Dropdown trigger={<Button>Align Start</Button>} align="start">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </Dropdown>
              <Dropdown trigger={<Button>Align Center</Button>} align="center">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </Dropdown>
              <Dropdown trigger={<Button>Align End</Button>} align="end">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </Dropdown>
            </div>
            <CodeBlock
              code={`<Dropdown trigger={<Button>Align Start</Button>} align="start">
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>

<Dropdown trigger={<Button>Align Center</Button>} align="center">
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>

<Dropdown trigger={<Button>Align End</Button>} align="end">
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* User Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">User Menu Example</CardTitle>
            <CardDescription>
              Common pattern for user account menus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Dropdown
                trigger={
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                      JD
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</span>
                  </button>
                }
                align="end"
              >
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Billing</DropdownItem>
                <div className="border-t border-gray-200 dark:border-gray-800 my-1" />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            </div>
            <CodeBlock
              code={`<Dropdown
  trigger={
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg">
      <div className="h-8 w-8 rounded-full bg-blue-600 text-white">
        JD
      </div>
      <span>John Doe</span>
    </button>
  }
  align="end"
>
  <DropdownItem>Profile</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Billing</DropdownItem>
  <div className="border-t my-1" />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">With Icons</CardTitle>
            <CardDescription>
              Add icons to dropdown items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Dropdown trigger={<Button>File</Button>}>
                <DropdownItem>
                  <span className="mr-2">📄</span> New File
                </DropdownItem>
                <DropdownItem>
                  <span className="mr-2">📁</span> New Folder
                </DropdownItem>
                <DropdownItem>
                  <span className="mr-2">💾</span> Save
                </DropdownItem>
                <div className="border-t border-gray-200 dark:border-gray-800 my-1" />
                <DropdownItem className="text-red-600 dark:text-red-400">
                  <span className="mr-2">🗑️</span> Delete
                </DropdownItem>
              </Dropdown>
            </div>
            <CodeBlock
              code={`<Dropdown trigger={<Button>File</Button>}>
  <DropdownItem>
    <span className="mr-2">📄</span> New File
  </DropdownItem>
  <DropdownItem>
    <span className="mr-2">📁</span> New Folder
  </DropdownItem>
  <DropdownItem>
    <span className="mr-2">💾</span> Save
  </DropdownItem>
  <div className="border-t my-1" />
  <DropdownItem className="text-red-600">
    <span className="mr-2">🗑️</span> Delete
  </DropdownItem>
</Dropdown>`}
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
                  <td className="py-2 pr-4 font-mono text-xs">Dropdown</td>
                  <td className="py-2 pr-4 font-mono text-xs">trigger</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2">Element to trigger dropdown</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-4 font-mono text-xs">Dropdown</td>
                  <td className="py-2 pr-4 font-mono text-xs">align</td>
                  <td className="py-2 pr-4 font-mono text-xs">"start" | "center" | "end"</td>
                  <td className="py-2">Menu alignment</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">DropdownItem</td>
                  <td className="py-2 pr-4 font-mono text-xs">children</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2">Item content</td>
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
            <li>✓ Keyboard accessible (Tab, Esc to close)</li>
            <li>✓ Click outside to close</li>
            <li>✓ Focus management</li>
            <li>✓ WCAG 2.1 AA compliant</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
