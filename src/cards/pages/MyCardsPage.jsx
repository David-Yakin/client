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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const MyCardsPage = () => {
  const { isLoading, error, cards, handleGetMyCards } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.CARDS);
    else handleGetMyCards();
  }, [user]);

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}>
          <AddIcon />
        </Fab>
      )}
      {cards && !cards.length && (
        <>
          <p>
            Oops, there are no business cards in the database that match the
            parameters you entered.
          </p>
          <p>
            You are welcome to click the plus button and create a new business
            card
          </p>
        </>
      )}
      {cards && !!cards.length && <Cards cards={cards} />}
    </Container>
  );
};

export default MyCardsPage;
