#!/usr/bin/env node

/**
 * ANNOCRAFT UI — CLI ENTRY POINT
 *
 * Usage:
 *   npx annocraft-ui add button
 *   npx annocraft-ui explain button
 *   npx annocraft-ui audit a11y
 *   npx annocraft-ui generate mcp-schema
 *   npx annocraft-ui validate composition
 */

import { addCommand, parseAddArgs } from "./add";
import { explainCommand, parseExplainArgs } from "./explain";
import { auditCommand, parseAuditArgs } from "./audit";

const COMMANDS = ["add", "explain", "audit", "generate", "validate", "help"];

function printHelp(): void {
  console.log(`
🎨 Annocraft UI — AI-Native Design System

Usage:
  annocraft-ui <command> [options]

Commands:
  add <components...>        Copy components to your project
    --dest, -d <path>        Destination directory (default: ./components)
    --dry-run                Show what would be copied without copying
    --verbose, -v            Show detailed output

  explain <component>        Explain component usage and best practices
    --verbose, -v            Show detailed information
    --json                   Output as JSON

  audit <type>              Audit project for issues
    a11y                     Audit accessibility
    composition              Audit composition rules
    all                      Audit everything
    --fix                    Auto-fix issues (experimental)
    --path, -p <path>        Path to audit (default: .)
    --verbose, -v            Show all issues including info

  generate mcp-schema       Generate MCP schema for components

  validate composition      Validate component composition

  help                      Show this help message

Examples:
  annocraft-ui add button dialog
  annocraft-ui explain button --verbose
  annocraft-ui audit a11y
  annocraft-ui audit composition --fix

Learn more: https://annocraft-ui.dev
  `);
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printHelp();
    process.exit(0);
  }

  const command = args[0];

  if (!COMMANDS.includes(command)) {
    console.error(`❌ Unknown command: ${command}`);
    console.log(`Available commands: ${COMMANDS.join(", ")}`);
    process.exit(1);
  }

  const commandArgs = args.slice(1);

  try {
    switch (command) {
      case "add":
        const addOptions = parseAddArgs(commandArgs);
        if (addOptions.components.length === 0) {
          console.error("❌ No components specified");
          console.log("Usage: annocraft-ui add <components...>");
          process.exit(1);
        }
        addCommand(addOptions);
        break;

      case "explain":
        const explainOptions = parseExplainArgs(commandArgs);
        if (!explainOptions.component) {
          console.error("❌ No component specified");
          console.log("Usage: annocraft-ui explain <component>");
          process.exit(1);
        }
        explainCommand(explainOptions);
        break;

      case "audit":
        const auditOptions = parseAuditArgs(commandArgs);
        auditCommand(auditOptions);
        break;

      case "generate":
        if (commandArgs[0] === "mcp-schema") {
          console.log("Generating MCP schema...");
          // Would generate schema
        } else {
          console.error("❌ Unknown generate target");
        }
        break;

      case "validate":
        if (commandArgs[0] === "composition") {
          console.log("Validating composition...");
          // Would validate composition
        } else {
          console.error("❌ Unknown validate target");
        }
        break;

      case "help":
        printHelp();
        break;
    }
  } catch (error) {
    console.error("❌ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
