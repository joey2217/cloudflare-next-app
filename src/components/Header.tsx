import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="md:container flex items-center">
      <Link href="/" className="flex items-center gap-2 mr-auto">
        <Image src="/logo.png" alt="Logo" width={48} height={32} />
        <span>热 榜</span>
      </Link>
    </header>
  )
}

export default Header
