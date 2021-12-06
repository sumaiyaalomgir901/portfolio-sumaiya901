import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
