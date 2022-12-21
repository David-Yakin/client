import MuiSnackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Button from "@mui/material/Button";

const Snackbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Snackbar
      </Button>

      <MuiSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        onClose={() => setOpen(prev => !prev)}
        autoHideDuration={3000}
        message="In Snackbar"
      />
    </>
  );
};

/********* with Alert inside *********/
// import Alert from "@mui/material/Alert";

// const Snackbar = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <>
//       <Button variant="outlined" onClick={() => setOpen(true)}>
//         Open Snackbar
//       </Button>

//       <MuiSnackbar
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isOpen}
//         onClose={() => setOpen(prev => !prev)}
//         autoHideDuration={3000}>
//         <Alert severity="success" variant="filled">
//           in success alert
//         </Alert>
//       </MuiSnackbar>
//     </>
//   );
// };

export default Snackbar;
