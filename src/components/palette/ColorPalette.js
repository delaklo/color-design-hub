import React from "react";
import "./Palette.css";
import "../../App.css";
import Palette from "./Palette";
import Carousel from "./Carousel";

const ColorPalette = ()=>{
    return(
        <div>
            <div className="main">              
        <h1>Newest Color Combinations</h1>
        <Carousel>
        <Palette color1="#c03221" color2="#f2d0a4" color3="#545e75"
         color4="#3f826d" color5="#f7f7ff" color6="#D61C4E"/>
        <Palette color1="#FFF9CA" color2="#E7F6F2" color3="#B2A4FF"
         color4="#2C3333" color5="#A5C9CA" color6="#FFB4B4"/>
        <Palette color1="#F7EDDB" color2="#DAE2B6" color3="#DFE8CC"
         color4="#CCD6A6" color5="#F5EDDC" color6="#DEE5D0"/>
         </Carousel>
    </div>
</div>
    )
}

export default ColorPalette;