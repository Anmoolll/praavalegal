"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg dark:bg-white/10 dark:shadow-white/5"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <Sun className="h-5 w-5 text-amber-400" strokeWidth={2} />
      ) : (
        <Moon className="h-5 w-5 text-[#1e1b3a]" strokeWidth={2} />
      )}
    </button>
  );
}
