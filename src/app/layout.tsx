import type { Metadata } from "next";
import "@src/app/globals.scss";
import { Roboto } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });



export const metadata = async (): Promise<Metadata> => {
  const locale = await getLocale(); // Get the current locale (en or uk)

  const commonKeywords = [
    "Fullstack Developer", "Web Developer", "Freelance Developer", "JavaScript", "React", "Node.js", "Next.js",
    "Fullstack Web Development", "Freelance Fullstack Developer", "Web Development Services", "Responsive Web Design",
    "Web Application Development", "Mobile Web Development", "Website Development", "Custom Web Development",
    "E-commerce Development", "UI/UX Design"
  ];

  const localizedMetadata = {
    en: {
      title: "Ostapuk - Fullstack Developer | Portfolio",
      description: "Explore Ostapuk's portfolio showcasing web development projects, skills, and experience. A Fullstack Developer focused on creating high-quality web applications, specializing in JavaScript, React, Node.js, and more.",
      keywords: [
        ...commonKeywords,
        "Ostapuk", "Ostapuk Developer", "Ostapuk Fullstack Developer", "Ostapuk Web Developer", "Fullstack Web Developer",
        "JavaScript Developer", "React Developer", "Node.js Developer", "Next.js Developer", "Frontend Developer",
        "Backend Developer", "Freelance Web Developer", "Freelance Fullstack Developer", "Software Engineer", "Web Application Developer",
        "Responsive Web Design", "Custom Web Development", "Web Development Projects", "UI/UX Developer", "Web Development Portfolio",
        "Hire Fullstack Developer", "Web Development Services", "Software Developer Portfolio", "Web Designer", "Cross-platform Development",
        "Website Design and Development", "Digital Transformation", "Web Development Expert"
      ],
      image: "/avatar.jpeg",
      url: "https://ostapuk.tech",
    },
    uk: {
      title: "Остапук - Фуллстак Розробник | Портфоліо",
      description: "Досліджуйте портфоліо Остапука, яке демонструє проекти веб-розробки, навички та досвід. Фуллстак розробник, орієнтований на створення високоякісних веб-додатків, з досвідом роботи з JavaScript, React, Node.js та іншими технологіями.",
      keywords: [
        ...commonKeywords,
        "Остапук", "Остапук Саша", "Саша Остапук", "Фріланс Розробник", "Найняти програміста", "Остапук Розробник",
        "Остапук Фуллстак Розробник", "Остапук Веб Розробник", "Фуллстак Веб Розробник", "JavaScript Розробник", "React Розробник",
        "Node.js Розробник", "Next.js Розробник", "Фронтенд Розробник", "Бекенд Розробник", "Розробка веб-сайтів",
        "Послуги веб-розробки", "Портфоліо розробника", "Фрілансер для створення веб-сайтів", "Створення веб-додатків",
        "Дизайн та розробка веб-сайтів", "Розробник на замовлення", "Розробка для малого бізнесу", "SEO оптимізація для вебсайтів",
        "Диджитал трансформація", "Портфоліо фуллстак розробника", "Розробка веб-рішень для бізнесу", "Фуллстак фріланс розробник"
      ],
      image: "/avatar.jpeg",
      url: "https://ostapuk.tech/uk",
    }
  };

  const currentMetadata = localizedMetadata[locale as keyof typeof localizedMetadata];

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: currentMetadata.url,
      title: currentMetadata.title,
      description: currentMetadata.description,
      images: [
        {
          url: currentMetadata.image,
          width: 1200,
          height: 630,
          alt: `Profile image of ${currentMetadata.title}`,
        },
      ],
    },
    other: {
      freelancehunt: "04a600f4ed399fa",
    },
  };
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={`${locale}`}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${roboto.className} bg-slate-50`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
