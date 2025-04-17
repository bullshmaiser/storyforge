'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={89} height={135} />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className={`space-x-6 lg:flex ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
          <Link href="/create" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Create a Book</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4">
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
          <Link href="/create" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Create a Book</Link>
        </div>
      )}
    </header>
  )
}
