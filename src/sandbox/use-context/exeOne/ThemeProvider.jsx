import React, { useState } from "react";
import One from "./components/One";

export const ThemeContext = React.createContext();

const ThemeProvider = () => {
  const [isDark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={isDark}>
      <button
        onClick={() => {
          setDark(prev => !prev);
        }}>
        Toggle Theme
      </button>
      <br />
      <One />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
