import type { Metadata } from "next";
import "@src/app/globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Portfolio | Ostapuk",
  icons: "icon.png",
  description:
    "Ostapuk's Portfolio Website - Fullstack Developer. Explore my projects, skills, and experience in web development.",
  other: {
    name: "freelancehunt",
    content: "04a600f4ed399fa",
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
