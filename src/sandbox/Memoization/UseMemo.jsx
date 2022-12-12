import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const UseMemo = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(0);

  const incrementAge = () => setAge(age + 1);
  const incrementHeight = () => setHeight(height + 1);

  const slowFunction = () => {
    for (let i = 0; i < 2_000_000_000; i++) {}
    return age * 2;
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: 350, mt: 2 }}>
        <Box>
          <Typography align="center">Height: {height}</Typography>
          <Typography align="center">Age multiple: {slowFunction()}</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Button variant="outlined" onClick={incrementAge}>
              age
            </Button>
            <Button variant="outlined" onClick={incrementHeight}>
              height
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UseMemo;

// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import { useState, useMemo } from "react";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";

// const UseMemo = () => {
//   const [age, setAge] = useState(1);
//   const [height, setHeight] = useState(0);

//   const incrementAge = () => setAge(age + 1);
//   const incrementHeight = () => setHeight(height + 1);

//   const slowFunction = useMemo(() => {
//     for (let i = 0; i < 2_000_000_000; i++) {}
//     return age * 2;
//   }, [age]);

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Paper sx={{ width: 350, mt: 2 }}>
//         <Box>
//           <Typography align="center">Height: {height}</Typography>
//           <Typography align="center">Age multiple: {slowFunction}</Typography>

//           <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
//             <Button variant="outlined" onClick={incrementAge}>
//               age
//             </Button>
//             <Button variant="outlined" onClick={incrementHeight}>
//               height
//             </Button>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default UseMemo;
