import React from 'react';
import "./Buttons.css";

const CodeBlock = ()=>{
    return(
        <div className="code-block">
             <code>
             {`.gr-btn{`}<br/>
    {`display: block;`}<br/>
    {`background-image:     ; /*put here copied text*/`}<br/>
    {`font-size: larger;`}<br/>
    {`margin: 10px;`}<br/>
    {`padding: 16px 60px;`}<br/>
    {`text-align: center;`}<br/>
    {`transition: 0.5s;`}<br/>
    {`background-size: 200% auto;`}<br/>
    {`color: white; `}<br/>
    {`box-shadow: 0 0 20px #eee;`}<br/>          
    {`border-radius: .5rem;`}<br/>
    {`border: none;`}<br/>
    {`}`}<br/>
    {`.gr-btn:hover {`}<br/>
    {`background-position: center top;`}<br/>
    {`color: #fff; `}<br/>
    {`}`}<br/>
    </code>
             </div>
    )
}

export default CodeBlock;