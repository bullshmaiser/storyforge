'use client'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-10">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} StoryForge. All rights reserved.
      </div>
    </footer>
  )
}

