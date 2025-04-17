'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* Logo + Copyright */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/logo.png" alt="StoryForge Logo" width={44} height={67} />
          </Link>
          <span className="text-sm text-gray-600">© 2025 StoryForge</span>
        </div>

        {/* Links + Instagram */}
        <div className="flex items-center space-x-6">
          <Link href="/terms" className="text-gray-600 hover:text-black text-sm">Terms of Service</Link>
          <Link href="/disclaimer" className="text-gray-600 hover:text-black text-sm">Disclaimer</Link>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-lg">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}
