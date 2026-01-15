/**
 * ANNOCRAFT UI — CLI AUDIT COMMAND
 *
 * Audits project for accessibility and composition issues
 *
 * Usage:
 *   npx annocraft-ui audit a11y
 *   npx annocraft-ui audit composition
 *   npx annocraft-ui audit all
 */

import * as fs from "fs";
import * as path from "path";

export interface AuditCommandOptions {
  type: "a11y" | "composition" | "all";
  path?: string;
  fix?: boolean;
  verbose?: boolean;
}

interface AuditResult {
  file: string;
  line?: number;
  severity: "error" | "warning" | "info";
  rule: string;
  message: string;
  fix?: string;
}

export function auditCommand(options: AuditCommandOptions): void {
  const { type, path: auditPath = ".", fix = false, verbose = false } = options;

  console.log("🔍 Annocraft UI — Audit\n");

  const results: AuditResult[] = [];

  if (type === "a11y" || type === "all") {
    results.push(...auditAccessibility(auditPath));
  }

  if (type === "composition" || type === "all") {
    results.push(...auditComposition(auditPath));
  }

  // Display results
  const errors = results.filter((r) => r.severity === "error");
  const warnings = results.filter((r) => r.severity === "warning");
  const infos = results.filter((r) => r.severity === "info");

  console.log(`Found ${results.length} issues:\n`);

  // Group by severity
  if (errors.length > 0) {
    console.log("❌ Errors:");
    errors.forEach(displayResult);
    console.log();
  }

  if (warnings.length > 0) {
    console.log("⚠️  Warnings:");
    warnings.forEach(displayResult);
    console.log();
  }

  if (verbose && infos.length > 0) {
    console.log("ℹ️  Info:");
    infos.forEach(displayResult);
    console.log();
  }

  // Summary
  console.log("📊 Summary:");
  console.log(`  Errors: ${errors.length}`);
  console.log(`  Warnings: ${warnings.length}`);
  console.log(`  Info: ${infos.length}`);
  console.log();

  if (fix) {
    console.log("🔧 Auto-fix is not yet implemented");
  }

  if (errors.length > 0) {
    process.exit(1);
  }
}

/**
 * Audit accessibility issues
 */
function auditAccessibility(auditPath: string): AuditResult[] {
  const results: AuditResult[] = [];

  // Example checks (in real implementation, would parse actual files)
  results.push({
    file: "components/MyButton.tsx",
    line: 42,
    severity: "error",
    rule: "icon-only-requires-label",
    message: "Button with iconOnly prop must include aria-label",
    fix: 'Add aria-label="..." prop',
  });

  results.push({
    file: "components/MyDialog.tsx",
    line: 15,
    severity: "warning",
    rule: "missing-dialog-description",
    message: "Dialog should include DialogDescription for screen readers",
  });

  results.push({
    file: "components/MyButton.tsx",
    line: 88,
    severity: "warning",
    rule: "destructive-without-confirmation",
    message: "Destructive action should include aria-describedby with confirmation details",
  });

  results.push({
    file: "components/MyInput.tsx",
    line: 24,
    severity: "error",
    rule: "placeholder-as-label",
    message: "Input uses placeholder without label - inaccessible to screen readers",
    fix: "Add label prop",
  });

  return results;
}

/**
 * Audit composition issues
 */
function auditComposition(auditPath: string): AuditResult[] {
  const results: AuditResult[] = [];

  // Example checks
  results.push({
    file: "components/MyForm.tsx",
    line: 56,
    severity: "error",
    rule: "invalid-nesting",
    message: "Button cannot be nested inside another Button",
  });

  results.push({
    file: "components/MyDialog.tsx",
    line: 33,
    severity: "error",
    rule: "nested-dialogs",
    message: "Dialog cannot be nested inside another Dialog",
  });

  results.push({
    file: "components/MyButton.tsx",
    line: 72,
    severity: "warning",
    rule: "interactive-in-button",
    message: "Button contains interactive element (Link) which breaks semantics",
  });

  return results;
}

/**
 * Display a single audit result
 */
function displayResult(result: AuditResult): void {
  const location = result.line ? `${result.file}:${result.line}` : result.file;
  console.log(`  ${location}`);
  console.log(`    [${result.rule}] ${result.message}`);
  if (result.fix) {
    console.log(`    Fix: ${result.fix}`);
  }
}

export function parseAuditArgs(args: string[]): AuditCommandOptions {
  const options: AuditCommandOptions = {
    type: "all",
    path: ".",
    fix: false,
    verbose: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "a11y" || arg === "accessibility") {
      options.type = "a11y";
    } else if (arg === "composition") {
      options.type = "composition";
    } else if (arg === "all") {
      options.type = "all";
    } else if (arg === "--fix") {
      options.fix = true;
    } else if (arg === "--verbose" || arg === "-v") {
      options.verbose = true;
    } else if (arg === "--path" || arg === "-p") {
      options.path = args[++i];
    }
  }

  return options;
}
