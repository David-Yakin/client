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
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({ onDeleteCard, cardId, cardUserId }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

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
          {user && (user.isAdmin || user._id === cardUserId) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}>
              <DeleteIcon />
            </IconButton>
          )}

          {user && user._id === cardUserId && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton
            aria-label="call business"
            onClick={() => console.log(`You called card no: ${cardId}`)}>
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton
              aria-label="add to favorites"
              onClick={() => console.log(`You Liked card no: ${cardId}`)}>
              <FavoriteIcon />
            </IconButton>
          )}
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
