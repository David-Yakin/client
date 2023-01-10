import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "./../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";

const CardComponent = ({ card, onDeleteCard }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        onDeleteCard={onDeleteCard}
        cardId={card._id}
        cardUserId={card.user_id}
      />
    </Card>
  );
};

CardComponent.propTypes = {
  card: cardType.isRequired,
  onDeleteCard: func.isRequired,
};

export default CardComponent;
