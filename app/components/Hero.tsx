// components/Hero.tsx
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Создайте уникальные персонализированные книги для вашего ребенка!</h1>
        <p>
          Загрузите фотографии, создайте сюжет, и наш ИИ превратит их в
          потрясающую иллюстрированную книгу, которая будет персонализирована
          под ваши пожелания.
        </p>
        <button>Создать книгу</button>
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

