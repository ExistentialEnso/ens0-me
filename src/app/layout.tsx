import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import HeaderBar from './components/HeaderBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thorne',
  description: 'Thorne is an accomplished coder, writer, gamer, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderBar />
        {children}
      </body>
    </html>
  )
}
