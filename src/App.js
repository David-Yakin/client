import "./App.css";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <h1> app works!</h1>
      <Button
        variant="outlined"
        startIcon={<Add />}
        sx={{
          margin: 2,
        }}>
        Outlined
      </Button>
    </div>
  );
}

export default App;
