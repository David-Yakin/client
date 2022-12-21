import { useState } from "react";
import {
  getCards,
  getCard,
  deleteCard,
  createCard,
  editCard,
  getMyCards,
  changeLikeStatus,
} from "./../services/cardService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useAxios();
  const snack = useSnackbar();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setCards(cards);
    setCard(card);
    setError(errorMessage);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetCard = async cardId => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async cardFromClient => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async cardFromClient => {
    try {
      setLoading(true);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async cardId => {
    try {
      setLoading(true);
      const card = await deleteCard(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async cardId => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    card,
    cards,
    isLoading,
    error,
    handleGetCard,
    handleDeleteCard,
    handleGetCards,
    handleCreateCard,
    handleGetMyCards,
    handleUpdateCard,
    handleLikeCard,
  };
};

export default useCards;
