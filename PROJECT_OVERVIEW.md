# Annocraft UI — Project Overview

This document provides a complete overview of the Annocraft UI design system architecture.

## 📁 Project Structure

```
annocraft-ui/
├── components/              # Component implementations
│   ├── button/
│   │   ├── button.tsx          # React component
│   │   ├── button.meta.ts      # AI-readable metadata
│   │   ├── button.styles.ts    # Tailwind style composition
│   │   └── button.examples.tsx # Usage examples
│   ├── dialog/
│   │   ├── dialog.tsx
│   │   └── dialog.meta.ts
│   └── input/
│       ├── input.tsx
│       ├── input.meta.ts
│       └── input.styles.ts
│
├── design/                  # Core design system abstractions
│   ├── intents.ts              # Semantic intent definitions
│   ├── variants.ts             # Global variant system
│   ├── tokens.ts               # Design tokens (intent → Tailwind)
│   └── metadata.ts             # Component metadata schema
│
├── mcp/                     # Model Context Protocol server
│   ├── server.ts               # MCP tool implementations
│   ├── schemas.ts              # JSON schemas for MCP
│   └── validators.ts           # Runtime validation
│
├── cli/                     # Command-line interface
│   ├── index.ts                # CLI entry point
│   ├── add.ts                  # Add components command
│   ├── explain.ts              # Explain component command
│   └── audit.ts                # Audit project command
│
├── docs/                    # Comprehensive documentation
│   ├── getting-started/
│   │   ├── introduction.md
│   │   └── installation.md
│   ├── design-philosophy/
│   │   └── README.md
│   ├── components/
│   │   └── button.md
│   ├── accessibility/
│   │   └── README.md
│   ├── ai-and-mcp/
│   │   └── README.md
│   └── migration/
│       └── from-shadcn.md
│
├── index.ts                 # Main entry point
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript configuration
├── README.md               # Main README
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT License
└── .gitignore              # Git ignore rules
```

## 🎯 Core Concepts

### 1. Design Intent System

Location: `design/intents.ts`

Semantic intents that replace color-based APIs:

- **Actions**: primaryAction, secondaryAction, destructiveAction
- **Surfaces**: neutralSurface, elevatedSurface
- **Feedback**: successFeedback, warningFeedback, errorFeedback, infoFeedback

### 2. Global Variant System

Location: `design/variants.ts`

Consistent variants across all components:

- **size**: sm | md | lg
- **density**: compact | comfortable
- **emphasis**: low | medium | high
- **state**: default | disabled | loading

### 3. Component Metadata Schema

Location: `design/metadata.ts`

Machine-readable component intelligence:

```typescript
ComponentMetadata {
  name, category, description
  supportedIntents
  variants
  accessibility (WCAG guarantees)
  keyboard (behavior)
  aria (attributes)
  compositionRules (AI safety)
  antiPatterns (what NOT to do)
  examples (usage patterns)
}
```

## 🧱 Component Architecture

### Button Component

Files:
- `button.tsx` - React implementation
- `button.meta.ts` - Metadata for AI/MCP
- `button.styles.ts` - Tailwind composition
- `button.examples.tsx` - Usage examples

Features:
- Intent-based API (primaryAction, destructiveAction, etc.)
- Global variants (size, emphasis, state)
- Icon support (before, after, icon-only)
- Loading state with spinner
- Accessibility validation (icon-only requires aria-label)

### Dialog Component

Files:
- `dialog.tsx` - Radix Dialog wrapper
- `dialog.meta.ts` - Metadata

Features:
- Built on Radix UI primitives
- Automatic focus management
- Keyboard navigation (Escape to close)
- Proper ARIA attributes
- Size variants

### Input Component

Files:
- `input.tsx` - Text input with label/error
- `input.meta.ts` - Metadata
- `input.styles.ts` - Tailwind composition

Features:
- Label support (visible or sr-only)
- Error state with messages
- Helper text
- Icon support (before/after)
- Proper ARIA associations

## 🤖 MCP Server

Location: `mcp/server.ts`

Exposes 6 tools for AI agents:

1. **list_components** - Get all components
2. **describe_component** - Get detailed metadata
3. **recommend_component** - AI-safe recommendations
4. **validate_usage** - Check composition/a11y
5. **compose_layout** - Generate layouts
6. **audit_accessibility** - Project-wide audit

## 🛠️ CLI Tools

Location: `cli/`

Three main commands:

### 1. Add Components
```bash
npx annocraft-ui add button dialog
```

Copies component files to user's project (shadcn model).

### 2. Explain Components
```bash
npx annocraft-ui explain button --verbose
```

Displays component metadata, variants, accessibility, and best practices.

### 3. Audit Project
```bash
npx annocraft-ui audit a11y
npx annocraft-ui audit composition
```

Static analysis for accessibility and composition violations.

## 📚 Documentation

Location: `docs/`

### Coverage

1. **Getting Started** - Introduction, installation
2. **Design Philosophy** - Semantic design, AI-safety, a11y-by-contract
3. **Component Docs** - Per-component documentation
4. **Accessibility** - WCAG strategy, testing, auditing
5. **AI & MCP** - Model Context Protocol integration
6. **Migration** - From shadcn/ui and other libraries

### Documentation Features

- Human-readable (Markdown)
- Machine-readable (via metadata)
- Example-driven
- Anti-pattern documentation
- AI usage notes

## 🎨 Design Tokens

Location: `design/tokens.ts`

Maps semantic intents to Tailwind utilities:

```typescript
intentTokens: {
  primaryAction: {
    background: "bg-blue-600",
    foreground: "text-white",
    hover: "hover:bg-blue-700",
    // ...
  }
}
```

Users can customize these mappings in their Tailwind config.

## ♿ Accessibility Architecture

### Explicit Guarantees

Every component declares:
- WCAG level (2.1 AA)
- Keyboard navigation support
- Focus management strategy
- Screen reader testing status
- Minimum touch targets
- Contrast ratios
- Required/optional ARIA

### Enforcement Layers

1. **TypeScript** - Type-level constraints
2. **Runtime warnings** - Console warnings in dev
3. **CLI audit** - Static analysis
4. **MCP validation** - AI agent checks

## 🔄 Copy-Paste Model

Like shadcn/ui:

1. User runs `npx annocraft-ui add button`
2. Files are copied to user's project
3. User owns the code
4. No runtime dependency
5. Modify as needed

Unlike shadcn/ui:

- Components use intent-based APIs
- Include machine-readable metadata
- Have explicit a11y contracts
- Support MCP for AI agents

## 🚀 Extensibility

### Adding New Components

1. Create component files (tsx, meta.ts, styles.ts)
2. Implement ComponentMetadata
3. Document accessibility guarantees
4. Add composition rules
5. Document anti-patterns
6. Create examples
7. Write tests
8. Add documentation page

### Adding New Intents

1. Add to `design/intents.ts`
2. Map tokens in `design/tokens.ts`
3. Update metadata schema if needed
4. Document usage patterns

## 📦 Package Distribution

The package includes:

- `/components` - Component implementations
- `/design` - Core abstractions
- `/mcp` - MCP server
- `/cli` - CLI tools
- Type definitions
- Documentation

Users can:
- Copy individual components (recommended)
- Import types/utilities
- Use CLI tools
- Run MCP server for AI agents

## 🎯 Quality Standards

### Code Quality
- TypeScript strict mode
- No `any` types
- Full test coverage
- Linted and formatted

### Accessibility Quality
- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader tested
- Proper ARIA
- Adequate contrast
- Touch-friendly targets

### Documentation Quality
- Human and AI readable
- Example-driven
- Anti-patterns documented
- Migration guides
- Contribution guidelines

## 🔮 Future Enhancements

Planned additions:

1. More components (Alert, Badge, Card, Checkbox, Radio, Select, etc.)
2. Enhanced MCP capabilities (code generation, refactoring)
3. Visual regression testing
4. Interactive documentation site
5. VS Code extension
6. Figma plugin for design-to-code
7. Analytics and telemetry (opt-in)

## 📊 Success Metrics

Goals:

- ✅ Semantic, intent-based component APIs
- ✅ Zero runtime overhead for metadata
- ✅ WCAG 2.1 AA compliance
- ✅ AI-safe code generation via MCP
- ✅ CLI auditing tools
- ✅ Comprehensive documentation
- ✅ Copy-paste ownership model

## 🙌 Credits

Inspired by:
- **shadcn/ui** - Copy-paste component model
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling
- **Anthropic** - Model Context Protocol

---

**Annocraft UI**: A civilization-grade design system for the AI era.
