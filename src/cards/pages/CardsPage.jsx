import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

const CardsPage = () => {
  const { isLoading, error, cards, handleGetCards, handleDeleteCard } =
    useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async cardId => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;

// import useCards from "./../hooks/useCards";
// import Container from "@mui/material/Container";
// import PageHeader from "../../components/PageHeader";
// import { useEffect } from "react";
// import CardsFeedback from "../components/CardsFeedback";

// const CardsPage = () => {
//   const { isLoading, error, filteredCards, handleGetCards, handleDeleteCard } =
//     useCards();

//   useEffect(() => {
//     handleGetCards();
//   }, []);

//   const onDeleteCard = async cardId => {
//     await handleDeleteCard(cardId);
//     await handleGetCards();
//   };

//   return (
//     <Container>
//       <PageHeader
//         title="Cards"
//         subtitle="Here you can find business cards from all categories"
//       />

//       <CardsFeedback
//         isLoading={isLoading}
//         error={error}
//         cards={filteredCards}
//         onDelete={onDeleteCard}
//       />
//     </Container>
//   );
// };

// export default CardsPage;
