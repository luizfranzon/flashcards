import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/sonner"
import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CardDataProvider } from '@/context/CardDataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlashCards » luizfranzon.dev',
  description: 'An easy way to create and use Flash cards.',
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
          <CardDataProvider>
            <div className="relative">
              <Header />
              {children}
              <Footer />
            </div>
          </CardDataProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
