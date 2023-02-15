import React, {useEffect, useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gradientbg from "./components/gradientbg/Gradientbg";
import Home from "./components/home/Home";
import ColorPalette from "./components/palette/ColorPalette";
import Buttons from "./components/Buttons/Buttons";
import Footer from "./components/footer/Footer";
import './App.css';
import UsefulResources from "./components/UsefulResources/UsefulResources";

function App() {


  const [burgerOpen, setBurgerOpen] = useState(false);


  return (
    <div className="App">
      <div className='full-nav'>
      <h3 className="app-name">Color Design Hub</h3>
      <nav className="inline-nav">
      <Link to="/"><button className="btn-nav">Home</button></Link>
      <Link to="/gradientbg"><button className="btn-nav">Gradient Background</button></Link>
      <Link to="/palettes"><button className="btn-nav">Color Palette</button></Link>
      <Link to="/buttons"><button className="btn-nav">Gradient Buttons</button></Link>
      <Link to="/uresources"><button className="btn-nav">Useful Resources</button></Link>
      </nav>

      <div className="nav__burg" onClick={()=>setBurgerOpen(!burgerOpen)}>
        <div className=" burger burger1"></div>
        <div className=" burger burger2"></div>
        <div className=" burger burger3"></div>
      </div>
      
      </div>

      {burgerOpen && (
              <div className="burgerVisible">
              
                <Link to="/" className="menu-items" onClick={()=>setBurgerOpen(!burgerOpen)}>
                  <span className="burger__link">Home</span>
                </Link>
                <Link to="/gradientbg" className="menu-items" onClick={()=>setBurgerOpen(!burgerOpen)}>
                <span className="burger__link">Gradient Background</span>
                </Link>
                <Link to="/palettes" className="menu-items" onClick={()=>setBurgerOpen(!burgerOpen)}>
                <span className="burger__link">Color Palette</span>
                </Link>
                <Link to="/buttons" className="menu-items" onClick={()=>setBurgerOpen(!burgerOpen)}>
                <span className="burger__link">Gradient Buttons</span>
                </Link>
                <Link to="/uresources" className="menu-items" onClick={()=>setBurgerOpen(!burgerOpen)}>
                <span className="burger__link">Useful Resources</span>
                </Link>
             
            </div>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gradientbg" element={<Gradientbg />} />
        <Route path="palettes" element={<ColorPalette />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="uresources" element={<UsefulResources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
