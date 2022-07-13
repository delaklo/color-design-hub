import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gradientbg from "./components/gradientbg/Gradientbg";
//import Home from "./components/home/Home";
import Palette from "./components/palette/Palette";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <h3 className="app-name">Color Design Hub</h3>
      <Link to="/"><button className="btn-nav">Home</button></Link>
      <Link to="/gradientbg"><button className="btn-nav">Gradient Background</button></Link>
      <Link to="/palette"><button className="btn-nav">Color Palette</button></Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Gradientbg />} />
        <Route path="gradientbg" element={<Gradientbg />} />
        <Route path="palette" element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
