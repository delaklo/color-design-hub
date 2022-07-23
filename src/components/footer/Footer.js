import React from "react";
import "./Footer.css";
import githubLogo from  "../../img/GitHub-Mark-Light-32px.png";
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
                    <a href="https://github.com/delaklo/color-design-hub"><img src={githubLogo}
                    alt="github"></img></a>
                    <a href="https://twitter.com/delaklo"><img src={twitterLogo}
                    style={{width:"32px", height: "32px"}} alt="twitter"></img></a>
                </div>
            </div>
            <p>delaklo 2022</p>
        </div>
    )
}

export default Footer;