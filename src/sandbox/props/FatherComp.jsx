import { Box, Typography } from "@mui/material";
import React from "react";
import ChildComp from "./ChildComp";

// const FatherComp = () => {
//   const string = "string from father";

//   return (
//     <>
//       <Typography variant="body1" m={2}>
//         {" "}
//         Father Component - passing string
//       </Typography>
//       <Box
//         sx={{
//           m: 2,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: 300,
//           height: 300,
//           backgroundColor: "secondary.dark",
//         }}>
//         <ChildComp string={string} />
//       </Box>
//     </>
//   );
// };

/***** sending object in props *****/
// const FatherComp = () => {
//   const name = { first: "david", last: "yakin" };

//   return (
//     <>
//       <Typography variant="body1" m={2}>
//         {" "}
//         Father Component - passing object
//       </Typography>
//       <Box
//         sx={{
//           m: 2,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: 300,
//           height: 300,
//           backgroundColor: "secondary.dark",
//         }}>
//         <ChildComp name={name} />
//       </Box>
//     </>
//   );
// };

/***** sending two props *****/
// const FatherComp = () => {
//   const name = { first: "david", last: "yakin" };

//   return (
//     <>
//       <Typography variant="body1" m={2}>
//         {" "}
//         Father Component - passing two props
//       </Typography>
//       <Box
//         sx={{
//           m: 2,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           width: 300,
//           height: 300,
//           backgroundColor: "secondary.dark",
//         }}>
//         <ChildComp first={name.first} last={name.last} />
//       </Box>
//     </>
//   );
// };

/**** passing function in props object *****/
const FatherComp = () => {
  const handleClick = () => console.log("you clicked!");

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
        backgroundColor: "secondary.dark",
      }}>
      <ChildComp handleClick={handleClick} />
    </Box>
  );
};

export default FatherComp;
