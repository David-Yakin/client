import React from "react";
import Container from "@mui/material/Container";
import Cards from "./../components/Cards";
import PageHeader from "../../components/PageHeader";

const CardsPage = () => {
  const cards = [
    {
      _id: "63765801e20ed868a69a62c4",
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
        zip: 1234,
      },
      bizNumber: 1_000_000,
      user_id: "63765801e20ed868a69a62c2",
    },
    {
      _id: "63765801e20ed868a69a62c4",
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
        zip: 1234,
      },
      bizNumber: 2_000_000,
      user_id: "63765801e20ed868a69a62c2",
    },
    {
      _id: "63765801e20ed868a69a62c4",
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
        zip: 1234,
      },
      bizNumber: 3_000_000,
      user_id: "63765801e20ed868a69a62c2",
    },
  ];

  return (
    <Container sx={{ mt: 2 }}>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />

      <Cards cards={cards} />
    </Container>
  );
};

export default CardsPage;
