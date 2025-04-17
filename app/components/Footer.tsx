'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={44} height={66} />
          <span className="text-lg font-semibold">StoryForge</span>
        </div>
        <nav className="flex gap-8">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <p className="text-sm text-gray-400">© 2025 StoryForge. All rights reserved.</p>
      </div>
    </footer>
  );
}
