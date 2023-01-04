import { Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";
// import useCards from "./../hooks/useCards";

const Cards = ({ cards, onDelete }) => {
  if (!cards.length)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <CardComponent card={card} onDeleteCard={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
