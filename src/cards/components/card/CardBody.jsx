import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import cardType from "../../models/types/cardType";

const CardBody = ({ card }) => {
  const {
    title,
    subtitle,
    phone,
    address: { street, houseNumber, city },
    bizNumber,
  } = card;
  return (
    <>
      <CardContent>
        <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />

        <Divider />

        <Box mt={1}>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone: </strong> {phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Address: </strong> {street} {houseNumber} {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Card Number: </strong> {bizNumber}
          </Typography>
        </Box>
      </CardContent>
    </>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
