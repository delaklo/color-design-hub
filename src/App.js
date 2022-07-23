import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gradientbg from "./components/gradientbg/Gradientbg";
//import Home from "./components/home/Home";
import ColorPalette from "./components/palette/ColorPalette";
import Footer from "./components/footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
      <h3 className="app-name">Color Design Hub</h3>
      <Link to="/"><button className="btn-nav">Home</button></Link>
      <Link to="/gradientbg"><button className="btn-nav">Gradient Background</button></Link>
      <Link to="/palettes"><button className="btn-nav">Color Palette</button></Link>
      <a href="https://github.com/delaklo/color-design-hub"><button className="btn-nav">GitHub</button></a>
      </nav>
      
      <Routes>
        <Route path="/" element={<Gradientbg />} />
        <Route path="gradientbg" element={<Gradientbg />} />
        <Route path="palettes" element={<ColorPalette />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
