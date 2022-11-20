import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const CardComponent = () => {
  const card = {
    title: "title",
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
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar />
    </Card>
  );
};

export default CardComponent;
