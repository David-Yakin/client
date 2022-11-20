import React from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const CardActionBar = ({ handleCardDelete, bizNumber }) => {
  return (
    <CardActions
      disableSpacing
      sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleCardDelete(bizNumber)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={() => console.log(`You edit card no: ${bizNumber}`)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <IconButton
        aria-label="add to favorites"
        onClick={() => console.log(`You Liked card no: ${bizNumber}`)}>
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  );
};

export default CardActionBar;
