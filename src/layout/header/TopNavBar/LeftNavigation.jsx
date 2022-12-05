import React from "react";
import Box from "@mui/material/Box";
import Logo from "./Logo/Logo";
import LogoIcon from "./Logo/LogoIcon";
import ROUTES from "../../../routes/routesModel";
import NavItem from "../../../routes/NavItem";

export const LeftNavigation = () => {
  return (
    <Box>
      <LogoIcon />

      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT} />
        <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
        <NavItem label="sandbox" to="/sandbox" />
      </Box>
    </Box>
  );
};
