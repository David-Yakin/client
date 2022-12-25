import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "./../routes/NavItem";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const Sandbox = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="props" to="props" color="black" />
          <NavItem label="events" to="events" color="black" />
          <NavItem label="loops" to="loops" color="black" />
          <NavItem label="propTypes" to="propTypes" color="black" />
          <NavItem label="custom hook" to="custom-hook" color="black" />
          <NavItem label="lifecycle" to="lifecycle" color="black" />
          <NavItem label="usecallback" to="use-callback" color="black" />
          <NavItem label="usememo" to="use-memo" color="black" />
          <NavItem label="fetch" to="fetch" color="black" />
          <NavItem label="axios" to="axios" color="black" />
          <NavItem label="useContext" to="use-context" color="black" />
          <NavItem label="snackbar" to="snackbar" color="black" />
          <NavItem label="textfield" to="text-field" color="black" />
          <NavItem label="form" to="form" color="black" />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};

export default Sandbox;
