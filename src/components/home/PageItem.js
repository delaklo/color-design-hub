import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const PageItem = (props)=>{
    return(
        <div className="page-item">
        
                <h4 className="desc">{props.desc}</h4>
                <Link to={props.link}>
                <img src={props.img} width="100%" height="100%" />
            </Link>
            </div>
    )
}

export default PageItem;