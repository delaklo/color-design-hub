import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PageItem from "./PageItem";

import bgimg from "../../img/bgimg.png";
import btnimg from "../../img/btnimg.png";
import palimg from "../../img/palimg.png";

const Home = ()=>{
    return(
        <div className="home">
            <div className="text-block">
                <h1 className="big-text">
                    Colorful & Open Source
                </h1>
                <h3>
                Place where you can use ready-made design tools to create beautiful and colorful designs.
                </h3> <br/>
                <h3>
                    This project is being updated and improved. Check out the github repository in the footer.
                </h3> 
            </div>
            <div className="page-items">
            <PageItem desc={"Use ready-made beautyful buttons!"} img={btnimg} link="/buttons"/>
            <PageItem desc={"Discover new color combinations!"} img={palimg} link="/palettes" />
            <PageItem desc={"Create awesome and colorful gradient backgrounds!"} img={bgimg} link="/gradientbg" />
        </div>
       </div>
    )
}

export default Home;