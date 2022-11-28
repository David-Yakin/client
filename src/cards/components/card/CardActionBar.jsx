import React from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { func, number } from "prop-types";
import CallIcon from "@mui/icons-material/Call";

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

      <Box>
        <IconButton
          aria-label="call business"
          onClick={() => console.log(`You called card no: ${bizNumber}`)}>
          <CallIcon />
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={() => console.log(`You Liked card no: ${bizNumber}`)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

CardActionBar.propTypes = {
  bizNumber: number.isRequired,
  handleCardDelete: func.isRequired,
};

export default CardActionBar;
