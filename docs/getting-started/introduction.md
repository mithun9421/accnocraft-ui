# Introduction to Annocraft UI

## What is Annocraft UI?

Annocraft UI is a **production-grade, AI-native design system** that improves upon the shadcn/ui model by introducing:

- **Design Semantics**: Components express intent, not just appearance
- **Machine-Readable Intelligence**: Every component includes metadata for AI agents
- **MCP Compatibility**: Native Model Context Protocol support
- **Accessibility Guarantees**: Explicit, testable accessibility contracts
- **AI-Safe Composition**: Prevents invalid UI generation

## Key Principles

### 1. User Owns the Code

- ✅ No runtime dependency
- ✅ No context providers
- ✅ No global singletons
- ✅ Copy-paste install model (like shadcn/ui)

You copy the component code into your project and you own it. Modify it as needed.

### 2. AI-Native, Not AI-Dependent

- ✅ Fully usable without AI
- ✅ Fully understandable by AI agents
- ✅ Metadata is static, tree-shakable, and optional

The system works perfectly for human developers while providing rich context for AI assistants.

### 3. Design Semantics Over Styling

Components use **intent-based APIs** instead of color-based APIs:

```tsx
// ❌ Color-based (less semantic)
<Button color="blue">Submit</Button>

// ✅ Intent-based (semantic)
<Button intent="primaryAction">Submit</Button>
```

### 4. Accessibility Is Declarative

Every component explicitly declares its accessibility guarantees:

```typescript
accessibility: {
  wcag: "2.1 AA",
  keyboardNavigation: true,
  focusManagement: "automatic",
  screenReaderTested: true,
  minTouchTarget: "44px",
  contrastRatio: ">=4.5:1"
}
```

## Who Is It For?

Annocraft UI is designed for:

- **Product teams** building accessible, semantic UIs
- **Design systems teams** who need AI-safe component libraries
- **AI-assisted development** workflows (Cursor, GitHub Copilot, Claude)
- **Enterprises** requiring accessibility compliance and auditability

## Who Is It NOT For?

Consider alternatives if:

- You need a plug-and-play component library (try MUI, Chakra)
- You want zero configuration (this requires understanding the system)
- You don't care about accessibility or semantic design
- You need extensive pre-built components (we're focused on core patterns)

## Comparison with shadcn/ui

| Feature | shadcn/ui | Annocraft UI |
|---------|-----------|--------------|
| Copy-paste model | ✅ | ✅ |
| User owns code | ✅ | ✅ |
| Radix primitives | ✅ | ✅ |
| Tailwind CSS | ✅ | ✅ |
| **Design semantics** | ❌ | ✅ |
| **AI metadata** | ❌ | ✅ |
| **MCP support** | ❌ | ✅ |
| **Explicit a11y contracts** | ❌ | ✅ |
| **Composition rules** | ❌ | ✅ |
| **CLI audit tools** | ❌ | ✅ |

Annocraft UI builds on shadcn/ui's foundation while adding semantic design, AI-native capabilities, and explicit accessibility guarantees.

## Quick Start

```bash
# Install CLI
npm install -D annocraft-ui

# Add components
npx annocraft-ui add button input dialog

# Explain a component
npx annocraft-ui explain button --verbose

# Audit your project
npx annocraft-ui audit a11y
```

## Next Steps

- [Installation Guide](./installation.md)
- [Design Philosophy](../design-philosophy/README.md)
- [Component Docs](../components/README.md)
