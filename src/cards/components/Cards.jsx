import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";

const Cards = () => {
  const cards = [
    {
      title: "first",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel-aviv",
        street: "Shinkin",
        houseNumber: 3,
        zip: "1234",
      },
      bizNumber: 1_000_000,
    },
    {
      title: "second",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel-aviv",
        street: "Shinkin",
        houseNumber: 3,
        zip: "1234",
      },
      bizNumber: 1_000_000,
    },
    {
      title: "third",
      subtitle: "subtitle",
      description: "testing 123",
      phone: "050-0000000",
      email: "test@gmail.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "Business card image",
      },
      address: {
        state: "",
        country: "country",
        city: "tel-aviv",
        street: "Shinkin",
        houseNumber: 3,
        zip: "1234",
      },
      bizNumber: 1_000_000,
    },
  ];
  // const cards = [];

  if (!cards.length)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  return (
    <Container>
      <Stack
        gap={2}
        direction="row"
        my={2}
        flexWrap="wrap"
        justifyContent="center">
        {cards.map((card, i) => (
          <CardComponent key={i} card={card} />
        ))}
      </Stack>
    </Container>
  );
};

export default Cards;
