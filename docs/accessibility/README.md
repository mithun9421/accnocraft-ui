# Accessibility Guide

Annocraft UI is built on the principle that **accessibility should be explicit, testable, and guaranteed**.

## Philosophy

### Traditional Approach (Implicit)

```tsx
// ❓ Is this accessible?
// ❓ What WCAG level?
// ❓ Has it been tested?
<Button>Click me</Button>
```

### Annocraft Approach (Explicit)

```typescript
// ✅ Declares exactly what it guarantees
accessibility: {
  wcag: "2.1 AA",
  keyboardNavigation: true,
  focusManagement: "automatic",
  screenReaderTested: true,
  minTouchTarget: "44px",
  contrastRatio: ">=4.5:1"
}
```

## WCAG Strategy

All Annocraft components aim for **WCAG 2.1 Level AA** compliance.

### Coverage

| Principle | Level | Status |
|-----------|-------|--------|
| Perceivable | AA | ✅ |
| Operable | AA | ✅ |
| Understandable | AA | ✅ |
| Robust | AA | ✅ |

### Key Success Criteria

#### 1. Perceivable

**1.4.3 Contrast (Minimum) - AA**
- All text has minimum 4.5:1 contrast ratio
- Large text has minimum 3:1 contrast
- Verified with intentTokens design system

**1.4.11 Non-text Contrast - AA**
- UI components have 3:1 contrast
- Focus indicators are clearly visible

#### 2. Operable

**2.1.1 Keyboard - A**
- All functionality available via keyboard
- No keyboard traps
- Documented in component metadata

**2.1.2 No Keyboard Trap - A**
- Focus can always be moved away
- Modals include close mechanisms

**2.4.7 Focus Visible - AA**
- Focus indicators are clear and consistent
- Uses `focus-visible` to avoid mouse focus rings

**2.5.5 Target Size - AAA** (we exceed this)
- Default touch targets are 44px
- Medium size is 40px (AA compliant)
- Small size is 36px (use sparingly)

#### 3. Understandable

**3.2.2 On Input - A**
- No unexpected context changes
- Loading states are explicit

**3.3.1 Error Identification - A**
- Errors are clearly announced
- Uses `role="alert"` for dynamic errors

**3.3.2 Labels or Instructions - A**
- All inputs have labels
- Placeholder is never the only label

#### 4. Robust

**4.1.2 Name, Role, Value - A**
- Semantic HTML where possible
- ARIA attributes where needed
- All components have proper roles

## Keyboard Navigation

### Global Standards

All Annocraft components follow these keyboard conventions:

| Key | Action |
|-----|--------|
| Tab | Move focus forward |
| Shift + Tab | Move focus backward |
| Enter | Activate buttons/links |
| Space | Activate buttons, toggle checkboxes |
| Escape | Close dialogs/popovers |
| Arrow keys | Navigate within composite widgets |

### Component-Specific

#### Button
- **Enter / Space**: Activate
- **Tab**: Move focus

#### Dialog
- **Escape**: Close dialog
- **Tab**: Cycle focus within (focus trap)

#### Input
- **Tab**: Move focus
- Standard text input keys

## Screen Reader Testing

### Testing Matrix

All components are tested with:

| Screen Reader | Browser | Platform |
|---------------|---------|----------|
| NVDA | Firefox, Chrome | Windows |
| JAWS | Chrome | Windows |
| VoiceOver | Safari | macOS |
| VoiceOver | Safari | iOS |
| TalkBack | Chrome | Android |

### Testing Checklist

For each component:

- [ ] Announces name/label correctly
- [ ] Announces role correctly
- [ ] Announces state (disabled, loading, etc.)
- [ ] Announces value/content
- [ ] Announces changes dynamically
- [ ] Navigation makes sense
- [ ] Instructions are clear

## Focus Management

### Automatic vs Manual

Annocraft components declare focus management strategy:

```typescript
focusManagement: "automatic" | "manual" | "none"
```

**Automatic** (e.g., Dialog):
- Component manages focus automatically
- Returns focus on close
- Traps focus while open

**Manual** (e.g., custom keyboard nav):
- Developer controls focus
- Component provides helpers

**None** (e.g., static display):
- No focus management needed

## Touch Targets

### Size Requirements

| Size | Dimension | WCAG Level | Use Case |
|------|-----------|------------|----------|
| `lg` | 44px+ | AAA | Primary actions, mobile |
| `md` | 40px+ | AA | Standard UI |
| `sm` | 36px+ | Below AA | Dense UI, desktop only |

### Guidelines

✅ **Do:**
- Use `lg` or `md` for mobile
- Use `lg` for primary actions
- Ensure adequate spacing between targets

❌ **Don't:**
- Use `sm` as default
- Place small targets close together
- Use `sm` on touch devices

## ARIA Best Practices

### When to Use ARIA

1. **Use semantic HTML first**
   ```tsx
   {/* ✅ Semantic HTML */}
   <button>Click</button>

   {/* ❌ Unnecessary ARIA */}
   <div role="button" tabIndex={0}>Click</div>
   ```

2. **Add ARIA when needed**
   ```tsx
   {/* ✅ ARIA for context */}
   <button aria-label="Close dialog">
     <X />
   </button>
   ```

3. **Don't redundantly use ARIA**
   ```tsx
   {/* ❌ Redundant */}
   <button role="button">Click</button>

   {/* ✅ Clean */}
   <button>Click</button>
   ```

### Common Patterns

#### Icon-Only Buttons
```tsx
<Button iconOnly aria-label="Delete item">
  <Trash />
</Button>
```

#### Destructive Actions
```tsx
<Button
  intent="destructiveAction"
  aria-describedby="delete-warning"
>
  Delete Account
</Button>
<p id="delete-warning" className="sr-only">
  This action cannot be undone
</p>
```

#### Loading States
```tsx
<Button state="loading" aria-busy="true" disabled>
  Saving...
</Button>
```

#### Form Errors
```tsx
<Input
  label="Email"
  error="Invalid email format"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error" role="alert">
  Invalid email format
</p>
```

## Auditing with CLI

### Run Accessibility Audit

```bash
npx annocraft-ui audit a11y
```

### Sample Output

```
🔍 Annocraft UI — Accessibility Audit

❌ Errors:
  components/MyButton.tsx:42
    [icon-only-requires-label] Button with iconOnly must have aria-label
    Fix: Add aria-label="..." prop

⚠️  Warnings:
  components/MyForm.tsx:88
    [destructive-without-confirmation] Destructive action should include confirmation
    Fix: Add aria-describedby with confirmation details

📊 Summary:
  Errors: 1
  Warnings: 1
  Passed: 23
```

### Continuous Integration

Add to your CI pipeline:

```yaml
# .github/workflows/ci.yml
- name: Audit Accessibility
  run: npx annocraft-ui audit a11y
```

## Testing Guide

### Manual Testing

1. **Keyboard-only test**
   - Unplug your mouse
   - Can you access everything?
   - Is focus always visible?

2. **Screen reader test**
   - Enable VoiceOver/NVDA
   - Navigate your UI
   - Does everything make sense?

3. **Zoom test**
   - Zoom to 200%
   - Is everything still usable?
   - Does text reflow properly?

4. **Color blindness test**
   - Use browser DevTools color blindness simulator
   - Is information conveyed without color alone?

### Automated Testing

```tsx
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('Button is accessible', async () => {
  const { container } = render(
    <Button intent="primaryAction">Submit</Button>
  )

  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [The A11y Project](https://www.a11yproject.com/)

## Accessibility Statement

Annocraft UI components are designed and tested to meet WCAG 2.1 Level AA standards. We provide:

- Explicit accessibility guarantees per component
- Comprehensive keyboard navigation
- Screen reader compatibility
- Adequate color contrast
- Touch-friendly targets
- CLI auditing tools

For accessibility issues, please file an issue on GitHub.
