'use client'

import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="hero bg-cover bg-center relative w-full h-screen" style={{ backgroundImage: 'url(/hero-background.svg)' }}>
      {/* Контейнер для текста */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 py-16 sm:px-16 sm:py-32">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4 text-[#db564a]">
          Create unique personalized books for anyone!
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-900">
          Upload photos, craft a storyline, and our AI will transform them into a stunning illustrated book tailored to your ideas and wishes.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
          Create a Book
        </button>
      </div>
    </section>
  );
};

export default Hero;
