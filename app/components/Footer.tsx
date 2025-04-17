'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a href="https://vercel.com/templates" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </div>
    </footer>
  );
}
