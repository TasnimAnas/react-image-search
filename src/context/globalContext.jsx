import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState("Dog");

  const toggleTheme = () => {
    const newTheme = !isDark;
    localStorage.setItem("darkTheme", newTheme);
    setIsDark(newTheme);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme");
    if (storedDarkMode === null) {
      return setIsDark(prefersDarkMode);
    }
    return setIsDark(storedDarkMode === "true");
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
