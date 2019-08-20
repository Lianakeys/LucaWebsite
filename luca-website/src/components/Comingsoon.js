import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/comingsoon.css";
import comingSoon from "./comingsoon-pic.svg";

class Coming extends Component {
    render() {
      return (

                <div className="how-it-works-page ">
                    <a name="hiw"></a>
                    <div className="hiw-container">
                        <div className="hiw-title-box">
                            {/* <h6 className="hiw-title">
                            Coming soon{" "}
                            </h6> */}
                        </div>
                        <div className="icon-container">
                            <img src={comingSoon} alt="hero" className="hiw-icon" />
                        </div>
                    </div>
                   
                </div>

      )

    }

};


export default Coming;
