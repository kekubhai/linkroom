import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

interface MyThemeProviderProps {
  children: ReactNode
}

export default function MyThemeProvider({ children }: MyThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
