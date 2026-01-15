import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { Alert } from '../../../../components/alert/alert'

export default function QuickStartPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Quick Start</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Get up and running with Annocraft UI in 5 minutes
      </p>

      {/* Step 1 */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold">
            1
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Add a Component</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Start by adding a component to your project:
        </p>
        <CodeBlock
          code="npx annocraft-ui add button"
          language="bash"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          This copies the button component files to your <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">components/</code> directory.
        </p>
      </section>

      {/* Step 2 */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold">
            2
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Import and Use</h2>
        </div>
        <CodeBlock
          code={`import { Button } from "@/components/button/button"

export default function MyPage() {
  return (
    <Button intent="primaryAction">
      Click me
    </Button>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Step 3 */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold">
            3
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Customize as Needed</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The component is now in your codebase. You own it! Modify the code to fit your needs:
        </p>
        <CodeBlock
          code={`// components/button/button.tsx
// Edit this file directly to customize

export const Button = ({ intent, size, ...props }) => {
  // Your customizations here
  return <button {...props} />
}`}
          language="tsx"
        />
      </section>

      {/* Common Patterns */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Patterns</CardTitle>
          <CardDescription>Frequently used component patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Actions */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Form Actions</h3>
            <CodeBlock
              code={`<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <div className="flex gap-2">
    <Button intent="primaryAction" type="submit">
      Submit
    </Button>
    <Button
      intent="secondaryAction"
      emphasis="medium"
      type="button"
      onClick={handleCancel}
    >
      Cancel
    </Button>
  </div>
</form>`}
              language="tsx"
            />
          </div>

          {/* Modal Dialog */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Modal Dialog</h3>
            <CodeBlock
              code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Settings</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Settings</DialogTitle>
      <DialogDescription>
        Configure your preferences
      </DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button intent="primaryAction">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              language="tsx"
            />
          </div>

          {/* Form with Validation */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Form with Validation</h3>
            <CodeBlock
              code={`<Input
  label="Email"
  type="email"
  required
  error={errors.email}
  helperText="We'll never share your email"
/>

<Input
  label="Password"
  type="password"
  required
  error={errors.password}
  helperText="Minimum 8 characters"
/>`}
              language="tsx"
            />
          </div>
        </CardContent>
      </Card>

      {/* Understanding Intent-Based Design */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Understanding Intent-Based Design</CardTitle>
          <CardDescription>
            Why we use "intent" instead of "color"
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-red-600 dark:text-red-400">❌ Don't Use Colors</h3>
            <CodeBlock
              code={`// Bad - color-based
<Button color="blue">Save</Button>
<Button color="red">Delete</Button>`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">✓ Use Semantic Intents</h3>
            <CodeBlock
              code={`// Good - intent-based
<Button intent="primaryAction">Save</Button>
<Button intent="destructiveAction">Delete</Button>`}
              language="tsx"
            />
          </div>

          <Alert intent="infoFeedback" className="mt-4">
            Intent-based APIs are theme-agnostic and self-documenting. They work in light mode, dark mode, and survive brand refreshes.
          </Alert>
        </CardContent>
      </Card>

      {/* CLI Commands */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Useful CLI Commands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Add multiple components</p>
            <CodeBlock
              code="npx annocraft-ui add button input dialog"
              language="bash"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Explain a component</p>
            <CodeBlock
              code="npx annocraft-ui explain button"
              language="bash"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Audit your project</p>
            <CodeBlock
              code="npx annocraft-ui audit a11y"
              language="bash"
            />
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li>
              <a href="/components/button" className="text-blue-600 dark:text-blue-400 hover:underline">
                → Browse all components
              </a>
            </li>
            <li>
              <a href="/docs/theming" className="text-blue-600 dark:text-blue-400 hover:underline">
                → Learn about theming and dark mode
              </a>
            </li>
            <li>
              <a href="/animation/framer-motion" className="text-blue-600 dark:text-blue-400 hover:underline">
                → Add animations with Framer Motion
              </a>
            </li>
            <li>
              <a href="/docs/accessibility" className="text-blue-600 dark:text-blue-400 hover:underline">
                → Understand accessibility features
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
