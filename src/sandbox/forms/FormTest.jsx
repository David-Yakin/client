import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import { Container } from "@mui/material";

const FormTest = () => {
  const handleSubmit = data => {
    console.log(data);
  };

  const schema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };

  const INITIAL_FORM = { first: "", last: "" };

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);

  return (
    <Container
      sx={{
        marginTop: 8,
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
        title="enter name">
        <Input
          label="first"
          name="first"
          type="first"
          error={value.errors.first}
          handleChange={rest.handleChange}
          data={value.data}
        />
        <Input
          label="last"
          name="last"
          type="last"
          error={value.errors.last}
          handleChange={rest.handleChange}
          data={value.data}
        />
      </Form>
    </Container>
  );
};

export default React.memo(FormTest);
