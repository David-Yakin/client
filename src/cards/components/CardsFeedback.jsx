import React from "react";
import { object, arrayOf, bool, string, func } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";

const CardsFeedback = ({ isLoading, error, cards, onDelete }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <div>
        {" "}
        Oops, there are no business cards in the database that match the
        parameters you entered
      </div>
    );
  if (cards) return <Cards cards={cards} onDelete={onDelete} />;
  return null;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  onDelete: func.isRequired,
};

export default CardsFeedback;
