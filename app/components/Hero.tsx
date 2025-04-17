'use client'

import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: 'url(/hero-background.svg)' }}>  
    
      {/* Hero Block */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-8 py-16 sm:px-16 sm:py-32">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 text-black">
          Create unique personalized books for anyone!
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-black">
          Upload photos, craft a storyline, and our AI will transform them into a stunning illustrated book tailored to your ideas and wishes.
        </p>
        <button className="bg-[#dc574b] text-white py-2 px-6 rounded hover:bg-[#b84237] transition-colors">
          Create a Book
        </button>
      </div>

      {/* Pricing Block */}
      <div className="bg-white py-16 px-8 sm:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Affordable Pricing for Endless Storytelling Possibilities
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Choose the perfect plan for your creativity. Pay per book or unlock unlimited access.
        </p>
        <Link href="/pricing" className="inline-block bg-[#dc574b] text-white py-2 px-6 rounded hover:bg-[#b84237] transition">
          View Pricing
        </Link>
      </div>

    </section>
  );
};

export default Hero;
