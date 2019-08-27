import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/contactus.css";
import comingSoon from "./comingsoon-pic.svg";
import Navbar from "./navbar-new";
import { contactus } from "./contactus.png";
import {first} from "./contactus-icon-1.svg";
import { second } from "./contactus-icon-2.svg";
import { third } from "./contactus-icon-3.svg";

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
                            <img src={ first } alt="hero" className="contactus-image" />
                            <img src={ second } alt="hero" className="contactus-image" />
                            <img src={ third } alt="hero" className="contactus-image" />
                        </div>
                    </div>
                </div>

      )

    }

};


export default Coming;