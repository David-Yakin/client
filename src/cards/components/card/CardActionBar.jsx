import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { func, string } from "prop-types";
import CallIcon from "@mui/icons-material/Call";
import CardDeleteDialog from "./CardDeleteDialog";

const CardActionBar = ({ onDeleteCard, cardId }) => {
  const [isDialogOpen, setDialog] = useState(false);

  const handleDialog = term => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handelDeleteCard = () => {
    handleDialog();
    onDeleteCard(cardId);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleDialog("open")}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={() => console.log(`You edit card no: ${cardId}`)}>
            <ModeEditIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton
            aria-label="call business"
            onClick={() => console.log(`You called card no: ${cardId}`)}>
            <CallIcon />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={() => console.log(`You Liked card no: ${cardId}`)}>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handelDeleteCard}
      />
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDeleteCard: func.isRequired,
};

export default CardActionBar;
