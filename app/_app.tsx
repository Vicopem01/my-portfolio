import { ThemeContext } from "@/context";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let storedTheme;
  if (typeof window !== "undefined") {
    storedTheme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(storedTheme || "dark");

  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeContext.Provider>
  );
};

export default MyApp;
