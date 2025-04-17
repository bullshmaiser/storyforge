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
          src="/logo.png" // Замените на путь к нужной картинке
          alt="Logo"
          width={500} // Подберите подходящие размеры
          height={300} // Подберите подходящие размеры
        />
      </div>
    </section>
  );
};

export default Hero;

