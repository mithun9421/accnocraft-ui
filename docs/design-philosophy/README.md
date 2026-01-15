# Design Philosophy

## Core Beliefs

Annocraft UI is built on these fundamental principles:

1. **Ownership-First UI**: Developers own their code, not the framework
2. **Semantic Design**: Express intent, not just appearance
3. **AI-Safe Composition**: Prevent invalid UI through machine-readable rules
4. **Accessibility-by-Contract**: Explicit, testable accessibility guarantees

## 1. Ownership-First UI

### The Problem with Traditional Component Libraries

Traditional libraries (MUI, Chakra, Ant Design) create **runtime dependencies**:

```tsx
// ❌ You don't own this code
import { Button } from '@mui/material'

// What's inside Button? How does theming work?
// Can you modify it? Will updates break your code?
```

### The shadcn/ui Revolution

shadcn/ui introduced a new model: **copy-paste components**

```tsx
// ✅ You own this code
import { Button } from '@/components/button'

// It's in your codebase. Read it. Modify it. Own it.
```

### Annocraft's Enhancement

We keep the shadcn model but add:

- **Design semantics** (intent-based APIs)
- **AI-readable metadata** (for agents and tooling)
- **Explicit guarantees** (accessibility, composition)

## 2. Semantic Design

### Intent Over Appearance

Traditional approach:

```tsx
<Button color="blue" variant="contained">
  Submit
</Button>
```

Problems:
- "blue" is visual, not semantic
- What does "blue" mean in dark mode?
- What does "blue" convey to screen readers?

Annocraft approach:

```tsx
<Button intent="primaryAction" emphasis="high">
  Submit
</Button>
```

Benefits:
- "primaryAction" is meaningful
- Works in any theme
- AI agents understand purpose
- Maintainable across redesigns

### Intent System

Annocraft defines semantic intents:

**Actions:**
- `primaryAction` - Main call-to-action
- `secondaryAction` - Supporting action
- `destructiveAction` - Dangerous operation

**Surfaces:**
- `neutralSurface` - Default background
- `elevatedSurface` - Content above base layer

**Feedback:**
- `successFeedback` - Positive confirmation
- `warningFeedback` - Caution
- `errorFeedback` - Critical error
- `infoFeedback` - Neutral information

### Global Variants

All components share consistent variant meanings:

**Size:**
- `sm` - Compact for dense UIs
- `md` - Standard for most use cases
- `lg` - Prominent for primary actions

**Emphasis:**
- `low` - Subtle, minimal weight
- `medium` - Standard prominence
- `high` - Maximum attention

**State:**
- `default` - Interactive
- `disabled` - Non-interactive
- `loading` - Async operation

## 3. AI-Safe Composition

### The Problem

AI code generation often creates invalid UIs:

```tsx
{/* ❌ Invalid - buttons inside buttons */}
<Button>
  Click <Button>here</Button>
</Button>

{/* ❌ Invalid - nested dialogs */}
<Dialog>
  <Dialog>...</Dialog>
</Dialog>

{/* ❌ Inaccessible - icon without label */}
<Button iconOnly>
  <Icon />
</Button>
```

### Annocraft's Solution: Composition Rules

Every component declares rules:

```typescript
compositionRules: {
  cannotNestInside: ["button", "a"],
  requiresParent: [],
  destructiveRequiresConfirmation: true,
  iconOnlyRequiresLabel: true
}
```

AI agents can:
1. Read these rules via MCP
2. Validate before generating code
3. Fail loudly instead of silently

### Enforcement Layers

1. **TypeScript** - Type-level constraints where possible
2. **Runtime warnings** - Console warnings in development
3. **CLI audit** - Static analysis via `annocraft-ui audit`
4. **MCP validation** - AI agents check before generating

## 4. Accessibility-by-Contract

### Explicit Guarantees

Every component declares what it guarantees:

```typescript
accessibility: {
  wcag: "2.1 AA",
  keyboardNavigation: true,
  focusManagement: "automatic",
  screenReaderTested: true,
  minTouchTarget: "44px",
  contrastRatio: ">=4.5:1",
  ariaAttributes: ["aria-label", "aria-describedby"],
  semanticHTML: true
}
```

### Why This Matters

Traditional accessibility:
- Implicit and untested
- No guarantees
- Breaks silently

Annocraft accessibility:
- Explicit and declared
- Testable contracts
- Fails loudly via audit

### Auditability

```bash
# Audit your entire project
npx annocraft-ui audit a11y

# Results:
# ❌ Error: Button with iconOnly must have aria-label
# ⚠️  Warning: Destructive action without confirmation
```

## Design Tokens

Annocraft uses **semantic tokens**, not color tokens:

```typescript
// ❌ Color-based (fragile)
colors: {
  primary: 'blue-600',
  danger: 'red-600'
}

// ✅ Intent-based (semantic)
intents: {
  primaryAction: { /* maps to colors */ },
  destructiveAction: { /* maps to colors */ }
}
```

Benefits:
- Theme changes don't break semantics
- AI understands purpose
- Consistent across brand refreshes

## Anti-Patterns

Annocraft explicitly documents anti-patterns:

```typescript
antiPatterns: [
  {
    pattern: "Placeholder as label",
    reason: "Disappears on input, inaccessible",
    instead: "Use visible label or hideLabel with aria-label"
  }
]
```

This helps:
- Humans avoid mistakes
- AI agents generate correct code
- Code reviews catch issues

## Summary

Annocraft UI is:
- **Owned** by developers (copy-paste model)
- **Semantic** in design (intent-based)
- **Safe** for AI generation (composition rules)
- **Accessible** by contract (explicit guarantees)

It's not just a component library—it's a **design system for the AI era**.
