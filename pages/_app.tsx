"use client";
import { ThemeContext } from "@/context";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Dock from "@/components/Dock/dock";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="font-gilroymedium">
        <Component {...pageProps} />
      </div>
      <div>{Dock()}</div>
      <Analytics />
    </ThemeContext.Provider>
  );
};

export default MyApp;
