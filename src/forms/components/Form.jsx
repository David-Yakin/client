import React from "react";
import { node, func, string, number, object } from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Form = ({
  onSubmit,
  children,
  color,
  to,
  spacing,
  handleReset,
  validateForm,
  title,
  styles,
}) => {
  const navigate = useNavigate();
  const navigateTo = to => navigate(to);

  return (
    <Box
      color={color}
      sx={{ ...styles, mt: 2, p: { xs: 0, sm: 2 } }}
      component="form"
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate>
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>
      <Grid container spacing={1} my={2} direction="row">
        <Grid item xs={12} sm={6}>
          <FormButton
            text="cancel"
            color="error"
            component="div"
            variant="outlined"
            handleClick={() => navigateTo(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            text="reset"
            variant="outlined"
            component="div"
            handleClick={handleReset}
          />
        </Grid>
        <Grid item xs={12}>
          <FormButton
            text="Submit"
            handleClick={onSubmit}
            disabled={!!validateForm()}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  children: node.isRequired,
  onSubmit: func.isRequired,
  color: string.isRequired,
  to: string.isRequired,
  spacing: number.isRequired,
  handleReset: func.isRequired,
  validateForm: func.isRequired,
  title: string.isRequired,
  styles: object.isRequired,
};

Form.defaultProps = {
  color: "inherit",
  to: "/",
  spacing: 1,
  title: "",
  styles: {},
};

export default React.memo(Form);
