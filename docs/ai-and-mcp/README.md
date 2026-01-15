# AI & Model Context Protocol (MCP)

Annocraft UI is **AI-native**: it's fully usable by humans and fully understandable by AI agents.

## What is MCP?

**Model Context Protocol (MCP)** is a standard way for AI agents to access tools, resources, and context from external systems.

Think of it as an API for AI agents to understand and interact with your design system.

## Why MCP Support?

### The Problem with AI Code Generation

Current AI code generation often produces:

```tsx
// ❌ Invalid composition
<Button>
  <Button>Click here</Button>
</Button>

// ❌ Inaccessible
<Button iconOnly>
  <Icon />
</Button>

// ❌ Wrong semantics
<Button color="red" onClick={save}>
  Save Changes
</Button>
```

### Annocraft's Solution

AI agents can query Annocraft via MCP:

```typescript
// Agent queries MCP
const validation = validateUsage({
  component: "Button",
  props: { iconOnly: true },
  context: {}
})

// MCP responds
{
  valid: false,
  errors: ["iconOnly mode requires aria-label"]
}
```

## MCP Capabilities

Annocraft exposes these tools via MCP:

### 1. list_components

Get all available components:

```json
{
  "tool": "list_components"
}
```

Response:
```json
{
  "components": [
    {
      "name": "Button",
      "category": "action",
      "description": "An accessible, semantic button...",
      "version": "1.0.0"
    }
  ]
}
```

### 2. describe_component

Get detailed metadata for a component:

```json
{
  "tool": "describe_component",
  "params": { "componentName": "Button" }
}
```

Response includes:
- Supported intents
- Variants and their meanings
- Accessibility guarantees
- Composition rules
- Anti-patterns
- Examples

### 3. recommend_component

Get recommendations based on intent:

```json
{
  "tool": "recommend_component",
  "params": {
    "intent": "primaryAction",
    "category": "action"
  }
}
```

Response:
```json
{
  "recommendations": [
    {
      "name": "Button",
      "confidence": 100,
      "description": "...",
      "supportedIntents": ["primaryAction", ...]
    }
  ]
}
```

### 4. validate_usage

Validate component usage:

```json
{
  "tool": "validate_usage",
  "params": {
    "component": "Button",
    "props": {
      "intent": "destructiveAction",
      "iconOnly": true
    },
    "context": {
      "parent": "button"
    }
  }
}
```

Response:
```json
{
  "valid": false,
  "errors": [
    "Button cannot be nested inside button",
    "iconOnly mode requires aria-label"
  ],
  "warnings": [
    "destructiveAction should include aria-describedby"
  ]
}
```

### 5. compose_layout

Generate layout from goal:

```json
{
  "tool": "compose_layout",
  "params": {
    "goal": "confirmation dialog for deleting account"
  }
}
```

Response:
```json
{
  "layout": {
    "component": "Dialog",
    "children": [...]
  }
}
```

### 6. audit_accessibility

Audit components for a11y:

```json
{
  "tool": "audit_accessibility",
  "params": {
    "components": [
      {
        "name": "Button",
        "props": { "size": "sm", "iconOnly": true }
      }
    ]
  }
}
```

## How AI Agents Use MCP

### Flow 1: Component Selection

```
User: "I need a button for the main call-to-action"

Agent:
1. Calls recommend_component({ intent: "primaryAction" })
2. Gets Button recommendation
3. Calls describe_component({ componentName: "Button" })
4. Learns about variants and best practices
5. Generates:
   <Button intent="primaryAction" size="lg" emphasis="high">
     Get Started
   </Button>
```

### Flow 2: Validation

```
User: "Add a delete button"

Agent:
1. Generates initial code:
   <Button intent="destructiveAction">Delete</Button>

2. Calls validate_usage({
     component: "Button",
     props: { intent: "destructiveAction" }
   })

3. Gets warning: "destructiveAction should include confirmation"

4. Refines code:
   <Button
     intent="destructiveAction"
     aria-describedby="delete-warning"
   >
     Delete
   </Button>
   <p id="delete-warning">This cannot be undone</p>
```

### Flow 3: Layout Generation

```
User: "Create a login form"

Agent:
1. Calls compose_layout({ goal: "login form" })

2. Gets structure:
   - Input (email)
   - Input (password)
   - Button (submit)

3. Calls describe_component for each

4. Generates complete, accessible form
```

## Component Metadata

Every component includes machine-readable metadata:

```typescript
export const buttonMeta = defineMetadata({
  name: "Button",
  category: "action",
  description: "...",

  // What intents it supports
  supportedIntents: ["primaryAction", "secondaryAction", "destructiveAction"],

  // How variants work
  variants: { ... },

  // What it guarantees
  accessibility: {
    wcag: "2.1 AA",
    keyboardNavigation: true,
    // ...
  },

  // How to compose safely
  compositionRules: {
    cannotNestInside: ["button", "a"],
    iconOnlyRequiresLabel: true,
    // ...
  },

  // What NOT to do
  antiPatterns: [
    {
      pattern: "Icon-only without aria-label",
      reason: "Inaccessible to screen readers",
      instead: "Add aria-label"
    }
  ],

  // Working examples
  examples: [...]
})
```

### Metadata is:

✅ **Zero runtime cost** - Tree-shakable, stripped in production
✅ **Type-safe** - Full TypeScript support
✅ **Machine-readable** - Consumable by MCP
✅ **Optional** - Delete .meta.ts files if you don't need them

## Setting Up MCP

### For AI Agent Developers

1. **Install Annocraft MCP Server**

```bash
npm install annocraft-ui-mcp-server
```

2. **Configure MCP Client**

```typescript
import { MCPClient } from '@modelcontextprotocol/client'
import { AnnocraftMCPServer } from 'annocraft-ui-mcp-server'

const client = new MCPClient()
await client.connect(new AnnocraftMCPServer())
```

3. **Query Components**

```typescript
const result = await client.callTool('describe_component', {
  componentName: 'Button'
})
```

### For Users (Cursor, Claude, etc.)

Configure in your `.mcp.json`:

```json
{
  "servers": {
    "annocraft-ui": {
      "command": "npx",
      "args": ["annocraft-ui-mcp-server"]
    }
  }
}
```

Then AI assistants in your editor will automatically understand Annocraft components.

## AI Safety Mechanisms

### 1. Composition Validation

AI agents MUST validate before generating:

```typescript
// Agent checks first
const validation = validateUsage({
  component: "Button",
  props: { iconOnly: true },
  context: { parent: "button" }
})

if (!validation.valid) {
  // Don't generate invalid code
  throw new Error(validation.errors[0])
}
```

### 2. Intent Matching

Agents map user goals to semantic intents:

```
User: "Add a save button"
→ Intent: primaryAction
→ Component: Button
→ Props: { intent: "primaryAction" }
```

### 3. Accessibility Enforcement

Agents check accessibility requirements:

```typescript
// Agent knows Button metadata
if (props.iconOnly && !props['aria-label']) {
  // Add aria-label automatically or prompt user
}
```

### 4. Anti-Pattern Detection

Agents learn from documented anti-patterns:

```typescript
// Agent has seen:
antiPatterns: [
  {
    pattern: "Placeholder as label",
    instead: "Use visible label"
  }
]

// So it won't generate:
<Input placeholder="Email" />

// It will generate:
<Input label="Email" placeholder="you@example.com" />
```

## Benefits

### For Developers

- AI assistants generate correct, accessible code
- Fewer bugs from AI-generated UI
- Consistent component usage across team

### For AI Agents

- Deterministic component understanding
- Validated code generation
- Clear success/failure criteria

### For Organizations

- Reduced accessibility violations
- Maintainable AI-generated code
- Auditable UI patterns

## Example: GitHub Copilot

With Annocraft MCP configured:

```tsx
// You type:
// "Create a destructive delete button"

// Copilot suggests:
<Button
  intent="destructiveAction"
  aria-describedby="delete-warning"
>
  Delete Account
</Button>
<p id="delete-warning" className="sr-only">
  This action cannot be undone
</p>

// ✅ Correct intent
// ✅ Includes confirmation
// ✅ Accessible
```

## FAQ

**Q: Do I need MCP to use Annocraft?**
No. Components work perfectly without MCP. MCP enhances AI-assisted workflows.

**Q: Does metadata increase bundle size?**
No. Metadata is in separate `.meta.ts` files that are tree-shakable.

**Q: Can I delete metadata files?**
Yes. Delete `*.meta.ts` files if you don't need them.

**Q: What AI tools support MCP?**
Claude, Cursor (via configuration), and any tool with MCP client support.

**Q: Is MCP standardized?**
Yes. MCP is an open standard by Anthropic.

## Learn More

- [MCP Specification](https://modelcontextprotocol.io)
- [Metadata Schema](../design-philosophy/metadata-schema.md)
- [CLI Validation](../cli-docs/validate.md)
