'use client'

import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="hero bg-cover bg-center relative w-full h-screen" style={{ backgroundImage: 'url(/hero-background.svg)' }}>  
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-16 sm:px-16 sm:py-32">
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
    </section>
  );
};

export default Hero;
