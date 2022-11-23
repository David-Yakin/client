import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { func } from "prop-types";

const CardComponent = ({ card, handleCardDelete }) => {
  return (
    <Card sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        handleCardDelete={handleCardDelete}
        bizNumber={card.bizNumber}
      />
    </Card>
  );
};

CardComponent.propTypes = {
  card: cardType.isRequired,
  handleCardDelete: func.isRequired,
};

export default CardComponent;
