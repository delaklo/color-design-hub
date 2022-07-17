import React from "react";
import "./Palette.css";
import "../../App.css";
import Palette from "./Palette";

const ColorPalette = ()=>{
    return(
        <div>
            <div className="main">              
        <h1>Newest Color Palettes</h1>
        <Palette color1="blue" color2={"purple"} color3={"black"} color4={"yellow"} color5={"red"} color6={"green"}/>
        <Palette />
    </div>
</div>
    )
}

export default ColorPalette;