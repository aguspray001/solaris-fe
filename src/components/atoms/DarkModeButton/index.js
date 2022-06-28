import React, { useState, useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";

const DarkModeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const isDark = () =>
    (localStorage && localStorage.theme === "dark") ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const getTheme = (isDark) => (isDark ? "dark" : "light");

  const themeToggle = () => {
    localStorage.setItem("theme", getTheme(!darkTheme));
    if (typeof window !== "undefined") {
      const memoTheme = localStorage.getItem("theme");

      const html = document.querySelector("html");
      if (memoTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
    setDarkTheme(!darkTheme);
    // document.querySelector("html").classList.toggle("dark");
  };

  useEffect(() => {
    setDarkTheme(isDark())
  }, []);

  return (
    <div
      className="p-1 bg-white border-2 rounded-md flex justify-center items-center shadow-md"
      onClick={themeToggle}
    >
      <span>
        {darkTheme ? (
          <FiMoon size={20} />
        ) : (
          <BsFillSunFill color="orange" size={20} />
        )}
      </span>
    </div>
  );
};

export default DarkModeButton;
