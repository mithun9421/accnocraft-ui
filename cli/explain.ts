/**
 * ANNOCRAFT UI — CLI EXPLAIN COMMAND
 *
 * Explains component usage, variants, and best practices
 *
 * Usage:
 *   npx annocraft-ui explain button
 *   npx annocraft-ui explain button --verbose
 */

import { buttonMeta } from "../components/button/button.meta";
import { dialogMeta } from "../components/dialog/dialog.meta";
import { inputMeta } from "../components/input/input.meta";
import { ComponentMetadata } from "../design/metadata";

const COMPONENT_REGISTRY: Record<string, ComponentMetadata<any>> = {
  button: buttonMeta,
  dialog: dialogMeta,
  input: inputMeta,
};

export interface ExplainCommandOptions {
  component: string;
  verbose?: boolean;
  format?: "text" | "json";
}

export function explainCommand(options: ExplainCommandOptions): void {
  const { component, verbose = false, format = "text" } = options;

  const meta = COMPONENT_REGISTRY[component.toLowerCase()];

  if (!meta) {
    console.error(`❌ Component "${component}" not found`);
    console.log(`Available: ${Object.keys(COMPONENT_REGISTRY).join(", ")}`);
    process.exit(1);
  }

  if (format === "json") {
    console.log(JSON.stringify(meta, null, 2));
    return;
  }

  // Text format
  console.log(`\n📖 ${meta.name} — ${meta.category}\n`);
  console.log(`${meta.description}\n`);

  // Design Intent
  console.log("🎯 Design Intent:");
  console.log(`  Supported: ${meta.supportedIntents.join(", ")}`);
  if (meta.defaultIntent) {
    console.log(`  Default: ${meta.defaultIntent}`);
  }
  console.log();

  // Variants
  console.log("🎨 Variants:");
  Object.entries(meta.variants).forEach(([variantName, variantDef]) => {
    console.log(`  ${variantName}: ${variantDef.default} (default)`);
    if (verbose) {
      Object.entries(variantDef.options).forEach(([optionKey, option]) => {
        console.log(`    - ${optionKey}: ${option.description}`);
      });
    }
  });
  console.log();

  // Accessibility
  console.log("♿ Accessibility:");
  console.log(`  WCAG: ${meta.accessibility.wcag}`);
  console.log(`  Keyboard Navigation: ${meta.accessibility.keyboardNavigation ? "✅" : "❌"}`);
  console.log(`  Screen Reader: ${meta.accessibility.screenReaderTested ? "✅" : "❌"}`);
  console.log(`  Min Touch Target: ${meta.accessibility.minTouchTarget}`);
  console.log(`  Contrast Ratio: ${meta.accessibility.contrastRatio}`);
  console.log();

  if (verbose) {
    // Keyboard behavior
    console.log("⌨️  Keyboard:");
    meta.keyboard.forEach((kb) => {
      console.log(`  ${kb.key}: ${kb.action}`);
    });
    console.log();

    // ARIA
    console.log("🏷️  ARIA:");
    if (meta.aria.role) {
      console.log(`  Role: ${meta.aria.role}`);
    }
    if (meta.aria.required.length > 0) {
      console.log(`  Required: ${meta.aria.required.join(", ")}`);
    }
    if (meta.aria.optional.length > 0) {
      console.log(`  Optional: ${meta.aria.optional.join(", ")}`);
    }
    console.log();
  }

  // Composition Rules
  console.log("🔗 Composition Rules:");
  if (meta.compositionRules.cannotNestInside && meta.compositionRules.cannotNestInside.length > 0) {
    console.log(`  Cannot nest inside: ${meta.compositionRules.cannotNestInside.join(", ")}`);
  }
  if (meta.compositionRules.requiresParent && meta.compositionRules.requiresParent.length > 0) {
    console.log(`  Requires parent: ${meta.compositionRules.requiresParent.join(", ")}`);
  }
  if (meta.compositionRules.destructiveRequiresConfirmation) {
    console.log("  Destructive actions require confirmation");
  }
  if (meta.compositionRules.iconOnlyRequiresLabel) {
    console.log("  Icon-only mode requires aria-label");
  }
  console.log();

  // Anti-patterns
  if (meta.antiPatterns.length > 0) {
    console.log("⚠️  Anti-patterns:");
    meta.antiPatterns.forEach((ap, index) => {
      console.log(`  ${index + 1}. ${ap.pattern}`);
      if (verbose) {
        console.log(`     Reason: ${ap.reason}`);
        console.log(`     Instead: ${ap.instead}`);
      }
    });
    console.log();
  }

  // Examples
  if (verbose && meta.examples.length > 0) {
    console.log("💡 Examples:\n");
    meta.examples.forEach((example, index) => {
      console.log(`  ${index + 1}. ${example.title}`);
      console.log(`     ${example.description}\n`);
      console.log(example.code.split("\n").map(line => `     ${line}`).join("\n"));
      console.log();
    });
  }

  console.log(`📚 Full docs: https://annocraft-ui.dev/components/${component}\n`);
}

export function parseExplainArgs(args: string[]): ExplainCommandOptions {
  const options: ExplainCommandOptions = {
    component: "",
    verbose: false,
    format: "text",
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--verbose" || arg === "-v") {
      options.verbose = true;
    } else if (arg === "--json") {
      options.format = "json";
    } else if (!arg.startsWith("-")) {
      options.component = arg;
    }
  }

  return options;
}
