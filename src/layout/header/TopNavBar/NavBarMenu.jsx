import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

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
          <MenuItem
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={onCloseMenu}>
            Login
          </MenuItem>
          <MenuItem
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={onCloseMenu}>
            SignUp
          </MenuItem>
        </Box>
      )}

      {user && (
        <Box>
          <MenuItem onClick={onCloseMenu}>Logout</MenuItem>
          <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
        </Box>
      )}
    </Menu>
  );
};
