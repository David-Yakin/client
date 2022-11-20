import React from "react";
import { Box } from "@mui/material";

const Loops = () => {
  const arrayOfString = ["one", "two", "three"];
  return (
    <Box m={2}>
      {arrayOfString.map((item, index, array) => {
        console.log(array);
        return <div key={index}>item: {item}</div>;
      })}
    </Box>
  );
};

export default Loops;
