import { useState, useEffect, useCallback } from "react";
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
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useUser } from "../../users/providers/UserProvider";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCards, setFilterCards] = useState(null);
  const [searchParams] = useSearchParams();

  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  // להוסיף
  useEffect(() => {
    if (cards) {
      setFilterCards(cards.filter(card => card.title.includes(query)));
    }
  }, [cards, query]);

  useAxios();
  const snack = useSnackbar();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setCards(cards);
    setCard(card);
    setError(errorMessage);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      return cards;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = useCallback(async cardId => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      // return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await handleGetCards();
      const favCards = cards.filter(
        card => !!card.likes.find(id => id === user._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);

  const handleCreateCard = useCallback(
    async cardFromClient => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleDeleteCard = useCallback(
    async cardId => {
      try {
        setLoading(true);
        await deleteCard(cardId);
        snack("success", "The business card has been successfully deleted");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setLoading(true);
        const card = await editCard(cardId, cardFromClient);
        requestStatus(false, null, null, card);
        console.log(card);
        snack("success", "The business card has been successfully updated");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleLikeCard = useCallback(async cardId => {
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  return {
    cards,
    card,
    filteredCards,
    isLoading,
    error,
    handleGetCard,
    handleDeleteCard,
    handleGetCards,
    handleCreateCard,
    handleGetMyCards,
    handleUpdateCard,
    handleLikeCard,
    setCards,
    handleGetFavCards,
  };
};

export default useCards;
