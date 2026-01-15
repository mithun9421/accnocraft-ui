/**
 * ANNOCRAFT UI — Main Entry Point
 *
 * Note: This is primarily for TypeScript type exports.
 * Components should be copied into your project using the CLI.
 */

// Design System Exports
export * from "./design/intents";
export * from "./design/variants";
export * from "./design/tokens";
export * from "./design/metadata";

// Component Exports (for reference/types)
export { Button } from "./components/button/button";
export type { ButtonProps } from "./components/button/button";
export { buttonMeta } from "./components/button/button.meta";

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/dialog/dialog";
export { dialogMeta } from "./components/dialog/dialog.meta";

export { Input } from "./components/input/input";
export type { InputProps } from "./components/input/input";
export { inputMeta } from "./components/input/input.meta";

// MCP Server Exports
export {
  listComponents,
  describeComponent,
  recommendComponent,
  validateUsage,
  composeLayout,
  auditAccessibility,
  MCPServerConfig,
} from "./mcp/server";

export { MCPSchemas } from "./mcp/schemas";
export {
  validateComponentName,
  validateIntent,
  validateCategory,
  validateProps,
  validateComponentArray,
  safeValidate,
  ValidationError,
} from "./mcp/validators";
