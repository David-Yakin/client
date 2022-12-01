import React from "react";
import { Link } from "react-router-dom";
import { node, string } from "prop-types";

const NavBarLink = ({ to, color, children }) => {
  return (
    <Link to={to} style={{ color, textDecorationLine: "none" }}>
      {children}
    </Link>
  );
};

NavBarLink.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
  color: string.isRequired,
};

NavBarLink.defaultProps = {
  color: "#fff",
};

export default NavBarLink;
