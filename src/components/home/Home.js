import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../App.css";

const Home = ()=>{
    return(
        <div className="main">
            <div className="content">
            <Link to="/gradientbg"><button>CSS Gradient Background Creator</button></Link>
            </div>
        </div>
    )
}

export default Home;