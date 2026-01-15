import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { Alert } from '../../../../components/alert/alert'

export default function InstallationPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Installation</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Get started with Annocraft UI in your project
      </p>

      {/* Prerequisites */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Prerequisites</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Node.js 16 or higher</li>
            <li>• React 18 or higher</li>
            <li>• TypeScript 4.9 or higher (recommended)</li>
            <li>• Tailwind CSS 3.3 or higher</li>
          </ul>
        </CardContent>
      </Card>

      {/* Step 1: Tailwind CSS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">1. Install Tailwind CSS</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          If you haven't already, set up Tailwind CSS in your project:
        </p>
        <CodeBlock
          code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
          language="bash"
        />
      </section>

      {/* Step 2: Configure Tailwind */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">2. Configure Tailwind</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Update your <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">tailwind.config.js</code>:
        </p>
        <CodeBlock
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          language="javascript"
          title="tailwind.config.js"
        />
      </section>

      {/* Step 3: Add Global CSS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">3. Add Global CSS</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add Tailwind directives to your CSS file:
        </p>
        <CodeBlock
          code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          language="css"
          title="app/globals.css"
        />
      </section>

      {/* Step 4: Install CLI */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">4. Install Annocraft UI CLI</h2>
        <CodeBlock
          code="npm install -D annocraft-ui"
          language="bash"
        />
      </section>

      {/* Step 5: Add Components */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">5. Add Components</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Use the CLI to add components to your project:
        </p>
        <CodeBlock
          code="npx annocraft-ui add button"
          language="bash"
        />
        <Alert intent="infoFeedback" className="mt-4">
          This copies the component files to your <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">components/</code> directory.
          You own the code and can modify it as needed.
        </Alert>
      </section>

      {/* Step 6: Install Dependencies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">6. Install Component Dependencies</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Some components require Radix UI primitives:
        </p>
        <CodeBlock
          code={`# For Dialog
npm install @radix-ui/react-dialog

# For Dropdown
npm install @radix-ui/react-dropdown-menu

# For Checkbox
npm install @radix-ui/react-checkbox`}
          language="bash"
        />
      </section>

      {/* Step 7: Configure TypeScript */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">7. Configure TypeScript (Optional)</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          For better import paths, update your <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">tsconfig.json</code>:
        </p>
        <CodeBlock
          code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
          language="json"
          title="tsconfig.json"
        />
      </section>

      {/* Step 8: Start Using */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">8. Start Using Components</h2>
        <CodeBlock
          code={`import { Button } from "@/components/button/button"

export default function App() {
  return (
    <Button intent="primaryAction">
      Get Started
    </Button>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Framework-Specific Guides */}
      <Card>
        <CardHeader>
          <CardTitle>Framework-Specific Guides</CardTitle>
          <CardDescription>
            Additional configuration for different frameworks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Next.js */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Next.js</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Works out of the box with Next.js 13+ App Router. No additional configuration needed.
            </p>
          </div>

          {/* Vite */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Vite</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Add path alias in <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">vite.config.ts</code>:
            </p>
            <CodeBlock
              code={`import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})`}
              language="typescript"
            />
          </div>

          {/* Remix */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Remix</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configure Tailwind CSS in <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">remix.config.js</code> and follow standard installation steps.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Alert intent="successFeedback" className="mt-8">
        <strong>You're all set!</strong> Check out the <a href="/docs/quick-start" className="underline">Quick Start Guide</a> to learn how to use components.
      </Alert>
    </div>
  )
}
