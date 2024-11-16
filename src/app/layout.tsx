import type { Metadata } from "next";
import "@src/app/globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ostapuk - Fullstack Developer | Portfolio",
  description:
    "Explore Ostapuk's portfolio showcasing web development projects, skills, and experience. A Fullstack Developer focused on creating high-quality web applications, with expertise in JavaScript, React, Node.js, Next.js, and more.",
  keywords: [
    "Ostapuk",
    "Fullstack Developer",
    "Web Developer",
    "Freelance Developer",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Tech Portfolio",
    "Freelance Web Development",
    "Web Applications",
    "Web Design",
    "Frontend Developer",
    "Backend Developer",
    "Web Development Projects",
    "Freelance Fullstack Developer",
    "Fullstack JavaScript Developer",
    "Fullstack Development",
    // Ukrainian Keywords for Local SEO
    "фулстек розробник",
    "веб-розробник",
    "верста фріланс",
    "JavaScript розробник",
    "React розробник",
    "Node.js розробник",
    "Next.js розробник",
    "розробка веб-додатків",
    "фронтенд розробка",
    "бекенд розробка",
    "портфоліо розробника",
    "фріланс веб-розробка",
    "веб-додатки",
    "веб-дизайн",
    "фронтенд розробник",
    "бекенд розробник",
    "проекти веб-розробки",

    // Russian Keywords for Local SEO
    "фулстек разработчик",
    "веб-разработчик",

    // Russian Keywords for Local SEO
    "фулстек разработчик",
    "веб-разработчик",
    "верстка фриланс",

    "фриланс розробник",
    "JavaScript розробник",
    "React розробник",
    "Node.js розробник",
    "веб-дизайн",
    "розробка веб-додатків",
    "повний стек розробка",
    "фриланс веб-розробка",
  ],
  authors: [{ name: "Ostapuk Oleksandr" }],
  robots: "index, follow",
  icons: "favicon.ico",
  openGraph: {
    type: "website",
    url: "https://ostapuk.tech",
    title: "Ostapuk - Fullstack Developer | Portfolio",
    description:
      "Explore Ostapuk's portfolio showcasing web development projects, skills, and experience. A Fullstack Developer focused on creating high-quality web applications, specializing in JavaScript, React, Node.js, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dzivbyc4z/image/upload/v1728663650/avatar_wfztoa.jpg",
        width: 1200,
        height: 630,
        alt: "Ostapuk Oleksandr - Остапук Олександр Portfolio",
      },
    ],
  },
  other: {
    freelancehunt: "04a600f4ed399fa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
