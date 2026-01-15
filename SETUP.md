# Setup Guide - Annocraft UI Preview Site

Complete guide to get the documentation site running locally.

## Prerequisites

- Node.js 16+ installed
- npm or yarn
- Basic knowledge of React/Next.js

## Step-by-Step Setup

### 1. Navigate to Preview Directory

```bash
cd preview
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14
- React 18
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- next-themes (for dark mode)
- TypeScript

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:3000**

### 4. What You'll See

#### Homepage (`/`)
- Hero section with "Build Beautiful UIs, Faster"
- Feature cards (Semantic Design, Accessible, Dark Mode, etc.)
- Quick code example
- Grid of all 20 components
- Call-to-action

#### Navigation
- **Header** - Logo, nav links, theme toggle, GitHub link
- **Sidebar** - Organized navigation:
  - Getting Started (Introduction, Installation, Quick Start, Theming)
  - Components (All 20 components)
  - Animation (Framer Motion, GSAP, Examples)
  - Resources (Accessibility, CLI, Customization)

#### Features
- ✅ Dark/Light mode toggle (moon/sun icon in header)
- ✅ Code blocks with copy-to-clipboard
- ✅ Live component demonstrations
- ✅ Fully responsive design
- ✅ Keyboard accessible

## Available Pages

### Documentation
- `/` - Homepage
- `/docs/installation` - Installation guide
- `/docs/quick-start` - Quick start tutorial
- `/docs/theming` - Theming and dark mode guide

### Components
- `/components/button` - Button documentation
- `/components/alert` - Alert documentation
- `/components/badge` - Badge documentation
- `/components/card` - Card documentation
- `/components/checkbox` - Checkbox documentation
- More component pages follow the same pattern

### Animation
- `/animation/framer-motion` - Framer Motion integration guide with live demos

## How to Use

### 1. Browse Components

Click any component in the sidebar or homepage grid:

```
http://localhost:3000/components/button
```

You'll see:
- Installation command
- Basic usage example
- Multiple interactive examples
- Code snippets with copy buttons
- API reference table
- Accessibility notes

### 2. Copy Code

Every code block has a copy button (📋 icon):
1. Click the button
2. Checkmark appears (✓)
3. Code is in your clipboard
4. Paste into your project

### 3. Toggle Theme

Click the theme toggle in the header:
- 🌙 = Currently light mode, click for dark
- ☀️ = Currently dark mode, click for light

All components adapt automatically!

### 4. Try Interactive Demos

Component pages have live demos:
- Click buttons to see loading states
- Open dialogs
- Type in inputs
- See animations in action

## Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your brand colors
        blue: {
          600: '#your-color',
        },
      },
    },
  },
}
```

### Add a Component Page

1. Create file:
```bash
mkdir -p app/components/my-component
touch app/components/my-component/page.tsx
```

2. Copy template from existing component page

3. Add to `components/sidebar.tsx`:
```tsx
{ title: 'My Component', href: '/components/my-component' }
```

### Modify Navigation

Edit `preview/components/sidebar.tsx` to add/remove/reorder navigation items.

## Troubleshooting

### Port 3000 in Use

```bash
# Option 1: Kill the process
lsof -ti:3000 | xargs kill

# Option 2: Use different port
npm run dev -- -p 3001
```

### Styles Not Loading

1. Ensure Tailwind config includes correct content paths
2. Restart dev server
3. Clear `.next` cache:
```bash
rm -rf .next
npm run dev
```

### Components Not Found

1. Check that component files exist in `../components/`
2. Verify import paths in component pages
3. Run `npm install` again

### Dark Mode Not Working

1. Ensure `next-themes` is installed
2. Check `ThemeProvider` is in `app/layout.tsx`
3. Verify `suppressHydrationWarning` on `<html>` tag

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start

# Or export static site
npm run build && npm run export
```

## Deploy

### Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

### Custom Server

```bash
npm run build
npm start
```

## Project Structure

```
preview/
├── app/                    # Next.js app routes
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── components/         # Component documentation pages
│   ├── docs/               # Documentation pages
│   └── animation/          # Animation guides
├── components/             # Preview app UI components
│   ├── header.tsx          # Top navigation
│   ├── sidebar.tsx         # Side navigation
│   ├── theme-provider.tsx  # Dark mode provider
│   ├── theme-toggle.tsx    # Theme switcher button
│   └── code-block.tsx      # Code display with copy
├── public/                 # Static files
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Component Import Pattern

Components are imported from the parent `components/` directory:

```tsx
// In preview/app/components/button/page.tsx
import { Button } from '../../../../components/button/button'
```

This works because:
1. TypeScript is configured with path mapping
2. Components live in `../components/` (one level up from preview)

## Next Steps

1. **Explore all pages** - Click through sidebar navigation
2. **Try dark mode** - Toggle and see all components adapt
3. **Copy some code** - Use copy buttons on code blocks
4. **View animations** - Check Framer Motion page
5. **Customize** - Change colors in Tailwind config

## Need Help?

- Check component source in `components/` directory
- Read the component `.meta.ts` files for specifications
- View examples in preview pages
- Check console for errors

## Features to Explore

✅ **Dark Mode** - Fully functional theme switching
✅ **Code Copy** - Every code block has copy button
✅ **Live Demos** - Interactive component examples
✅ **API Tables** - Complete prop documentation
✅ **Navigation** - Sidebar + header navigation
✅ **Responsive** - Mobile, tablet, desktop layouts
✅ **Animations** - Framer Motion integration examples
✅ **Accessibility** - Keyboard navigation, screen reader support

Enjoy building with Annocraft UI! 🎨
