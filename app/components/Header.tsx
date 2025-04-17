'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full border-b border-gray-300 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-1 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.webp" alt="Logo" width={71} height={108} className="h-auto w-[60px]" />
        </Link>

        {/* Мобильная кнопка */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-black focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Навигация для десктопа */}
        <nav className="space-x-6 hidden md:flex items-center">
          <a href="#features" className="text-gray-700 hover:text-black font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-black font-medium">Pricing</a>
          <a href="#howitworks" className="text-gray-700 hover:text-black font-medium">How it works</a>
          <Link 
            href="/create"
            className="bg-black text-white px-4 py-2 rounded transition-colors"
            style={{ transition: 'all 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#db574c'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'black'}
          >
            Create a Book
          </Link>
        </nav>
      </div>

      {/* Мобильное меню */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-70 z-50 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="w-2/3 bg-white h-full p-6 space-y-6 relative">
          <button 
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-700 text-3xl"
          >
            &times;
          </button>
          <a href="#features" onClick={toggleMenu} className="block text-gray-700 hover:text-black font-medium">Features</a>
          <a href="#pricing" onClick={toggleMenu} className="block text-gray-700 hover:text-black font-medium">Pricing</a>
          <a href="#howitworks" onClick={toggleMenu} className="block text-gray-700 hover:text-black font-medium">How it works</a>
          <Link 
            href="/create"
            className="inline-block bg-black text-white px-4 py-2 rounded transition-colors"
            style={{ transition: 'all 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#db574c'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'black'}
          >
            Create a Book
          </Link>
        </div>
      </div>
    </header>
  )
}
``
