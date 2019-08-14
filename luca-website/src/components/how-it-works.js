import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/how-it-works.css";
// import hiwimage from "./how-it-works.svg";
import firstIcon from "./firsticon.svg";
import secondIcon from "./secondicon.svg";
import thirdIcon from "./thirdicon.svg";
import leftDash from "./left-dash-line.svg";
import rightDash from "./right-dash-line.svg";

class HowItWorks extends Component {
    render() {
      return (

                <div className="how-it-works-page ">
                    <div className="hiw-container">
                        <div className="hiw-title-box">
                            <h6 className="hiw-title">
                            How LucaPlus Works{" "}
                            </h6>
                        </div>
                        <div className="icon-container">
                            <div className="first-icon-box">
                                <img src={firstIcon} alt="hero" className="first-icon-image" />
                                <div className="first-icon-notes">
                                    <h6 className="hiw-first-notes">Connect LucaPlus to accounting software platforms like Xero and MYOB.</h6>
                                </div>
                            </div>
                            <div className="left-dashline-box">
                                <img src={leftDash} alt="hero" className="left-dash-image" />
                            </div>

                            <div className="second-icon-box">
                                <img src={secondIcon} alt="hero" className="second-icon-image" />
                                <div className="second-icon-notes">
                                    <h6 className="hiw-second-notes">You send/receive invoice through email as normal.</h6>
                                </div>
                            </div>

                            <div className="right-dashline-box">
                                <img src={rightDash} alt="hero" className="right-dash-image" />
                            </div>

                            <div className="third-icon-box">
                                <img src={thirdIcon} alt="hero" className="third-icon-image" />
                                <div className="third-icon-notes">
                                    <h6 className="hiw-third-notes">LucaPlus updates all the transaction details automatically at your accounting platforms.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>




      )

    }

};


export default HowItWorks;









{/* <div className="hiw-container">
                 */}
{/* <div className="how-it-works section ">
<div className="section-title-box-left">
<h6 className="section-title">
The single source of truth for all transactions{" "}
</h6>
<div className="home-notes">
{" "}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div> */}
{/* <a class="button" href="#" role="button">Get started for free</a> */}
{/* <button className="home-button"><p id="get">Get started</p></button>
</div>
<div className="section-content">
<h4>image inserted here</h4>
<img src={heroimage} alt="hero" className="Hero-image" />
</div>
</div>
</div> */}