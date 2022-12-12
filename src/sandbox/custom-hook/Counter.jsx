import React from "react";
import useCounter from "./useCounter";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Counter = () => {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: 500, mt: 2 }}>
        <Box>
          <Typography align="center">Count: {count}</Typography>

          <Box>
            <Button onClick={increment} variant="outlined" sx={{ m: 2 }}>
              Increment
            </Button>
            <Button onClick={decrement} variant="outlined" sx={{ m: 2 }}>
              decrement
            </Button>
            <Button onClick={reset} variant="outlined" sx={{ m: 2 }}>
              reset
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Counter;
