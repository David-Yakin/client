// import Container from "@mui/material/Container";
// import Cards from "./../components/Cards";
// import PageHeader from "../../components/PageHeader";
// import { useEffect, useState } from "react";
// import { getCards } from "./../services/cardService";
// import Error from "../../components/Error";
// import Spinner from "../../components/Spinner";

// const CardsPage = () => {
//   const [cards, setCards] = useState();
//   const [error, setError] = useState(null);
//   const [isPending, setPending] = useState(false);

//   useEffect(() => {
//     setPending(true);
//     getCards()
//       .then(data => {
//         setPending(false);
//         setCards(data);
//       })
//       .catch(error => {
//         setPending(false);
//         setError(error);
//       });
//   }, []);

//   return (
//     <Container>
//       <PageHeader
//         title="Cards"
//         subtitle="Here you can find business cards from all categories"
//       />
//       {isPending && <Spinner />}
//       {error && <Error errorMessage={error} />}
//       {cards && !cards.length &&
//       <p>Oops, there are no business cards in the database that match the parameters you entered</p>}
//       {cards && !!cards.length && <Cards cards={cards} />}
//     </Container>
//   );
// };

// export default CardsPage;

import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import Cards from "./../components/Cards";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";

const CardsPage = () => {
  const { isLoading, error, cards, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {cards && !cards.length && (
        <p>
          Oops, there are no business cards in the database that match the
          parameters you entered
        </p>
      )}
      {cards && !!cards.length && <Cards cards={cards} />}
    </Container>
  );
};

export default CardsPage;
