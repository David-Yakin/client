import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

const AxiosComp = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(({ data }) => {
        console.log(data);
        setJoke(data.value);
      })
      .catch(error => console.log(error));
  }, []);

  if (joke)
    return (
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <div>{joke}</div>
      </Container>
    );

  return null;
};

export default AxiosComp;
