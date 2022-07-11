import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gradientbg from "./components/gradientbg/Gradientbg";
//import Home from "./components/home/Home";
import BoxShadow from "./components/boxShadow/BoxShadow";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <h3 className="app-name">Color Design Hub</h3>
      <Link to="/"><button className="btn-nav">Home</button></Link>
      <Link to="/gradientbg"><button className="btn-nav">Gradient Background</button></Link>
      <Link to="/boxshadow"><button className="btn-nav">Soon...</button></Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Gradientbg />} />
        <Route path="gradientbg" element={<Gradientbg />} />
        <Route path="boxshadow" element={<BoxShadow />} />
      </Routes>
    </div>
  );
}

export default App;
