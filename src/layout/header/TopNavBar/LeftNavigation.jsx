import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export const LeftNavigation = () => {
  return (
    <Box>
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

      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "fantasy",
        }}>
        BCard
      </Typography>

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Button color="inherit">
          <Typography>About</Typography>
        </Button>
      </Box>

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Button color="inherit">
          <Typography>My Cards</Typography>
        </Button>
      </Box>

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Button color="inherit">
          <Typography>Fav Cards</Typography>
        </Button>
      </Box>
    </Box>
  );
};
