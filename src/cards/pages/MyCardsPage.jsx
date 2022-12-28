import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import Cards from "./../components/Cards";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const MyCardsPage = () => {
  const { isLoading, error, cards, handleGetMyCards } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.CARDS);
    else handleGetMyCards();
  }, [user]);

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

export default MyCardsPage;
