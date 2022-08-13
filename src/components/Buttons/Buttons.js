import React, {useState} from "react";
import ButtonItem from "./ButtonItem";
import { bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8, bc9, bc10, bc11, bc12, bc13, bc14, bc15, bc16, bc17 } from "./ButtonConsts";
import "./Buttons.css";
import CodeBlock from "./CodeBlock";

const Buttons = ()=>{

    const bcolors = [bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8, bc9, bc10, bc11, bc12, bc13, bc14, bc15, bc16];

    const [showCode, setShowCode] = useState(false);

    
    return(
        <div className="btn-page">
            <div className="up-cont">
            <div className="text-cont">
            <h3>Beautiful gradient buttons hub</h3>
            <p>WOW! Ready-made colorful buttons with hover effect!</p>
            <p>Just click on the button to copy css code to clipboard</p>
            </div>
             <div className="btn-cont">
                <button className="gr-btn" 
                style={{backgroundImage: bc4.color}}
                onClick={()=>setShowCode(!showCode)}>
                    Click here to show full CSS of the button
                    </button>
             </div>
             {showCode && <CodeBlock />}
            </div>
            <div className="block-items"> 
            {bcolors.map(el=>{
                return(
                    <ButtonItem color={el.color} />
                )
            })}
            </div>
        </div>
    )
}

export default Buttons;