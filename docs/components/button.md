# Button

An accessible, semantic button component that represents user actions with clear intent.

## Import

```tsx
import { Button } from "@/components/button/button"
```

## Anatomy

```tsx
<Button
  intent="primaryAction"
  size="md"
  emphasis="high"
  state="default"
  iconBefore={<Icon />}
  iconAfter={<Icon />}
  iconOnly={false}
  fullWidth={false}
>
  Button Text
</Button>
```

## Design Intent

The Button component supports these semantic intents:

- `primaryAction` - Main call-to-action in a given context
- `secondaryAction` - Supporting action that complements primary
- `destructiveAction` - Dangerous or irreversible operation (requires confirmation)

## Variants

### Intent

```tsx
<Button intent="primaryAction">Save Changes</Button>
<Button intent="secondaryAction">Cancel</Button>
<Button intent="destructiveAction">Delete Account</Button>
```

### Size

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

### Emphasis

```tsx
<Button emphasis="high">High Emphasis</Button>
<Button emphasis="medium">Medium Emphasis</Button>
<Button emphasis="low">Low Emphasis</Button>
```

### State

```tsx
<Button state="default">Default</Button>
<Button state="disabled">Disabled</Button>
<Button state="loading">Loading</Button>
```

### With Icons

```tsx
<Button iconBefore={<ArrowLeft />}>Back</Button>
<Button iconAfter={<ArrowRight />}>Next</Button>
<Button iconOnly aria-label="Close">
  <X />
</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Accessibility

### WCAG Compliance

- **Level**: WCAG 2.1 AA
- **Keyboard Navigation**: Yes
- **Screen Reader Tested**: Yes
- **Min Touch Target**: 44px (lg) / 40px (md) / 36px (sm)
- **Contrast Ratio**: >=4.5:1

### Keyboard Behavior

| Key | Action |
|-----|--------|
| Enter | Activates the button |
| Space | Activates the button |
| Tab | Moves focus to next element |
| Shift+Tab | Moves focus to previous element |

### ARIA Attributes

**Optional:**
- `aria-label` - Required for icon-only buttons
- `aria-describedby` - Recommended for destructive actions
- `aria-pressed` - For toggle buttons
- `aria-expanded` - For disclosure buttons

## Composition Rules

### Cannot Nest Inside

- `button` - Buttons cannot contain buttons
- `a` - Buttons cannot be inside links (and vice versa)

### Validation Rules

- **Icon-only requires label**: `iconOnly` must have `aria-label`
- **Destructive requires confirmation**: `destructiveAction` should have `aria-describedby`

## Examples

### Form Actions

```tsx
<form>
  <div className="flex gap-2">
    <Button intent="primaryAction" type="submit">
      Submit
    </Button>
    <Button intent="secondaryAction" emphasis="medium" type="button">
      Cancel
    </Button>
  </div>
</form>
```

### Confirmation Dialog

```tsx
<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogDescription id="confirm-desc">
        This action cannot be undone. All your data will be permanently deleted.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button intent="secondaryAction" emphasis="medium">
        Keep Account
      </Button>
      <Button
        intent="destructiveAction"
        aria-describedby="confirm-desc"
      >
        Delete Account
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Loading State

```tsx
function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      state={isLoading ? "loading" : "default"}
      disabled={isLoading}
      onClick={async () => {
        setIsLoading(true)
        await submitForm()
        setIsLoading(false)
      }}
    >
      {isLoading ? "Saving..." : "Save Changes"}
    </Button>
  )
}
```

### Icon-Only Button

```tsx
<Button
  iconOnly
  aria-label="Close dialog"
  emphasis="low"
  size="sm"
>
  <X className="h-4 w-4" />
</Button>
```

## Anti-Patterns

### ❌ Using `<div>` styled as button

```tsx
{/* ❌ Bad - breaks keyboard navigation and semantics */}
<div className="button" onClick={handleClick}>
  Click me
</div>
```

```tsx
{/* ✅ Good - proper semantic HTML */}
<Button onClick={handleClick}>
  Click me
</Button>
```

### ❌ Icon-only without label

```tsx
{/* ❌ Bad - inaccessible to screen readers */}
<Button iconOnly>
  <X />
</Button>
```

```tsx
{/* ✅ Good - includes aria-label */}
<Button iconOnly aria-label="Close">
  <X />
</Button>
```

### ❌ Destructive without confirmation

```tsx
{/* ❌ Bad - users can accidentally delete */}
<Button intent="destructiveAction" onClick={deleteAccount}>
  Delete Account
</Button>
```

```tsx
{/* ✅ Good - includes confirmation details */}
<>
  <Button
    intent="destructiveAction"
    aria-describedby="delete-warning"
    onClick={deleteAccount}
  >
    Delete Account
  </Button>
  <p id="delete-warning" className="text-sm text-gray-600">
    This action cannot be undone
  </p>
</>
```

### ❌ Nesting interactive elements

```tsx
{/* ❌ Bad - invalid HTML and confusing */}
<Button>
  Click <a href="/link">here</a>
</Button>
```

```tsx
{/* ✅ Good - keep button content non-interactive */}
<Button onClick={handleAction}>
  Click here
</Button>
```

## API Reference

### Props

```typescript
interface ButtonProps {
  intent?: "primaryAction" | "secondaryAction" | "destructiveAction"
  size?: "sm" | "md" | "lg"
  emphasis?: "low" | "medium" | "high"
  state?: "default" | "disabled" | "loading"
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  iconOnly?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
  // Plus all standard button HTML attributes
}
```

## AI Usage Notes

When generating Button components, AI agents should:

1. Check if `iconOnly` - if yes, require `aria-label`
2. Check if `intent="destructiveAction"` - if yes, recommend `aria-describedby`
3. Never nest Button inside Button or Link
4. Prefer semantic intents over custom styling
5. Use appropriate size based on context (forms = md, heroes = lg)

## Learn More

- [Design Intent System](../design-philosophy/design-intent.md)
- [Accessibility Guidelines](../accessibility/README.md)
- [CLI Reference](../cli-docs/explain.md)
