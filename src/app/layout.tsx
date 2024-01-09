import { ThemeProvider } from '@/components/theme-provider'
import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'a',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
