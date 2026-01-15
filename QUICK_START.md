# Quick Start Guide - See Your Components!

This guide will help you preview the Annocraft UI components in a live browser.

## Step 1: Navigate to the Preview App

```bash
cd preview
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Radix UI primitives
- Other dependencies

## Step 3: Start the Development Server

```bash
npm run dev
```

You should see output like:

```
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

## Step 4: Open in Your Browser

Open [http://localhost:3000](http://localhost:3000)

## What You'll See

The preview page includes **live, interactive demos** of all components:

### Button Component Demos

✨ **Intent Variants**
- Primary Action (blue button)
- Secondary Action (gray button)
- Destructive Action (red button)

✨ **Size Variants**
- Small, Medium, Large

✨ **Emphasis Variants**
- High (solid fill)
- Medium (outlined)
- Low (ghost/subtle)

✨ **State Variants**
- Default (interactive)
- Disabled (grayed out)
- Loading (with spinner)

✨ **With Icons**
- Icon before text
- Icon after text
- Icon-only buttons

✨ **Interactive Demo**
- Click "Save Changes" to see loading state in action!

### Dialog Component Demos

✨ **Basic Dialog**
- Click to open modal
- Press Escape to close
- Automatic focus management

✨ **Destructive Action Dialog**
- Confirmation dialog for dangerous actions
- Proper ARIA labels

✨ **Dialog Sizes**
- Small, Medium, Large dialogs

### Input Component Demos

✨ **Basic Inputs**
- Text, email, password types
- Required field indicators

✨ **Error States**
- Red border and error message

✨ **Helper Text**
- Subtle guidance text below input

✨ **Input Sizes**
- Small, Medium, Large

✨ **With Icons**
- Search icon, email suffix icons

✨ **Complete Form**
- Full sign-up form example

## Try These Interactions

### Keyboard Navigation
1. Press `Tab` to move between buttons
2. Press `Enter` or `Space` to click a button
3. Open a dialog and press `Escape` to close it
4. Notice the focus ring around focused elements

### Loading States
1. Click the "Save Changes" button
2. Watch it change to loading state for 2 seconds
3. See the spinner animation

### Dialog Interactions
1. Click "Delete Account"
2. Notice how focus moves to the dialog
3. Try tabbing through the dialog buttons
4. Press Escape or click outside to close

### Input Interactions
1. Type in the input fields
2. Notice the error state styling
3. Try the search input with icon

## Troubleshooting

### Port 3000 Already in Use

If you see "Port 3000 is already in use", either:

**Option 1:** Kill the process using port 3000
```bash
lsof -ti:3000 | xargs kill
```

**Option 2:** Use a different port
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001

### Module Not Found Errors

If you see import errors, make sure you're in the `preview` directory:

```bash
cd preview
npm install
```

### Tailwind Styles Not Loading

If components look unstyled:

1. Make sure `globals.css` imports Tailwind directives
2. Check that `tailwind.config.js` includes the correct content paths
3. Restart the dev server

## Next Steps

### Explore the Code

The preview app page is at:
```
preview/app/page.tsx
```

Open it to see how each component is used!

### Add More Components

When you create new components:

1. Import them in `preview/app/page.tsx`
2. Add a new section with demos
3. The page will hot-reload automatically

### Build for Production

To create a static build:

```bash
npm run build
npm start
```

Then deploy to Vercel, Netlify, or any static host.

## Component Examples from the Preview

Here are some code snippets you'll see working in the preview:

### Primary Action Button
```tsx
<Button intent="primaryAction">Save Changes</Button>
```

### Destructive Dialog
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button intent="destructiveAction">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Input with Error
```tsx
<Input
  label="Username"
  error="Username is already taken"
  defaultValue="johndoe"
/>
```

## Learn More

- [Component Documentation](docs/components/button.md)
- [Design Philosophy](docs/design-philosophy/README.md)
- [Accessibility Guide](docs/accessibility/README.md)

---

**Enjoy exploring Annocraft UI! 🎨**
