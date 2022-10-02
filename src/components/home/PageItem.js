import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const PageItem = (props)=>{
    return(
        <div className="page-item">
        <Link to={props.link}>
                <h4 className="desc">{props.desc}</h4>
                
                <img src={props.img} width="100%" height="100%" />
            </Link>
            </div>
    )
}

export default PageItem;