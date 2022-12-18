// import { useState } from "react";
// import { getCards } from "./../services/cardService";

// const useCards = () => {
//   const [cards, setCards] = useState(null);
//   const [card, setCard] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleGetCards = async () => {
//     try {
//       setLoading(true);
//       const cards = await getCards();
//       setLoading(false);
//       setError(null);
//       setCards(cards);
//     } catch (error) {
//       setLoading(false);
//       setError(error);
//       setCards(null);
//     }
//   };

//   return {
//     card,
//     cards,
//     isLoading,
//     error,
//     handleGetCards,
//   };
// };

// export default useCards;

/********** adding requestStatus method **********/
// import { useState } from "react";
// import { getCards } from "./../services/cardService";

// const useCards = () => {
//   const [cards, setCards] = useState(null);
//   const [card, setCard] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const requestStatus = (loading, errorMessage, cards, card = null) => {
//     setLoading(loading);
//     setCards(cards);
//     setCard(card);
//     setError(errorMessage);
//   };

//   const handleGetCards = async () => {
//     try {
//       setLoading(true);
//       const cards = await getCards();
//       requestStatus(false, null, cards);
//     } catch (error) {
//       requestStatus(false, error, null);
//     }
//   };

//   return {
//     card,
//     cards,
//     isLoading,
//     error,
//     handleGetCards,
//   };
// };

// export default useCards;

/********** all CRUD functions **********/
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

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async cardFromClient => {
    try {
      setLoading(true);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
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
