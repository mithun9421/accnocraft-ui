# 🎨 Annocraft UI

> A production-grade, AI-native design system with 20+ accessible components. Built with React, TypeScript, and Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com/)

## ✨ Features

- 🎯 **Semantic, Intent-Based APIs** - Express purpose, not just appearance
- ♿ **Accessible by Default** - WCAG 2.1 AA compliant with full keyboard navigation
- 🌙 **Dark Mode Ready** - Beautiful themes with smooth transitions
- 📦 **Copy & Paste** - You own the code. No runtime dependencies
- 🎭 **Animation Ready** - Framer Motion and GSAP integration
- 🤖 **AI-Native** - Built with Model Context Protocol (MCP) support
- 🔧 **Fully Customizable** - Built with Tailwind CSS
- 📱 **Responsive** - Mobile-first design approach

## 🧩 Components (20+)

**Forms & Inputs**
- Button, Input, Textarea, Checkbox, Radio, Select, Slider, Switch

**Layout & Structure**
- Card, Dialog, Dropdown, Tabs

**Feedback & Status**
- Alert, Badge, Toast, Tooltip, Progress, Skeleton

**Data Display**
- Avatar, Toggle

## 🚀 Quick Start

```bash
# Install a component
npx annocraft-ui add button

# Use it in your app
import { Button } from "@/components/button/button"

export default function App() {
  return (
    <Button intent="primaryAction">
      Get Started
    </Button>
  )
}
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/annocraft-ui.git

# Install dependencies
cd annocraft-ui
npm install

# Run documentation site
cd preview
npm install
npm run dev
```

Visit `http://localhost:3000` to see the documentation.

## 🎨 Design Philosophy

**Semantic Over Appearance**
```tsx
// ❌ Don't do this
<Button color="red">Delete</Button>

// ✅ Do this instead
<Button intent="destructiveAction">Delete</Button>
```

## 📚 Documentation

Full documentation with live examples, code snippets, and API references available at the documentation site.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible primitives
- **Next.js 14** - Documentation site
- **Framer Motion** - Animations

## 📄 License

MIT

---

**Built with ❤️ using intent-based design principles**
