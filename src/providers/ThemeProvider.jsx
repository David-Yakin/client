import React, { useState, useContext } from "react";
import { node } from "prop-types";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};
