import type { Metadata } from 'next'
import { Radio_Canada } from 'next/font/google'
import './globals.css'

import HeaderBar from './components/HeaderBar'
import Footer from './components/Footer'

const radioCanada = Radio_Canada({ subsets: ['latin'] })

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
      <body className={radioCanada.className}>
        <HeaderBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
