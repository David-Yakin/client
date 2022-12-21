import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchBar } from "./SearchBar";
import { NavBarMenu } from "./NavBarMenu";
import { useState } from "react";
import NavItem from "../../../routes/NavItem";
import ROUTES from "./../../../routes/routesModel";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../providers/ThemeProvider";

export const RightNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const user = true;
  const user = false;
  const handleCloseMenu = () => setAnchorEl(null);

  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && (
          <Box>
            <NavItem label="signup" to={ROUTES.SIGNUP} />
            <NavItem label="login" to={ROUTES.LOGIN} />
          </Box>
        )}

        {user && (
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
              onClick={e => setAnchorEl(e.target)}>
              <Avatar alt="Bird" src="/assets/images/avatar.png" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
        <IconButton
          onClick={e => setAnchorEl(e.target)}
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <NavBarMenu
        isMenuOpen={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onCloseMenu={handleCloseMenu}
        user={user}
      />
    </>
  );
};
