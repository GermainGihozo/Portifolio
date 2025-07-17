import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import VerticalPortfolio from "./components/VerticalPortfolio";

function App() {
  return (
    <Router>
      <div className="font-Poppins">
        <VerticalPortfolio />
      </div>
    </Router>
  );
}

export default App;