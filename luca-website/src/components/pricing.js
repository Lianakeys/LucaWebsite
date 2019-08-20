import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/pricing.css";
import pricingicon from "./pricing.svg";
import dot from "./pricing-dot.svg";

class Pricing extends Component {
    render() {
      return (

                <div className="pricing-page " >
                    <div className="pricing-container">
                        <div className="top-box"></div>
                        
                        <div className="pricing-dotted-section">
                                <img src={dot} alt="hero" className="pricing-dotted-image" />
                                
                        </div>
                    </div>
                </div>

      )

    }

};


export default Pricing;