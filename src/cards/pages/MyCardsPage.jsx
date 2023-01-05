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
import CardsFeedback from "../components/CardsFeedback";

const MyCardsPage = () => {
  const { isLoading, error, cards, handleGetMyCards, handleDeleteCard } =
    useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(ROUTES.CARDS);
    else handleGetMyCards();
  }, [user]);

  const onDeleteCard = async cardId => {
    await handleDeleteCard(cardId);
    await handleGetMyCards();
  };

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />{" "}
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
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default MyCardsPage;
