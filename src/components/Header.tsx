import React, { useState } from "react";
import { toggleTheme } from "../utils/theme";
import { SunMoon } from "lucide-react";

const Header: React.FC = () => {
  const Dark = document.documentElement.classList.contains("dark");
  const [isDark, setIsDark] = useState<boolean>(Dark);

  const toggleName = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="w-full p-4 md:p-6 md:px-16  dark:bg-Blue-900 bg-Grey-500 shadow">
      <nav className="flex items-center justify-between dark:text-White">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <button
          onClick={() => {
            toggleTheme();
            toggleName();
          }}
          className="cursor-pointer flex gap-2"
        >
          {/* icon */}
          <SunMoon />
          <span className="capitalize">{!isDark ? "dark" : "light"} mode</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
