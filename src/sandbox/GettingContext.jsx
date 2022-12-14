import React, { useContext } from "react";
import { UserLastContext, UserFirstContext } from "./PassingName";

const GettingContext = () => {
  let firstName = useContext(UserFirstContext);
  let lastName = useContext(UserLastContext);

  return (
    <div>
      my name is: {firstName} {lastName}
    </div>
  );
};

export default GettingContext;
