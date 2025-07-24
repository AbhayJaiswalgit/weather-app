import React from "react";
import "./ThemeToggle.css";
import { useState } from "react";
import { useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round">
        <span className="icon">{theme === "dark" ? "🌙" : "☀️"}</span>
      </span>
    </label>
  );
}

export default ThemeToggle;
