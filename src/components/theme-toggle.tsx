"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      className="border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "Light mode" : "Dark mode"}
    </Button>
  );
}
