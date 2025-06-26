import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ModernPortfolio from "./components/ModernPortfolio";

function App() {
  return (
    <Router>
      <div className="font-Poppins">
        <ModernPortfolio />
      </div>
    </Router>
  );
}

export default App;