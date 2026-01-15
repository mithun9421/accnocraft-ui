'use client'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../components/dialog/dialog'
import { Button } from '../../../../components/button/button'
import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'

export default function DialogPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dialog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Modal dialog with automatic focus management
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code="npx annocraft-ui add dialog" language="bash" />
          <CodeBlock code="npm install @radix-ui/react-dialog" language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a description of what the dialog is about.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dialog content goes here.
                  </p>
                </div>
                <DialogFooter>
                  <Button intent="secondaryAction" emphasis="medium">Cancel</Button>
                  <Button intent="primaryAction">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Description text
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            language="tsx"
          />
        </CardContent>
      </Card>
    </div>
  )
}
