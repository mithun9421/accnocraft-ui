/**
 * ANNOCRAFT UI — BUTTON EXAMPLES
 *
 * Real-world usage examples for documentation and testing
 */

import * as React from "react";
import { Button } from "./button";

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Intent Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Intent Variants</h2>
        <div className="flex gap-4">
          <Button intent="primaryAction">Primary Action</Button>
          <Button intent="secondaryAction">Secondary Action</Button>
          <Button intent="destructiveAction">Delete</Button>
        </div>
      </section>

      {/* Size Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Size Variants</h2>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Emphasis Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Emphasis Variants</h2>
        <div className="flex gap-4">
          <Button emphasis="high">High Emphasis</Button>
          <Button emphasis="medium">Medium Emphasis</Button>
          <Button emphasis="low">Low Emphasis</Button>
        </div>
      </section>

      {/* State Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">State Variants</h2>
        <div className="flex gap-4">
          <Button state="default">Default</Button>
          <Button state="disabled">Disabled</Button>
          <Button state="loading">Loading</Button>
        </div>
      </section>

      {/* Icon Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <div className="flex gap-4">
          <Button iconBefore={<span>←</span>}>Back</Button>
          <Button iconAfter={<span>→</span>}>Next</Button>
          <Button iconOnly aria-label="Close">
            ✕
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Full Width</h2>
        <Button fullWidth>Full Width Button</Button>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Patterns</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Form Actions</h3>
            <div className="flex gap-2">
              <Button intent="primaryAction" type="submit">
                Submit
              </Button>
              <Button intent="secondaryAction" emphasis="medium" type="button">
                Cancel
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Confirmation Dialog</h3>
            <div className="flex gap-2">
              <Button intent="destructiveAction" aria-describedby="confirm-delete">
                Delete Account
              </Button>
              <Button intent="secondaryAction" emphasis="medium">
                Keep Account
              </Button>
            </div>
            <p id="confirm-delete" className="text-sm text-gray-600 mt-2">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Loading States</h3>
            <Button state="loading" disabled>
              Processing Payment...
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ButtonExamples;
