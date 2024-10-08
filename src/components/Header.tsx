import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <span className="text-2xl font-bold">工具箱</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
