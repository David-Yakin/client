import { useContext } from "react";
import { ThemeContext } from "./../ThemeProvider";

const Three = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={
        theme
          ? { backgroundColor: "#000", color: "#e3f2fd" }
          : { backgroundColor: "#e3f2fd", color: "#000" }
      }>
      in Three
    </div>
  );
};

export default Three;
