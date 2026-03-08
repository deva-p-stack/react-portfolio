import { useState, useEffect } from "react";

import ThemeContext from "./ThemeContext";


export default function Theme({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // button logic
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}


    </ThemeContext.Provider>
  );
}

 