import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import ROUTES from "../../../../routes/routesModel";
import NavItem from "../../../../routes/NavItem";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT} />
        {user && user.isBusiness && (
          <>
            <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
          </>
        )}
        {user && user.isAdmin && <NavItem label="sandbox" to="/sandbox" />}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
