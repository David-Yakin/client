import React from "react";
import { string, bool } from "prop-types";
import Button from "@mui/material/Button";

const FormButton = ({
  text,
  color,
  variant,
  component,
  handleClick,
  disabled,
  size,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      component={component}
      onClick={handleClick}
      disabled={disabled}
      fullWidth
      size={size}>
      {text}
    </Button>
  );
};

FormButton.propTypes = {
  text: string.isRequired,
  color: string.isRequired,
  variant: string.isRequired,
  component: string.isRequired,
  disabled: bool.isRequired,
  size: string.isRequired,
};

FormButton.defaultProps = {
  color: "primary",
  variant: "contained",
  component: "button",
  disabled: false,
  size: "medium",
};

export default React.memo(FormButton);
