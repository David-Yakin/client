import { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import initialCreateCardForm from "../helpers/initialForms/initialCreateCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { useParams } from "react-router-dom";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import normalizeCard from "./../helpers/normalization/normalizeCard";

const EditCardPage = () => {
  const { handleUpdateCard, handleGetCard, card } = useCards();

  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(initialCreateCardForm, cardSchema, () =>
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    })
  );

  useEffect(() => {
    handleGetCard(id).then(data => {
      if (user._id !== data.user_id) navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
    });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

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
        title="Edit card">
        <Input
          name="title"
          label="title"
          error={value.errors.title}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="subtitle"
          label="subtitle"
          error={value.errors.subtitle}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="description"
          label="description"
          error={value.errors.description}
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
          name="webUrl"
          label="web"
          error={value.errors.webUrl}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
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
          name="country"
          label="country"
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
          label="houseNumber"
          type="number"
          error={value.errors.houseNumber}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="zip"
          label="zip"
          type="number"
          error={value.errors.zip}
          handleChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
      </Form>
    </Container>
  );
};

export default EditCardPage;
