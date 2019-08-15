import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/partner-integration.css";
import integration from './pi.svg'

class PartnerIntegration extends Component {
    render() {
      return (
        <div className="partner-integration-page">
            <div className="pi-container">
                <div className="pi-left-container">
                    <div className="pi-left-box">
                        <img src={integration} alt="hero" className="pi-image" />
                    </div>
            {/* <div className="pi-right-grid">
            <div className="annoying-box"></div> */}
                </div>
            
                <div className="pi-right-container">
                    <div className="pi-right-box"></div>
                    <div className="pi-annoying-box">
                        <div className="pi-section-title-box">
                            <h6 className="pi-section-title">
                                LucaPlus integrates into your existing accounting software
                            </h6>
                            <div className="pi-notes">
                            {" "}
                            Integrating both platforms means you get two way data sharing.  This way you will always be in able see the latest information on the state of your accounts.
                            </div>
                            <button className="pi-button">
                                <h2 id="pi-get-1">Connect now <span role="img" className="finger-pointer" aria-label="finger">🚀</span></h2>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

      
        </div>


      )

    }

};


export default PartnerIntegration;