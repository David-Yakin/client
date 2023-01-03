import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "./../../routes/routesModel";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import useUsers from "./../hooks/useUsers";
import initialSignupForm from "./../helpers/initialForms/initialSignupForm";
import { useUser } from "../providers/UserProvider";
import signupSchema from "../models/joi-schema/signupSchema";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const SignupPage = () => {
  const { handleSignup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  const { user } = useUser();
  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Form
        onSubmit={rest.onSubmit}
        handleReset={rest.handleReset}
        errors={value.errors}
        validateForm={rest.validateForm}
        styles={{ maxWidth: "800px" }}
        title="register">
        <Input
          name="firstName"
          label="first name"
          error={value.errors.firstName}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="middleName"
          label="middle name"
          error={value.errors.middleName}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="lastName"
          label="last name"
          error={value.errors.lastName}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="phone"
          label="phone"
          type="phone"
          error={value.errors.phone}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="email"
          label="email"
          type="email"
          error={value.errors.email}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="password"
          label="password"
          type="password"
          error={value.errors.password}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="imageUrl"
          label="image url"
          error={value.errors.imageUrl}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="imageAlt"
          label="image alt"
          error={value.errors.imageAlt}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="state"
          label="state"
          error={value.errors.state}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          label="country"
          name="country"
          error={value.errors.country}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="city"
          label="city"
          error={value.errors.city}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="street"
          label="street"
          error={value.errors.street}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="houseNumber"
          label="house Number"
          type="number"
          error={value.errors.houseNumber}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="zip"
          label="zip"
          error={value.errors.zip}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Grid item>
          <FormControlLabel
            onChange={e => {
              rest.setData({ ...value.data, isBusiness: !!e.target.checked });
            }}
            name="isBusiness"
            control={<Checkbox value={value.data.isBusiness} color="primary" />}
            label="Signup as business"
          />
        </Grid>
      </Form>
    </Container>
  );
};

export default SignupPage;
