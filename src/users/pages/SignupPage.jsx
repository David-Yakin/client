import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "./../../routes/routesModel";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";

const SignupPage = () => {
  const user = null;
  //   const user = true;.

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Signup Page"
        subtitle="In order to register, fill out the form and click the submit button"
      />
    </Container>
  );
};

export default SignupPage;
