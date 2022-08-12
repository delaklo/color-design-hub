import React from "react";
import "./Palette.css";
import "../../App.css";
import Palette from "./Palette";
import Carousel from "./Carousel";
import {num1, num2, num3 } from './ColorConst.js';

const ColorPalette = ()=>{

    const nums = [{num: num1}, {num: num2}, {num: num3}];

    return(
        <div>
            <div className="main">              
        <h1>Newest Color Combinations</h1>
        <Carousel>
            {nums.map(el =>{
                return(
                    <Palette color1={el.num.color1} color2={el.num.color2} color3={el.num.color3}
                    color4={el.num.color4} color5={el.num.color5} color6={el.num.color6} />
                )
            })}
         </Carousel>
    </div>
</div>
    )
}

export default ColorPalette;