import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import { NavBarMenu } from "./NavBarMenu";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";

const RightNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useUser();
  const handleCloseMenu = () => setAnchorEl(null);

  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged setAnchorEl={setAnchorEl} />}
      </Box>

      <MoreButton setAnchorEl={setAnchorEl} />

      <NavBarMenu
        isMenuOpen={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onCloseMenu={handleCloseMenu}
      />
    </>
  );
};

export default RightNavBar;
