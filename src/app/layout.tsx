import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '工具箱',
  description: '工具箱',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className='dark'>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
