// import React from "react";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

/********* basic TextField **********/
// const MuiTextField = () => {
//   return (
//     <Grid container spacing={1} mt={2}>
//       <Grid item>
//         <TextField label="test" />
//       </Grid>
//     </Grid>
//   );
// };

/********* TextField variants **********/
// const MuiTextField = () => {
//   return (
//     <Grid container spacing={1} mt={2}>
//       <Grid item>
//         <TextField label="outlined" variant="outlined" />
//       </Grid>
//       <Grid item>
//         <TextField label="filled" variant="filled" />
//       </Grid>
//       <Grid item>
//         <TextField label="standard" variant="standard" />
//       </Grid>
//     </Grid>
//   );
// };

/********* TextField size **********/
// const MuiTextField = () => {
//   return (
//     <Grid container spacing={1} mt={2}>
//       <Grid item>
//         <TextField label="small" size="small" />
//       </Grid>
//       <Grid item>
//         <TextField label="outlined" />
//       </Grid>
//     </Grid>
//   );
// };

/********* TextField colors **********/
// צריך להיכנס לאינפוט כדי לראות את הצבע

// const MuiTextField = () => {
//   return (
//     <Grid container spacing={1} mt={2}>
//       <Grid item>
//         <TextField label="primary" color="primary" />
//       </Grid>
//       <Grid item>
//         <TextField label="error" color="error" />
//       </Grid>
//       <Grid item>
//         <TextField label="warning" color="warning" />
//       </Grid>
//       <Grid item>
//         <TextField label="info" color="info" />
//       </Grid>
//       <Grid item>
//         <TextField label="secondary" color="secondary" />
//       </Grid>
//       <Grid item>
//         <TextField label="success" color="success" />
//       </Grid>
//     </Grid>
//   );
// };

/********* TextField validation **********/

// const MuiTextField = () => {
//   return (
//     <Box
//       component="form"
//       noValidate
//       autoComplete="off"
//       onSubmit={data => {
//         // e.preventDefault();
//         console.log(JSON.stringify(data));
//       }}>
//       <Grid container spacing={1} mt={2}>
//         <Grid item>
//           <TextField
//             label="required"
//             required
//             helperText="helperText"
//             fullWidth
//             name="one"
//           />
//         </Grid>
//         <Grid item>
//           <TextField
//             label="multiline"
//             multiline
//             rows={4}
//             fullWidth
//             name="two"
//           />
//         </Grid>
//       </Grid>
//       <Button variant="text" color="primary">
//         submit
//       </Button>
//     </Box>
//   );
// };

// export default MuiTextField;

import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const MuiTextField = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline />/ */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MuiTextField;
