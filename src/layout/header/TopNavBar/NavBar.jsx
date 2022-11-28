import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { LeftNavigation } from "./LeftNavigation";
import { RightNavigation } from "./RightNavigation";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />

        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <SearchBar />
        </Box>

        <RightNavigation />
      </Toolbar>
    </AppBar>
  );
};
