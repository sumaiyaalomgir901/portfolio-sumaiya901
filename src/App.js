import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";
import About from "./Pages/AboutPage/About/About";
import Project from "./Pages/Projects/Project/Project";
import Contact from "./Pages/AboutPage/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
