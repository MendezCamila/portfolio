import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import MetaUpdater from "./components/MetaUpdater";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Camila Mendez - Analista en sistemas",
  description: "Desarrolladora web y analista en sistemas con experiencia en proyectos de software y un enfoque en la mejora continua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Camila Mendez - AI Engineer & Data Scientist" />
        <link rel="icon" href="/grid-pattern.svg" />
        <meta name="keywords" content="AI, Machine Learning, Data Science, Data Engineering, Deep Learning" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white text-gray-800`}>
        <LanguageProvider>
          <MetaUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}