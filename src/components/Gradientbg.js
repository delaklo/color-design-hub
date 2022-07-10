import React, { useState } from "react";
import "../App.css"

const Gradientbg = ()=>{

const [color1, setColor1] = useState('#abb000');
const [color2, setColor2] = useState('#2d8bd2');
const cssOutput = `linear-gradient(${color1}, ${color2})`;

    return(
        <div id="gradient"
       style={{ background: cssOutput }}>
        <div className="container">
          <h1>Gradientiser</h1>
          <h2>CSS Gradient Background Generator</h2>
          <p>
            Choose the colors you want by cliking on the color picker tool, or to
            get random color click the button or reload the page. Copy the code and
            paste it in your CSS under body tag or any div tag.
          </p>
          <h3 className="lable">Color 1:</h3>
          <input
           type="color"
            name="color1"
            value={color1}
            onChange={event=> setColor1(event.target.value)}
            id="c1" 
            />
          <h3 className="lable">Color 2:</h3>
          <input type="color"
           name="color1"
           value={color2}
           onChange={event=> setColor2(event.target.value)}
           id="c1" 
    />
          <h3>{cssOutput}</h3>
    
          <div id="radioIn">
            <input type="radio" id="left" name="direction" value="left" />
            <label for="left">Right to Left</label>
            <input type="radio" id="right" name="direction" value="right" checked />
            <label for="right">Left to Right</label>
            <input type="radio" id="top" name="direction" value="top" />
            <label for="top">Bottom to Up</label>
            <input type="radio" id="bottom" name="direction" value="bottom" />
            <label for="bottom">Top to Bottom</label>
          </div>
          <br />
          <button id="random">Click to get a Random BG</button>
          <h2>CSS code for curent background 👇</h2>
          <h3 id="code"></h3>
        </div>
      </div>
    )
}

export default Gradientbg;