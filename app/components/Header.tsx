'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-300 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={89} height={135} />
        </Link>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black font-medium">Pricing</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</Link>
          <Link href="/create" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">Create a Book</Link>
        </nav>
      </div>
    </header>
  )
}
