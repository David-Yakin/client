import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

const CardsPage = () => {
  const { isLoading, error, filteredCards, handleGetCards, handleDeleteCard } =
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
        cards={filteredCards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;

// import useCards from "./../hooks/useCards";
// import Container from "@mui/material/Container";
// import Cards from "./../components/Cards";
// import PageHeader from "../../components/PageHeader";
// import { useEffect } from "react";
// import Error from "../../components/Error";
// import Spinner from "../../components/Spinner";

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

//   const hasCards = !!filteredCards?.length;
//   return (
//     <Container>
//       <PageHeader
//         title="Cards"
//         subtitle="Here you can find business cards from all categories"
//       />
//       {isLoading && <Spinner />}
//       {error && <Error errorMessage={error} />}
//       {!hasCards && (
//         <p>
//           Oops, there are no business cards in the database that match the
//           parameters you entered
//         </p>
//       )}
//       {hasCards && <Cards cards={filteredCards} onDelete={onDeleteCard} />}
//     </Container>
//   );
// };

// export default CardsPage;
