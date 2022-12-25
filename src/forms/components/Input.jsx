import React from "react";
import { string, bool, object, func } from "prop-types";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../../utils/algoMethods";
import Grid from "@mui/material/Grid";

const Input = ({
  label,
  name,
  required,
  type,
  handleChange,
  error,
  variant,
  data,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        type={type}
        id={name}
        name={name}
        label={makeFirstLetterCapital(label)}
        required={required}
        fullWidth
        autoComplete="off"
        helperText={error}
        error={Boolean(error)}
        onChange={handleChange}
        value={data[name] ? data[name] : ""}
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  handleChange: func.isRequired,
  variant: string,
  data: object,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);
