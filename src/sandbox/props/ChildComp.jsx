import { Typography, Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

// const ChildComp = props => {
//   const { string } = props;

//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "primary.dark",
//           width: 100,
//           height: 100,
//           "&:hover": {
//             backgroundColor: "primary.main",
//             opacity: [0.9, 0.8, 0.7],
//           },
//         }}>
//         <Typography variant="body1"> child Component</Typography>
//         <Typography>{string}</Typography>
//       </Box>
//     </>
//   );
// };

// const ChildComp = ({ string }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "primary.dark",
//           width: 100,
//           height: 100,
//           "&:hover": {
//             backgroundColor: "primary.main",
//             opacity: [0.9, 0.8, 0.7],
//           },
//         }}>
//         <Typography variant="body1"> child Component</Typography>
//         <Typography>{string}</Typography>
//       </Box>
//     </>
//   );
// };

/***** receives object *****/
// const ChildComp = ({ name }) => {
//   const { first, last } = name;
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "primary.dark",
//           width: 100,
//           height: 100,
//           "&:hover": {
//             backgroundColor: "primary.main",
//             opacity: [0.9, 0.8, 0.7],
//           },
//         }}>
//         <Typography>{first}</Typography>
//         <Typography>{last}</Typography>
//       </Box>
//     </>
//   );
// };

/***** receives two props *****/
// const ChildComp = ({ first, last }) => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "primary.dark",
//           width: 100,
//           height: 100,
//           "&:hover": {
//             backgroundColor: "primary.main",
//             opacity: [0.9, 0.8, 0.7],
//           },
//         }}>
//         <Typography>{first}</Typography>
//         <Typography>{last}</Typography>
//       </Box>
//     </>
//   );
// };

const ChildComp = ({ handleClick }) => {
  return (
    <Button onClick={handleClick} variant="contained">
      click me!
    </Button>
  );
};

export default ChildComp;
