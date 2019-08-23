import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cssComponents/partner-integration.css";
import Lucawhite from './Luca-white.svg'
import integration from './pi.svg'
import rocket from './rocket.png'

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
                            <img src={Lucawhite} alt="hero" className="pi-image" /> integrates into your existing accounting software
                            </h6>
                            <div className="pi-notes">
                            {" "}
                            Integrating both platforms means you get two way data sharing.  This way you will always be in able see the latest information on the state of your accounts.
                            </div>
                            <button className="pi-button">
                                <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="pi-get-1">Connect now <span><img src={rocket} alt="hero" className="rocket" /></span></h2></a>
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