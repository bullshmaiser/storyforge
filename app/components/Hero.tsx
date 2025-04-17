// components/Hero.tsx
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
<h1>Create unique personalized books for anyone!</h1>
<p>
Upload photos, craft a storyline, and our AI will transform them into a stunning illustrated book tailored to your ideas and wishes.
</p>
<button>Create a Book</button>
      </div>
      <div className="hero-image">
        <Image
          src="/hero-background.svg" 
          alt="Logo"
          width={460} 
          height={312} 
        />
      </div>
    </section>
  );
};

export default Hero;

