import { Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({ cards }) => {
  const handleCardDelete = bizNumber =>
    console.log(`You deleted card no: ${bizNumber}`);

  if (!cards.length)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  return (
    <Grid container spacing={2}>
      {cards.map((card, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <CardComponent card={card} handleCardDelete={handleCardDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
