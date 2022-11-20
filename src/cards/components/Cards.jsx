import { Container, Stack } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";

const Cards = () => {
  return (
    <Container>
      <Stack
        gap={2}
        direction="row"
        my={2}
        flexWrap="wrap"
        justifyContent="center">
        <CardComponent />
      </Stack>
    </Container>
  );
};

export default Cards;
