import React from "react";
import "./Palette.css";
import "../../App.css";

const Palette = ({color1, color2, color3, color4, color5, color6})=>{

    const style1 = {backgroundColor: color1};
    const style2 = {backgroundColor: color2};
    const style3 = {backgroundColor: color3};
    const style4 = {backgroundColor: color4};
    const style5 = {backgroundColor: color5};
    const style6 = {backgroundColor: color6};
    
    return(
        <div>             
        <div className="content">
            <div className="palette">
            <div className="color1" style={style1}>1</div>
            <div className="color2" style={style2}>2</div>
            <div className="color3" style={style3}>3</div>
            <div className="color4" style={style4}>4</div>
            <div className="color5" style={style5}>5</div>
            <div className="color6" style={style6}>6</div>
           </div>
    </div>
</div>
    )
}

export default Palette;