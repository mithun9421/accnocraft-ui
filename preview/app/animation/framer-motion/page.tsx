'use client'

import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/card/card'
import { Alert } from '../../../../components/alert/alert'
import { Button } from '../../../../components/button/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FramerMotionPage() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Framer Motion Integration</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Add beautiful animations to your components with Framer Motion
      </p>

      {/* Installation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Installation</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code="npm install framer-motion"
            language="bash"
          />
        </CardContent>
      </Card>

      {/* Basic Animation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Basic Animations</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Fade In Animation</CardTitle>
            <CardDescription>Simple opacity and scale animation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Button intent="primaryAction">Animated Button</Button>
              </motion.div>
            </div>

            <CodeBlock
              code={`import { motion } from 'framer-motion'
import { Button } from '@/components/button/button'

export function AnimatedButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button intent="primaryAction">Animated Button</Button>
    </motion.div>
  )
}`}
              language="tsx"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Slide In Animation</CardTitle>
            <CardDescription>Enter from the side with smooth motion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg flex justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <Card className="w-64">
                  <CardHeader>
                    <CardTitle className="text-lg">Sliding Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    This card slides in from the left
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <CodeBlock
              code={`<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 100 }}
>
  <Card>
    <CardHeader>
      <CardTitle>Sliding Card</CardTitle>
    </CardHeader>
    <CardContent>
      This card slides in from the left
    </CardContent>
  </Card>
</motion.div>`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </section>

      {/* Interactive Animations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Interactive Animations</h2>

        <Card>
          <CardHeader>
            <CardTitle>Hover & Tap Effects</CardTitle>
            <CardDescription>Respond to user interactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg flex justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button intent="primaryAction">Hover Me</Button>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 5 }}
                whileTap={{ rotate: -5 }}
              >
                <Button intent="secondaryAction" emphasis="medium">Click Me</Button>
              </motion.div>
            </div>

            <CodeBlock
              code={`<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Button intent="primaryAction">Hover Me</Button>
</motion.div>

<motion.div
  whileHover={{ rotate: 5 }}
  whileTap={{ rotate: -5 }}
>
  <Button>Click Me</Button>
</motion.div>`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </section>

      {/* Exit Animations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Enter & Exit Animations</h2>

        <Card>
          <CardHeader>
            <CardTitle>AnimatePresence</CardTitle>
            <CardDescription>Animate components when they're removed from the DOM</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex flex-col items-center gap-4">
                <Button onClick={() => setIsVisible(!isVisible)}>
                  Toggle Card
                </Button>

                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Alert intent="successFeedback">
                      This alert animates in and out!
                    </Alert>
                  </motion.div>
                )}
              </div>
            </div>

            <CodeBlock
              code={`import { AnimatePresence } from 'framer-motion'

export function AnimatedAlert() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <Button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </Button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Alert intent="successFeedback">
              Animated Alert
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </section>

      {/* List Animations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">List Animations</h2>

        <Card>
          <CardHeader>
            <CardTitle>Stagger Children</CardTitle>
            <CardDescription>Animate list items with a stagger effect</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function AnimatedList() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      {items.map((item) => (
        <motion.li key={item.id} variants={item}>
          <Card>
            <CardContent>{item.name}</CardContent>
          </Card>
        </motion.li>
      ))}
    </motion.ul>
  )
}`}
              language="tsx"
            />
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Keep animations subtle</strong> -
              200-400ms is usually enough
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Use spring animations</strong> -
              They feel more natural than easing
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Respect prefers-reduced-motion</strong> -
              Disable animations for users who prefer less motion
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Don't overdo it</strong> -
              Too many animations can be distracting
            </li>
            <li>
              <strong className="text-gray-900 dark:text-gray-100">Test performance</strong> -
              Animations should run at 60fps
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Learn More */}
      <Alert intent="infoFeedback" className="mt-8">
        Learn more in the{' '}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          official Framer Motion documentation
        </a>
      </Alert>
    </div>
  )
}
