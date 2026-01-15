import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { ParticlesBackground } from '../components/particles-background'

export const metadata: Metadata = {
  title: 'Annocraft UI - Production-Grade Design System',
  description: 'A civilization-grade, AI-native design system with 20+ accessible components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBackground />
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64 mt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
