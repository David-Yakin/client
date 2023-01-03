import React from "react";
import useForm from "./../../forms/hooks/useForm";
import initialCreateCardForm from "./../helpers/initialForms/initialCreateCardForm";

const CreateCardPage = () => {
  useForm(initialCreateCardForm);
  return <div>CreateCardPage</div>;
};

export default CreateCardPage;
