import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkModeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const darkState =
      (localStorage && localStorage.getItem("theme") === "dark") ||
      (!("theme" in localStorage) &&
        matchMedia("(prefers-color-scheme: dark)").matches);
    console.log("dark mode ", darkState)
    setDarkTheme(darkState);
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div
      className="p-1 bg-white border-2 rounded-md flex justify-center items-center shadow-md"
      onClick={themeToggle}
    >
      <span>
        {darkTheme ? (
          <BsFillMoonFill size={20} />
        ) : (
          <BsFillSunFill color="orange" size={20} />
        )}
      </span>
    </div>
  );
};

export default DarkModeButton;
