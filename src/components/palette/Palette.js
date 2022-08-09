import React, {useState} from "react";
import "./Palette.css";
import "../../App.css";
import darkIcon from "../../img/dark.png"

const Palette = ({color1, color2, color3, color4, color5, color6})=>{
    
    const style1 = {backgroundColor: color1, height: "100%", width: "14%"};
    const style2 = {backgroundColor: color2, height: "100%", width: "14%"};
    const style3 = {backgroundColor: color3, height: "100%", width: "14%"};
    const style4 = {backgroundColor: color4, height: "100%", width: "14%"};
    const style5 = {backgroundColor: color5, height: "100%", width: "14%"};
    const style6 = {backgroundColor: color6, height: "100%", width: "14%"};    

    const colors = [{style: style1}, {style: style2}, {style: style3}, {style: style4}, 
        {style: style5}, {style: style6}];

    const [copied, setCopied] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function copy(color){
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(()=> setCopied(false), 1000)
    }
    
    return(
        <div>             
        <div className={darkMode ? "dark-content" : "white-content"}>
            <div className="top">
            <h3>Click on color to copy color code to the clipboard</h3>
            <div className="btn-dark" onClick={()=>setDarkMode(!darkMode)}><img src={darkIcon}
            width="30px" height="30px" alt="Turn on dark mode"></img>
            </div>
            </div>
            <div className="palette">
            {colors.map((el)=>{
                return(
                    <div style={el.style} onClick={()=>copy(el.style.backgroundColor)}></div>
                )
            })}
          </div>
          {copied && (<div className="copied">Copied!</div>)}
    </div>
</div>
    )
}

export default Palette;