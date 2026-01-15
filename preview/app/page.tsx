import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/card/card'

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Build Beautiful UIs, Faster
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A production-grade design system with 20+ accessible components.
          Copy, paste, and own your code. No runtime dependencies.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs/installation"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-lg font-medium rounded-md transition-colors bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
          <Link
            href="/components/button"
            className="inline-flex items-center justify-center h-12 px-6 py-3 text-lg font-medium rounded-md transition-colors bg-transparent text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          >
            Browse Components
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">🎨</div>
            <CardTitle className="text-xl">Semantic Design</CardTitle>
            <CardDescription>
              Intent-based APIs that express purpose, not just appearance
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">♿</div>
            <CardTitle className="text-xl">Accessible by Default</CardTitle>
            <CardDescription>
              WCAG 2.1 AA compliant with keyboard navigation and screen reader support
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">🌙</div>
            <CardTitle className="text-xl">Dark Mode Ready</CardTitle>
            <CardDescription>
              Beautiful in both light and dark themes with smooth transitions
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">📦</div>
            <CardTitle className="text-xl">Copy & Paste</CardTitle>
            <CardDescription>
              You own the code. No runtime deps, just copy what you need
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">🎭</div>
            <CardTitle className="text-xl">Animation Ready</CardTitle>
            <CardDescription>
              Framer Motion and GSAP integration with examples
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="text-3xl mb-2">🔧</div>
            <CardTitle className="text-xl">Fully Customizable</CardTitle>
            <CardDescription>
              Built with Tailwind CSS - customize everything to match your brand
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Quick Example */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Simple to Use
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Install a Component</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-950 text-gray-100 p-4 rounded-md font-mono text-sm mb-4">
              npx annocraft-ui add button
            </div>
            <div className="bg-gray-950 text-gray-100 p-4 rounded-md font-mono text-sm">
              <div className="text-blue-400">import</div> {'{'} Button {'}'} <div className="text-blue-400 inline">from</div> <div className="text-green-400 inline">"@/components/button"</div>
              <br/><br/>
              <div className="text-purple-400">export default function</div> <div className="text-yellow-400 inline">App</div>() {'{'}
              <br/>
              {'  '}<div className="text-purple-400 inline">return</div> {'<'}Button intent=<div className="text-green-400 inline">"primaryAction"</div>{'>'}
              <br/>
              {'    '}Get Started
              <br/>
              {'  </'}<div>Button{'>'}</div>
              <br/>
              {'}'}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Components Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          20+ Production-Ready Components
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Alert', 'Avatar', 'Badge', 'Button',
            'Card', 'Checkbox', 'Dialog', 'Dropdown',
            'Input', 'Progress', 'Radio', 'Select',
            'Skeleton', 'Slider', 'Switch', 'Tabs',
            'Textarea', 'Toast', 'Tooltip', 'Toggle'
          ].map((component) => (
            <Link
              key={component}
              href={`/components/${component.toLowerCase()}`}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-center font-medium text-gray-900 dark:text-gray-100"
            >
              {component}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="max-w-2xl mx-auto bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Ready to Build?</CardTitle>
            <CardDescription className="text-blue-700 dark:text-blue-300">
              Start building beautiful, accessible UIs in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/docs/installation"
              className="inline-flex items-center justify-center h-12 px-6 py-3 text-lg font-medium rounded-md transition-colors bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              View Installation Guide
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
