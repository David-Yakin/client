import React, { useState, useEffect } from "react";
import { node } from "prop-types";

const NameContext = React.createContext(null);
// NameContext.displayName = "ProviderName";

export const NameProvider = ({ children }) => {
  const [name, setName] = useState();

  useEffect(() => {
    setName("david");
  }, []);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = React.useContext(NameContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

NameProvider.propTypes = {
  children: node.isRequired,
};
