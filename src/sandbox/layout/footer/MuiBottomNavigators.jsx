import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// const MuiBottomNavigators = () => {
//   return (
//     <div style={{ marginTop: 8 }}>
//       <div>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
//         consequuntur est, recusandae facere odit ea repudiandae assumenda
//         necessitatibus repellat debitis dolorem. Possimus qui animi impedit.
//       </div>

//       <Paper sx={{ position: "sticky" }} elevation={4}>
//         <BottomNavigation>
//           <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
//           <BottomNavigationAction label="instagram" icon={<InstagramIcon />} />
//           <BottomNavigationAction label="twitter" icon={<TwitterIcon />} />
//         </BottomNavigation>
//       </Paper>
//     </div>
//   );
// };

const MuiBottomNavigators = () => {
  return (
    <div style={{ marginTop: 8 }}>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        consequuntur est, recusandae facere odit ea repudiandae assumenda
        necessitatibus repellat debitis dolorem. Possimus qui animi impedit.
      </div>

      <Paper sx={{ position: "sticky" }} elevation={4}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="instagram" icon={<InstagramIcon />} />
          <BottomNavigationAction label="twitter" icon={<TwitterIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default MuiBottomNavigators;
