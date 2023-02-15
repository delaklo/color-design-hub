import React from "react";
import "./Footer.css";
import githubLogo from  "../../img/github-mark-white.svg";
import twitterLogo from "../../img/twitter-icon.png";

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="section-top">
                <div className="section-left">
                <a onClick={()=>alert("not implemented yet :(")}>Need help?</a>
                <a href="https://github.com/delaklo/color-design-hub/issues">Report an issue</a>
                <a href="#">Footer is not finished yet</a>
                </div>
                <div className="section-right">
                    Social links:
                    <div className="s_links" style={{overflow:"visible"}}>
                    <a href="https://github.com/delaklo/color-design-hub" target="_blank"><img src={githubLogo}
                    alt="github" style={{ height: 32, width: 32 }} /></a>
                    <a href="https://twitter.com/delaklo" target="_blank"><img src={twitterLogo}
                    style={{width:"32px", height: "32px"}} alt="twitter" /></a>
                    </div>
                </div>
            </div>
            <p className="delaklo">delaklo 2022</p> 
        </div>
    )
}

export default Footer;