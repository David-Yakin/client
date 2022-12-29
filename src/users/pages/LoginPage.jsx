import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import { Box } from "@mui/material";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import useUsers from "./../hooks/useUsers";

const LoginPage = () => {
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  return (
    <Box
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
        styles={{ maxWidth: "450px" }}
        title="login">
        <Input
          label="email"
          name="email"
          type="email"
          error={value.errors.email}
          handleChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="password"
          name="password"
          type="password"
          error={value.errors.password}
          handleChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Box>
  );
};

export default React.memo(LoginPage);
