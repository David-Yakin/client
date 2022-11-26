import "./App.css";
import CardsPage from "./cards/pages/CardsPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <CardsPage />
      </Layout>
    </div>
  );
}

export default App;

// import Sandbox from "./sandbox/Sandbox";
/* <Sandbox /> */
