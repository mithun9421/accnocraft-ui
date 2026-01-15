# Annocraft UI - Preview & Documentation Site

A production-grade documentation site with live component previews, dark mode, code examples, and animation integration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✨ Features

### 🎨 Design System
- **20+ Components** - Production-ready, accessible components
- **Dark Mode** - Beautiful in both light and dark themes
- **Semantic Design** - Intent-based APIs (not color-based)
- **Copy & Paste** - You own the code

### 📚 Documentation
- **Installation Guide** - Step-by-step setup instructions
- **Quick Start** - Get running in 5 minutes
- **Component Pages** - Detailed docs for each component
- **Code Examples** - Copy-paste ready code snippets
- **API Reference** - Complete prop documentation
- **Theming Guide** - Customize colors and dark mode
- **Animation Guide** - Framer Motion integration

### 🎭 Interactive Features
- **Live Component Demos** - See components in action
- **Code Block Copy** - One-click code copying
- **Theme Toggle** - Switch between light/dark modes
- **Responsive Navigation** - Sidebar with all pages
- **Search-Ready** - Organized and categorized

## 📁 Structure

```
preview/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Homepage
│   ├── components/               # Component pages
│   │   ├── button/page.tsx
│   │   ├── alert/page.tsx
│   │   └── ...
│   ├── docs/                     # Documentation pages
│   │   ├── installation/page.tsx
│   │   ├── quick-start/page.tsx
│   │   ├── theming/page.tsx
│   │   └── ...
│   └── animation/                # Animation guides
│       ├── framer-motion/page.tsx
│       └── gsap/page.tsx
├── components/                   # Preview app components
│   ├── header.tsx
│   ├── sidebar.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── code-block.tsx
└── public/                       # Static assets
```

## 🎯 Page Types

### Homepage (`/`)
- Hero section
- Feature grid
- Component showcase
- Quick start example
- CTA sections

### Component Pages (`/components/*`)
Each component has:
- Installation command
- Usage example
- Multiple variant demonstrations
- Interactive demos
- Code snippets
- API reference table
- Accessibility notes

### Documentation Pages (`/docs/*`)
- **Installation** - Complete setup guide
- **Quick Start** - 5-minute tutorial
- **Theming** - Dark mode & customization
- **Accessibility** - A11y features
- **CLI Reference** - Command documentation
- **Customization** - How to modify components

### Animation Pages (`/animation/*`)
- **Framer Motion** - Integration guide with live examples
- **GSAP** - Alternative animation library
- **Examples** - Animation patterns and best practices

## 🎨 Theming

### Dark Mode
The site supports system-preferred and manual dark mode toggle:

```tsx
// Theme is managed by next-themes
import { useTheme } from 'next-themes'

const { theme, setTheme } = useTheme()
```

### Customizing Colors
Edit `tailwind.config.js` to customize colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your brand colors
      },
    },
  },
}
```

## 📦 Components Included

All components from the main library:

- Alert
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- Dropdown
- Input
- Progress
- Radio
- Select
- Skeleton
- Slider
- Switch
- Tabs
- Textarea
- Toast
- Tooltip
- Toggle

## 🔧 Development

### Adding a New Component Page

1. Create the page file:
```bash
mkdir -p app/components/your-component
touch app/components/your-component/page.tsx
```

2. Use this template:
```tsx
'use client'

import { CodeBlock } from '../../../components/code-block'
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/card/card'
import { YourComponent } from '../../../../components/your-component/your-component'

export default function YourComponentPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1>Your Component</h1>
      {/* Installation, usage, examples, API reference */}
    </div>
  )
}
```

3. Add to sidebar navigation in `components/sidebar.tsx`

### Adding a Documentation Page

1. Create page in `app/docs/your-page/page.tsx`
2. Follow the same structure as existing docs
3. Add to sidebar navigation

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repo to Vercel dashboard
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Static Export

```bash
# Add to next.config.js
output: 'export'

# Build
npm run build

# Deploy the 'out' directory
```

## 📱 Responsive Design

The site is fully responsive:
- Mobile: Single column, hamburger menu
- Tablet: Sidebar navigation
- Desktop: Full layout with sidebar

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader tested
- Focus indicators
- Semantic HTML
- ARIA labels where needed

## 🎯 Performance

- Next.js 14 App Router
- Server Components where possible
- Optimized images
- Code splitting
- Fast page loads

## 📖 Learn More

- [Annocraft UI Documentation](../docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © 2024 Annocraft UI
