import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonComp from "./ButtonComp";

const UseCallBackComp = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(0);

  const incrementAge = () => setAge(age + 1);
  const incrementHeight = () => setHeight(height + 1);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: 350, mt: 2 }}>
        <Box>
          <Typography align="center">Age: {age}</Typography>
          <Typography align="center">Height: {height}</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <ButtonComp handleClick={incrementAge}>age</ButtonComp>
            <ButtonComp handleClick={incrementHeight}>height</ButtonComp>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UseCallBackComp;

// import { useState, useCallback } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import ButtonComp from "./ButtonComp";

// const UseCallBackComp = () => {
//   const [age, setAge] = useState(1);
//   const [height, setHeight] = useState(0);

//   const incrementAge = useCallback(() => {
//     setAge(age + 1);
//   }, [age]);

//   const incrementHeight = useCallback(() => {
//     setHeight(height + 1);
//   }, [height]);

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Paper sx={{ width: 350, mt: 2 }}>
//         <Box>
//           <Typography align="center">Age: {age}</Typography>
//           <Typography align="center">Height: {height}</Typography>

//           <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
//             <ButtonComp handleClick={incrementAge}>age</ButtonComp>
//             <ButtonComp handleClick={incrementHeight}>height</ButtonComp>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default UseCallBackComp;
