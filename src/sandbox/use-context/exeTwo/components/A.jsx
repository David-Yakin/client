import React from "react";
import B from "./B";
import { NameProvider } from "../NameProvider";

const A = () => {
  return (
    <>
      <NameProvider>
        <B />
      </NameProvider>
    </>
  );
};

export default A;
