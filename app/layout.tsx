"use client";

import "./globals.css";
import Dock from "@/components/Dock/dock";
import { ThemeContext } from "@/context";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Clarity from "@microsoft/clarity";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
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
  let storedTheme;
  if (typeof window !== "undefined") {
    storedTheme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(storedTheme || "dark");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <title>Victor O ~ Software Developer</title>
        <meta
          name="description"
          content="Full stack developer ~ Web and blockchain security enthusiast"
        />
      </head>
      <body
        className={`${montserrat.className} m-horizontal transition-300 relative min-h-screen bg-white dark:bg-black dark:text-white text-black`}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
          <Dock />
        </ThemeContext.Provider>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
