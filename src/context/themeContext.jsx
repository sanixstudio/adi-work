/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const themeMode = localStorage.getItem("theme");
  const isThemeDark = themeMode === "dark";
  const [isDark, setIsDark] = useState(isThemeDark);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
