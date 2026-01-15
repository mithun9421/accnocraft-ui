# Migrating from shadcn/ui

Annocraft UI builds on shadcn/ui's foundation while adding semantic design, AI-native capabilities, and explicit accessibility guarantees.

## Key Differences

| Feature | shadcn/ui | Annocraft UI |
|---------|-----------|--------------|
| Copy-paste model | ✅ | ✅ |
| Radix primitives | ✅ | ✅ |
| Tailwind CSS | ✅ | ✅ |
| **Semantic intents** | ❌ | ✅ |
| **Component metadata** | ❌ | ✅ |
| **MCP support** | ❌ | ✅ |
| **Explicit a11y contracts** | ❌ | ✅ |
| **Composition rules** | ❌ | ✅ |

## Migration Strategy

### Step 1: Understand Intent System

shadcn/ui uses appearance-based props:

```tsx
// shadcn/ui
<Button variant="default">Primary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Tertiary</Button>
```

Annocraft uses intent-based props:

```tsx
// Annocraft UI
<Button intent="primaryAction" emphasis="high">Primary</Button>
<Button intent="destructiveAction">Delete</Button>
<Button intent="secondaryAction" emphasis="medium">Secondary</Button>
<Button intent="secondaryAction" emphasis="low">Tertiary</Button>
```

### Step 2: Map Variants

#### Button

| shadcn/ui | Annocraft UI |
|-----------|--------------|
| `variant="default"` | `intent="primaryAction" emphasis="high"` |
| `variant="destructive"` | `intent="destructiveAction"` |
| `variant="outline"` | `intent="secondaryAction" emphasis="medium"` |
| `variant="secondary"` | `intent="secondaryAction" emphasis="high"` |
| `variant="ghost"` | `intent="secondaryAction" emphasis="low"` |
| `variant="link"` | Use `<a>` tag or `emphasis="low"` |

#### Sizes

Both use the same size variants:
- `size="sm"` ✅
- `size="md"` (default) ✅
- `size="lg"` ✅

### Step 3: Add Accessibility Attributes

Annocraft requires explicit accessibility:

```tsx
// shadcn/ui (implicit)
<Button>
  <TrashIcon />
</Button>

// Annocraft UI (explicit)
<Button iconOnly aria-label="Delete item">
  <TrashIcon />
</Button>
```

### Step 4: Handle Destructive Actions

```tsx
// shadcn/ui
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>

// Annocraft UI (with confirmation)
<>
  <Button
    intent="destructiveAction"
    onClick={handleDelete}
    aria-describedby="delete-warning"
  >
    Delete Account
  </Button>
  <p id="delete-warning" className="sr-only">
    This action cannot be undone
  </p>
</>
```

## Incremental Migration

You can migrate component-by-component:

```tsx
// Keep existing shadcn Button
import { Button as ShadcnButton } from '@/components/ui/button'

// Add new Annocraft Button
import { Button as AnnocraftButton } from '@/components/annocraft/button'

// Use both during migration
<ShadcnButton variant="default">Old Button</ShadcnButton>
<AnnocraftButton intent="primaryAction">New Button</AnnocraftButton>
```

## Automated Migration

Use codemod to assist migration:

```bash
npx annocraft-ui migrate from-shadcn --path ./src
```

This will:
1. Detect shadcn button usage
2. Map variants to intents
3. Add required accessibility attributes
4. Generate diff for review

## Example: Before & After

### Before (shadcn/ui)

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### After (Annocraft UI)

```tsx
import { Button } from "@/components/button/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog/dialog"

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button intent="destructiveAction" emphasis="high">
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription id="delete-desc">
            This action cannot be undone. All your data will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button intent="secondaryAction" emphasis="medium">
            Cancel
          </Button>
          <Button
            intent="destructiveAction"
            aria-describedby="delete-desc"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Changes

1. **Intent-based API**: `variant="destructive"` → `intent="destructiveAction"`
2. **Emphasis system**: `variant="outline"` → `emphasis="medium"`
3. **Accessibility**: Added `id` and `aria-describedby` for confirmation
4. **Clearer description**: Expanded warning text

## Compatibility Layer

For gradual migration, create compatibility wrappers:

```tsx
// components/compat/button.tsx
import { Button as AnnocraftButton } from '@/components/button/button'

type ShadcnVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

interface CompatButtonProps {
  variant?: ShadcnVariant
  // ... other props
}

export function Button({ variant = 'default', ...props }: CompatButtonProps) {
  // Map shadcn variants to Annocraft intents
  const intentMap: Record<ShadcnVariant, { intent: string; emphasis: string }> = {
    default: { intent: 'primaryAction', emphasis: 'high' },
    destructive: { intent: 'destructiveAction', emphasis: 'high' },
    outline: { intent: 'secondaryAction', emphasis: 'medium' },
    secondary: { intent: 'secondaryAction', emphasis: 'high' },
    ghost: { intent: 'secondaryAction', emphasis: 'low' },
    link: { intent: 'secondaryAction', emphasis: 'low' },
  }

  const { intent, emphasis } = intentMap[variant]

  return <AnnocraftButton intent={intent} emphasis={emphasis} {...props} />
}
```

## Benefits After Migration

✅ **Semantic clarity**: Intent-based APIs are self-documenting

✅ **AI-safe**: Components validate composition and accessibility

✅ **Explicit a11y**: Accessibility is guaranteed, not assumed

✅ **Auditable**: Use CLI tools to audit your entire codebase

✅ **Future-proof**: Intent system adapts to brand changes

## Common Pitfalls

### 1. Forgetting aria-label for icon-only

```tsx
// ❌ Missing label
<Button iconOnly>
  <TrashIcon />
</Button>

// ✅ With label
<Button iconOnly aria-label="Delete">
  <TrashIcon />
</Button>
```

### 2. Not handling destructive confirmation

```tsx
// ❌ No confirmation context
<Button intent="destructiveAction">Delete</Button>

// ✅ With confirmation
<Button intent="destructiveAction" aria-describedby="warning">
  Delete
</Button>
<p id="warning" className="sr-only">Cannot be undone</p>
```

### 3. Using wrong emphasis

```tsx
// ❌ Everything is high emphasis
<Button intent="primaryAction" emphasis="high">Save</Button>
<Button intent="secondaryAction" emphasis="high">Cancel</Button>

// ✅ Proper emphasis hierarchy
<Button intent="primaryAction" emphasis="high">Save</Button>
<Button intent="secondaryAction" emphasis="medium">Cancel</Button>
```

## Testing After Migration

Run audits to verify:

```bash
# Check accessibility
npx annocraft-ui audit a11y

# Check composition
npx annocraft-ui audit composition

# Run both
npx annocraft-ui audit all
```

## Need Help?

- [Discord Community](https://discord.gg/annocraft-ui)
- [GitHub Discussions](https://github.com/annocraft-ui/annocraft-ui/discussions)
- [Migration Guide (Video)](https://annocraft-ui.dev/videos/migrate-shadcn)
