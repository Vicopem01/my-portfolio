"use client";

import "./globals.css";
import Dock from "@/components/Dock/dock";
import { ThemeContext } from "@/context";
import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  let storedTheme;
  if (typeof window !== "undefined") {
    storedTheme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(storedTheme || "dark");

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.add("light");
    else document.documentElement.classList.remove("light");
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
      <body className="transition-300 relative m-0 min-h-screen dark:text-white text-black font-gilroymedium">
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
