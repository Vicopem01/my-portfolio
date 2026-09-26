"use client";

import "./globals.css";
import { ThemeContext } from "@/context";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Clarity from "@microsoft/clarity";
import ThemeToggle from "@/components/UI/ThemeToggle";
import CustomCursor from "@/components/UI/CustomCursor";

import { Oswald, Inter } from "next/font/google";

// const montserrat = Montserrat({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});
/**
 * setup for Microsoft Clarity
 * track user engagement across site
 * track user key engagement
 * track user page visits
 */
const projectId: string = process.env.NEXT_PUBLIC_CLARITY_ID || "";
Clarity.init(projectId);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Victor O ~ Software Developer</title>
        <meta
          name="description"
          content="Victor Ogunjobi — Software Engineer, Full-Stack Developer & Solutions Architect based in Toronto, Canada."
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} font-sans transition-300 relative min-h-screen bg-white dark:bg-black dark:text-white text-black`}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CustomCursor />
          <ThemeToggle />
          {children}
        </ThemeContext.Provider>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
