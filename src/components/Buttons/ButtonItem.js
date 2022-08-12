import React, {useState} from 'react';
import "./Buttons.css";

const ButtonItem = ({ color })=>{

    const [copied, setCopied] = useState(false);

    function copy(color){
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(()=> setCopied(false), 1000)
    }

    return(
        <div className='btn-item'>
        <button className="gr-btn" style={{backgroundImage: color}} onClick={()=>copy(color)}>Hello!</button>
        {copied ? (<p>Copied!</p>) : (<p>Click to copy</p>)}
        </div>
    )
}

export default ButtonItem;