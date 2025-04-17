'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} />
        </Link>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
          <Link href="/create" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Create a Book</Link>
        </nav>
      </div>
    </header>
  )
}

