import React from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardActionBar = () => {
  return (
    <CardActions disableSpacing sx={{ paddingTop: 0, justifyContent: "end" }}>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  );
};

export default CardActionBar;
