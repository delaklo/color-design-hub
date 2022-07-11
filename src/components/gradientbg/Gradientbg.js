import React, { useState } from "react";
import "./Gradientbg.css";
import "../../App.css";

const Gradientbg = ()=>{

const [color1, setColor1] = useState('#38acff');
const [color2, setColor2] = useState('#ffe224');
const [deg, setDeg] = useState(180);
const cssOutput = `linear-gradient(${deg}deg, ${color1}, ${color2})`;

    return(           
        <div className="main">
          <div className="gradient" style={{ background: cssOutput }}></div>
          <div className="content">
          <h2>CSS Gradient Background Generator</h2>
          <div className="pickers">
          <h3 className="lable">Color 1:</h3>
          <input
            type="color"
            name="color1"
            value={color1}
            onChange={event=> setColor1(event.target.value)}
            />
          <h3 className="lable">Color 2:</h3>
          <input type="color"
           name="color1"
           value={color2}
           onChange={event=> setColor2(event.target.value)}
    /></div>
    <h2>Choose a deg:</h2>
          <input type="range" className="range" min="0" max="360" step="1"
           value={deg} onChange={event=> setDeg(event.target.value)} /> 
          <h3>{cssOutput}</h3>
        </div>
        </div>
    )
}

export default Gradientbg;