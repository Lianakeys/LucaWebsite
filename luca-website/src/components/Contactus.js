import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/contactus.css";
import comingSoon from "./comingsoon-pic.svg";
import Navbar from "./navbar-new";
import { contactus } from "./contactus.svg";

class Coming extends Component {
    render() {
      return (

                <div className="how-it-works-page ">
                    <Navbar />
                    <div className="hiw-container">
                        <div className="icon-container">
                            <img src={ contactus } alt="hero" className="contactus-image" />
                        </div>

                        <div className="three-icon-box">

                        </div>
                    </div>
                </div>

      )

    }

};


export default Coming;