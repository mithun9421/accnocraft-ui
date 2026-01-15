# Installation

## Prerequisites

- Node.js 16+
- React 18+
- TypeScript 4.9+
- Tailwind CSS 3.3+

## Step 1: Install Tailwind CSS

If you haven't already, set up Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 2: Configure Tailwind

Update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Annocraft UI uses intent-based tokens
      // You can customize these mappings
    },
  },
  plugins: [],
}
```

## Step 3: Install Annocraft UI CLI

```bash
npm install -D annocraft-ui
```

## Step 4: Add Components

Use the CLI to add components to your project:

```bash
npx annocraft-ui add button
```

This copies the component files to your project:

```
components/
  button/
    button.tsx          # Component implementation
    button.meta.ts      # AI-readable metadata (optional)
    button.styles.ts    # Style composition
    button.examples.tsx # Usage examples (optional)
```

## Step 5: Install Dependencies

Some components require additional dependencies:

```bash
# For Dialog component
npm install @radix-ui/react-dialog

# For other Radix primitives (as needed)
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-popover
npm install @radix-ui/react-tooltip
```

## Step 6: Import and Use

```tsx
import { Button } from "@/components/button/button"

export default function MyPage() {
  return (
    <Button intent="primaryAction" size="md">
      Get Started
    </Button>
  )
}
```

## TypeScript Configuration

Ensure your `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Next.js Configuration

For Next.js 13+ with App Router, no additional configuration needed.

For Next.js with Pages Router, ensure Tailwind is configured correctly.

## Vite Configuration

For Vite projects:

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

## Verify Installation

Check that everything works:

```bash
# Explain a component
npx annocraft-ui explain button

# List available components
npx annocraft-ui add --help
```

## Troubleshooting

### "Module not found" errors

Make sure your path aliases are configured correctly in `tsconfig.json`.

### Tailwind styles not applying

1. Check that your `tailwind.config.js` content paths include your components
2. Ensure Tailwind directives are in your global CSS
3. Restart your dev server

### TypeScript errors in metadata files

Metadata files are optional. You can delete `*.meta.ts` files if you don't need them.

## Next Steps

- [Learn about Design Intent](../design-philosophy/design-intent.md)
- [Browse Components](../components/README.md)
- [Configure MCP](../ai-and-mcp/mcp-setup.md)
