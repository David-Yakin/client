import React from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";

const CardDetailsPage = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      />
      <div>Details of card: {id}</div>
    </Container>
  );
};

export default CardDetailsPage;
