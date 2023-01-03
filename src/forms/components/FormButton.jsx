import React from "react";
import { string, bool, node } from "prop-types";
import Button from "@mui/material/Button";

const FormButton = ({
  node,
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
      {node}
    </Button>
  );
};

FormButton.propTypes = {
  node: node.isRequired,
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
