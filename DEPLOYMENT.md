# Deployment Guide for Annocraft UI

This guide will help you deploy the Annocraft UI documentation site to the internet.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js applications and is free for personal projects.

### Step 1: Commit Your Code

```bash
# Make sure you're in the project root
cd /Users/mrbad/vibeprojects/annocraft-ui

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Annocraft UI with 20 components"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `annocraft-ui` (or any name you prefer)
3. Description: "Production-grade design system with 20+ accessible components"
4. Keep it Public (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (you already have these)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/annocraft-ui.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

**Option A: Using Vercel Website (Easiest)**

1. Go to https://vercel.com
2. Click "Sign Up" and sign in with your GitHub account
3. Click "Add New" → "Project"
4. Import your `annocraft-ui` repository
5. **IMPORTANT**: Set the Root Directory to `preview`
   - Click "Edit" next to Root Directory
   - Type: `preview`
6. Framework Preset should auto-detect as "Next.js"
7. Click "Deploy"
8. Wait 2-3 minutes for deployment to complete
9. Your site will be live at: `https://your-project-name.vercel.app`

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to preview directory
cd preview

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (choose your account)
# - Link to existing project? N
# - What's your project name? annocraft-ui
# - In which directory is your code located? ./
# - Want to override settings? N

# For production deployment
vercel --prod
```

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Option 2: Deploy to Netlify

### Step 1-3: Same as Vercel (Commit and Push to GitHub)

### Step 4: Deploy to Netlify

1. Go to https://netlify.com
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. **Build settings**:
   - Base directory: `preview`
   - Build command: `npm run build`
   - Publish directory: `preview/.next`
6. Click "Deploy site"
7. Your site will be live at: `https://random-name.netlify.app`

### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

---

## Option 3: Deploy to GitHub Pages (Static Export)

This requires exporting Next.js as a static site.

### Step 1: Configure Next.js for Static Export

Add to `preview/next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/annocraft-ui' : '',
}

module.exports = nextConfig
```

### Step 2: Add Deployment Script

Add to `preview/package.json` scripts:

```json
"scripts": {
  "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
}
```

### Step 3: Install gh-pages

```bash
cd preview
npm install --save-dev gh-pages
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` → `/ (root)`
5. Save

Your site will be at: `https://YOUR-USERNAME.github.io/annocraft-ui/`

---

## Environment Variables (if needed)

If you need environment variables:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development

### Netlify
1. Go to Site settings → Environment variables
2. Add your variables

---

## Continuous Deployment

Once connected to GitHub:
- **Vercel**: Every push to `main` auto-deploys to production
- **Netlify**: Every push to `main` auto-deploys
- Pull requests get preview deployments automatically

---

## Recommended: Vercel

**Why Vercel?**
- Made by Next.js creators
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free for personal projects
- Preview deployments for PRs
- Easy custom domains
- Best Next.js performance

---

## Troubleshooting

### Build Fails on Vercel/Netlify

1. Check the build logs
2. Common issues:
   - Missing dependencies: Run `npm install` in preview directory
   - TypeScript errors: Fix type errors
   - Environment variables: Add missing env vars

### Styling Issues

1. Make sure `darkMode: 'class'` is in `preview/tailwind.config.js`
2. Clear cache and redeploy

### 404 on Routes

- Next.js App Router should handle all routes automatically
- Make sure all component pages exist

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Dark mode toggle works
- [ ] All 20 component pages load
- [ ] Sidebar navigation works
- [ ] Code copy buttons work
- [ ] Particle background appears
- [ ] Mobile responsive
- [ ] Update GitHub repository description with live URL
- [ ] Add live URL to README.md

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment

Good luck with your deployment! 🚀
