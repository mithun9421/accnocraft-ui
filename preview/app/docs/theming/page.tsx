import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { Alert } from '../../../../components/alert/alert'
import { Button } from '../../../../components/button/button'

export default function ThemingPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Theming & Dark Mode</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Customize colors and enable dark mode in your application
      </p>

      {/* Dark Mode Setup */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Dark Mode Setup</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Install next-themes</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code="npm install next-themes"
              language="bash"
            />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Add Theme Provider</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code={`// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
              language="tsx"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Add Theme Toggle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code={`'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/button/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      iconOnly
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  )
}`}
              language="tsx"
            />

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Try the theme toggle in the header →</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Customizing Colors */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Customizing Colors</h2>

        <Alert intent="infoFeedback" className="mb-6">
          Annocraft uses Tailwind CSS. All colors can be customized in your <code className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">tailwind.config.js</code>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Custom Brand Colors</CardTitle>
            <CardDescription>
              Override default colors to match your brand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Override blue with your brand color
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... your brand colors
          600: '#2563eb', // Primary action color
          700: '#1d4ed8',
        },
      },
    },
  },
}`}
              language="javascript"
            />
          </CardContent>
        </Card>
      </section>

      {/* Intent Mapping */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Understanding Intent Mapping</h2>

        <Card>
          <CardHeader>
            <CardTitle>How Intents Map to Colors</CardTitle>
            <CardDescription>
              Semantic intents are mapped to Tailwind colors in the design tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Default Mappings</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-600 dark:bg-blue-500"></div>
                  <code>primaryAction</code> → Blue
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-600 dark:bg-red-500"></div>
                  <code>destructiveAction</code> → Red
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-600 dark:bg-green-500"></div>
                  <code>successFeedback</code> → Green
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-amber-600 dark:bg-amber-500"></div>
                  <code>warningFeedback</code> → Amber
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Customizing Intent Colors</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Edit <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">design/tokens.ts</code> to change intent mappings:
              </p>
              <CodeBlock
                code={`// design/tokens.ts
export const intentTokens = {
  primaryAction: {
    background: "bg-purple-600 dark:bg-purple-500",
    foreground: "text-white",
    // ...
  },
  // Customize other intents
}`}
                language="typescript"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Dark Mode Utilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Dark Mode Utilities</h2>

        <Card>
          <CardHeader>
            <CardTitle>Using Dark Mode Classes</CardTitle>
            <CardDescription>
              All components support dark mode out of the box
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CodeBlock
              code={`// Light and dark variants
<div className="bg-white dark:bg-gray-950">
  <p className="text-gray-900 dark:text-gray-100">
    Text that adapts to theme
  </p>
</div>`}
              language="tsx"
            />

            <Alert intent="successFeedback">
              All Annocraft components include dark mode classes by default. You don't need to add them manually!
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* CSS Variables Approach */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Alternative: CSS Variables</h2>

        <Card>
          <CardHeader>
            <CardTitle>Using CSS Custom Properties</CardTitle>
            <CardDescription>
              For more dynamic theming, you can use CSS variables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`// globals.css
@layer base {
  :root {
    --primary: 220 90% 56%;
    --primary-foreground: 0 0% 100%;
  }

  .dark {
    --primary: 220 90% 60%;
    --primary-foreground: 0 0% 100%;
  }
}

// Then in Tailwind config
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
      },
    },
  },
}`}
              language="css"
            />
          </CardContent>
        </Card>
      </section>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Components in Both Themes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border rounded-lg">
                <p className="text-sm font-medium mb-3 text-gray-900">Light Theme</p>
                <div className="space-y-2">
                  <Button intent="primaryAction" size="sm">Primary</Button>
                  <br/>
                  <Button intent="destructiveAction" size="sm">Destructive</Button>
                </div>
              </div>
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg">
                <p className="text-sm font-medium mb-3 text-gray-100">Dark Theme</p>
                <div className="space-y-2">
                  <Button intent="primaryAction" size="sm">Primary</Button>
                  <br/>
                  <Button intent="destructiveAction" size="sm">Destructive</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
