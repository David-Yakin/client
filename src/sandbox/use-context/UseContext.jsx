import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const UseContext = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="exe one" to="exe-one" color="black" />
          <NavItem label="exe two" to="exe-two" color="black" />
        </Toolbar>
      </AppBar>

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default UseContext;
