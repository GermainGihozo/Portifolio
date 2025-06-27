import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HorizontalPortfolio from "./components/HorizontalPortfolio";

function App() {
  return (
    <Router>
      <div className="font-Poppins">
        <HorizontalPortfolio />
      </div>
    </Router>
  );
}

export default App;