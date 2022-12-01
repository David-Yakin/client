import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import NavBarLink from "./../../../routes/NavBarLink";
import ROUTES from "./../../../routes/routesModel";

export const NavBarMenu = ({ isMenuOpen, anchorEl, onCloseMenu, user }) => {
  return (
    <Menu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}>
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}>
              Login
            </MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.SIGNUP} color="#000">
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}>
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}

      {user && (
        <Box>
          <MenuItem onClick={onCloseMenu}>Logout</MenuItem>

          <NavBarLink to={ROUTES.USER_PROFILE} color="#000">
            <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.EDIT_USER} color="#000">
            <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
          </NavBarLink>
        </Box>
      )}
    </Menu>
  );
};
