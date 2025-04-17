import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: "400", // или другие веса, которые вам нужны
  subsets: ["latin"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  weight: "400", // или другие веса, которые вам нужны
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "StoryForge - Create Personalized Books",
  description: "Create unique personalized books with AI - upload photos, craft a story, and generate stunning illustrated books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
