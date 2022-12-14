import React from "react";
import GettingContext from "./GettingContext";

export const UserFirstContext = React.createContext();
export const UserLastContext = React.createContext();

const PassingName = () => {
  return (
    <UserFirstContext.Provider value={"david"}>
      <UserLastContext.Provider value={"yakin"}>
        <GettingContext />
      </UserLastContext.Provider>
    </UserFirstContext.Provider>
  );
};

export default PassingName;
