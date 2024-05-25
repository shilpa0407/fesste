import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Tile from "./Tile";
import Form from "./Form"; // Import the component for another page
import data from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Tile" element={<Tile item={data[0]} />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
