import { node } from "prop-types";
import Box from "@mui/material/Box";

const Main = ({ children }) => {
  return (
    <Box sx={{ minHeight: "85vh", backgroundColor: "#e3f2fd" }}>{children}</Box>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
