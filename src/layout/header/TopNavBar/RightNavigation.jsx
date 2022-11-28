import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchBar } from "./SearchBar";
import { NavBarMenu } from "./NavBarMenu";
import { useState } from "react";

export const RightNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = true;
  // const user = false;
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />
        {!user && (
          <Box>
            <Button color="inherit">
              <Typography>Signin</Typography>
            </Button>
            <Button color="inherit">
              <Typography>Login</Typography>
            </Button>
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
