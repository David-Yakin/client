import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { Box } from "@mui/material";
import CardComponent from "../components/card/Card";
import useCards from "./../hooks/useCards";

const CardDetailsPage = () => {
  const { id } = useParams();

  const { handleGetCard, error, isLoading, card } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      />
      {card && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardComponent card={card} handleCardDelete={() => {}} />
        </Box>
      )}
    </Container>
  );
};

export default CardDetailsPage;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Container from "@mui/material/Container";
// import PageHeader from "../../components/PageHeader";
// import { getCard } from "../services/cardService";
// import { Box } from "@mui/material";
// import CardComponent from "../components/card/Card";
// import useCards from './../hooks/useCards';

// const CardDetailsPage = () => {
//   const { id } = useParams();
//   const [card, setCard] = useState(null);

//  const {handleGetCard, error, isLoading} = useCards()

//   useEffect(() => {
//     getCard(id)
//       .then(card => setCard(card))
//       .catch(error => console.log(error));
//   }, [id]);

//   return (
//     <Container maxWidth="lg">
//       <PageHeader
//         title="Business Details"
//         subtitle="Here you can find more details about the business"
//       />
//       {card && (
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <CardComponent card={card} handleCardDelete={() => {}} />
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default CardDetailsPage;
