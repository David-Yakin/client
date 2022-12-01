import React from "react";
import NavBarLink from "./../../../../routes/NavBarLink";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const LogoIcon = () => {
  return (
    <NavBarLink to="/">
      <IconButton
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu">
        <Avatar
          alt="Business card icon"
          src="/assets/images/business-card.png"
        />
      </IconButton>
    </NavBarLink>
  );
};

export default LogoIcon;
