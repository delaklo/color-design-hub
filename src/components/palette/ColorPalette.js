import React from "react";
import "./Palette.css";
import "../../App.css";
import Palette from "./Palette";
import Carousel from "./Carousel";
import {num1, num2, num3, num4, num5, num6 } from './ColorConst.js';

const ColorPalette = ()=>{

    const nums = [num1, num2, num3, num4, num5, num6];

    return(
        <div>
            <div className="main">              
        <h2>Newest Color Combinations</h2>
        <h3>Click on the moon to change background color</h3>
        <Carousel>
            {nums.map(el =>{
                return(
                    <Palette color1={el.color1} color2={el.color2} color3={el.color3}
                    color4={el.color4} color5={el.color5} color6={el.color6} />
                )
            })}
         </Carousel>
    </div>
</div>
    )
}

export default ColorPalette;