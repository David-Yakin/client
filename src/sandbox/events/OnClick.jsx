import React from "react";
import Button from "@mui/material/Button";

const OnClick = () => {
  const handleClick = e => console.log(e.target);

  return (
    <Button onClick={handleClick} variant="outlined" sx={{ m: 2 }}>
      Click
    </Button>
  );
};

export default OnClick;
