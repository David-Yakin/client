import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import { Box } from "@mui/material";

const FormTest = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  const schema = {
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: "Pleas enter a valid mail" })
      .required(),

    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({
        message:
          "The password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
      })
      .required(),
  };

  const INITIAL_FORM = { email: "", password: "" };

  const { data, errors, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Form
        onSubmit={rest.onSubmit}
        handleReset={rest.handleReset}
        errors={errors}
        validateForm={rest.validateForm}
        styles={{ maxWidth: "450px" }}
        title="sign in">
        <Input
          label="email"
          name="email"
          type="email"
          error={errors.email}
          required={true}
          handleChange={rest.handleChange}
          data={data}
        />
        <Input
          label="password"
          name="password"
          type="password"
          error={errors.password}
          required={true}
          handleChange={rest.handleChange}
          data={data}
          //   sm={6}
        />
      </Form>
    </Box>
  );
};

export default FormTest;
