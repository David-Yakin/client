import React, { useState, useContext, useCallback } from "react";
import { node } from "prop-types";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SnackbarContext = React.createContext(null);

export const SnackbarProvider = ({ children }) => {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackMessage, setSnackMessage] = useState("in snackbar!");
  const [snackVariant, setSnackVariant] = useState("filled");

  const setSnack = useCallback(
    (color, message, variant = "filled") => {
      setOpenSnack(true);
      setSnackColor(color);
      setSnackMessage(message);
      setSnackVariant(variant);
    },
    [setOpenSnack, setSnackColor, setSnackMessage, setSnackVariant]
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => setOpenSnack(prev => !prev)}
        autoHideDuration={6000}>
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
        </Alert>
      </Snackbar>

      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context)
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  return context;
};

SnackbarProvider.propTypes = {
  children: node.isRequired,
};
