# Contributing to Annocraft UI

Thank you for your interest in contributing to Annocraft UI! This document provides guidelines and instructions for contributing.

## 🎯 Mission

Our mission is to build a **civilization-grade, AI-native design system** that:

- Provides semantic, accessible components
- Enables AI-safe code generation
- Guarantees WCAG 2.1 AA compliance
- Empowers developers to own their UI code

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/annocraft-ui/annocraft-ui/issues)
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment (React version, browser, OS)
   - Code sample if applicable

### Suggesting Features

1. Check [Discussions](https://github.com/annocraft-ui/annocraft-ui/discussions) for existing proposals
2. Create a new discussion with:
   - Use case description
   - Proposed API design
   - How it aligns with Annocraft principles
   - Example usage

### Adding Components

New components must meet these requirements:

#### 1. Design Requirements

- [ ] Uses intent-based API (not color-based)
- [ ] Implements global variants (size, emphasis, state)
- [ ] Maps to semantic intents
- [ ] Follows existing design patterns

#### 2. Accessibility Requirements

- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigable
- [ ] Screen reader tested
- [ ] Proper ARIA attributes
- [ ] Minimum touch targets (44px for lg, 40px for md)
- [ ] Adequate color contrast (>=4.5:1)

#### 3. Code Requirements

- [ ] TypeScript with strict mode
- [ ] Radix primitives where applicable
- [ ] Tailwind CSS for styling
- [ ] Zero runtime dependencies for core logic
- [ ] Proper prop types with JSDoc

#### 4. Metadata Requirements

- [ ] Complete ComponentMetadata
- [ ] Documented intents
- [ ] Composition rules
- [ ] Anti-patterns documented
- [ ] Usage examples (minimum 3)

#### 5. Testing Requirements

- [ ] Unit tests for logic
- [ ] Accessibility tests (jest-axe)
- [ ] Keyboard navigation tests
- [ ] Visual regression tests
- [ ] Screen reader tested manually

#### 6. Documentation Requirements

- [ ] Component documentation page
- [ ] API reference
- [ ] Accessibility section
- [ ] Examples with code
- [ ] Anti-patterns documented
- [ ] AI usage notes

### Component Template

Use this structure for new components:

```
components/
  new-component/
    new-component.tsx          # Implementation
    new-component.meta.ts      # Metadata
    new-component.styles.ts    # Style composition
    new-component.examples.tsx # Usage examples
    new-component.test.ts      # Unit tests
    new-component.a11y.test.ts # Accessibility tests
```

## 📝 Code Style

### TypeScript

- Use strict mode
- No `any` types
- Prefer interfaces over types for props
- Use JSDoc for public APIs

### React

- Use function components with hooks
- Use `React.forwardRef` for components that need ref
- Prefer named exports
- Use semantic HTML

### Naming Conventions

- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`buttonStyles.ts`)
- Constants: UPPER_SNAKE_CASE (`INTENTS`)
- Props interfaces: `ComponentNameProps`

### Tailwind CSS

- Use semantic tokens from `design/tokens.ts`
- Never hardcode colors in components
- Use intent-based utilities
- Keep styles in separate `.styles.ts` files

## 🧪 Testing

### Run Tests

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # With coverage
```

### Testing Standards

- Unit tests for all logic
- Accessibility tests for all components
- Keyboard navigation tests
- Screen reader manual testing required

### Example Test

```typescript
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from './button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('is accessible', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('requires aria-label for icon-only', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation()
    render(<Button iconOnly><Icon /></Button>)
    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining('iconOnly mode requires aria-label')
    )
    spy.mockRestore()
  })
})
```

## 🔀 Pull Request Process

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/annocraft-ui
cd annocraft-ui
git remote add upstream https://github.com/annocraft-ui/annocraft-ui
```

### 2. Create Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Make Changes

- Follow code style guidelines
- Write tests
- Update documentation
- Run linter and tests

```bash
npm run lint
npm test
npm run build
```

### 4. Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat(button): add loading state"
git commit -m "fix(input): resolve label association"
git commit -m "docs(readme): update installation steps"
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- Clear description of changes
- Link to related issues
- Screenshots for UI changes
- Accessibility testing results
- Breaking changes noted

### 6. Review Process

- Maintainers will review your PR
- Address feedback
- Update PR with changes
- Once approved, we'll merge

## 🚫 Breaking Change Policy

Annocraft is committed to stability. Breaking changes require:

1. Major version bump
2. Migration guide
3. Deprecation warnings in previous version
4. 6-month deprecation period when possible

## 📋 Design Principles

When contributing, keep these principles in mind:

### 1. Ownership-First

- Users own the code
- No runtime dependencies
- No magic or hidden behavior
- Transparent and modifiable

### 2. Semantic Over Stylistic

- Intent-based APIs
- No color-based props
- Theme-agnostic tokens
- Self-documenting

### 3. AI-Safe Composition

- Machine-readable rules
- Explicit validation
- Anti-patterns documented
- MCP compatible

### 4. Accessibility-by-Contract

- Explicit guarantees
- Testable compliance
- Auditable
- No silent failures

## 🎨 Component Design Rules

### API Design

✅ **Do:**
```tsx
<Button intent="primaryAction" size="md" emphasis="high">
```

❌ **Don't:**
```tsx
<Button color="blue" variant="contained">
```

### Variant Naming

✅ **Do:**
- Use semantic names (`primaryAction`, `destructiveAction`)
- Be consistent across components
- Document the meaning, not appearance

❌ **Don't:**
- Use appearance-based names (`solid`, `outlined`)
- Use arbitrary names (`type1`, `style2`)
- Use color names as variants

### Accessibility

✅ **Do:**
- Use semantic HTML
- Add ARIA when needed
- Test with screen readers
- Document keyboard behavior
- Provide visible labels

❌ **Don't:**
- Rely on visual appearance alone
- Use placeholder as label
- Skip focus indicators
- Nest interactive elements
- Assume implicit accessibility

## 📞 Get Help

- [Discord Community](https://discord.gg/annocraft-ui)
- [GitHub Discussions](https://github.com/annocraft-ui/annocraft-ui/discussions)
- [Documentation](https://annocraft-ui.dev)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Annocraft UI! 🎨
