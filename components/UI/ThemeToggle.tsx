"use client";

import { ThemeContext } from "@/context";
import { Moon, Sun } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme !== "light";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors hover:border-accent hover:text-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
