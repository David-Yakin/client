// import { func, string } from "prop-types";
// import Button from "@mui/material/Button";

// const ButtonComp = ({ handleClick, children }) => {
//   console.log(`Rendering Button: ${children}`);
//   return (
//     <Button variant="outlined" onClick={handleClick} color="primary">
//       {children}
//     </Button>
//   );
// };

// ButtonComp.propTypes = {
//   handleClick: func.isRequired,
//   children: string.isRequired,
// };

// export default ButtonComp;

import { memo } from "react";
import { func, string } from "prop-types";
import Button from "@mui/material/Button";

const ButtonComp = ({ handleClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return (
    <Button variant="outlined" onClick={handleClick} color="primary">
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  handleClick: func.isRequired,
  children: string.isRequired,
};

export default memo(ButtonComp);
