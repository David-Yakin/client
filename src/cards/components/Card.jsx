import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea } from "@mui/material";

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image="assets/images/business-card-top-image.jpg"
          alt="Paella dish"
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            Card Title
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}>
            Business card subtitle
          </Typography>
          <hr />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 2 }}>
            <strong>Phone: </strong> 050-000000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Address: </strong> shinkin 24 tel-aviv
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Card Number: </strong> 1000000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ paddingTop: 0 }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
