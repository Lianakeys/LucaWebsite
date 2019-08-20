import React from "react";
import { Link } from "react-router-dom";
import LucaLOGO from './Luca-logo.svg'
import "../App.css";
import Navbar from "./navbar-new"
import HomeSection from "./home-section";
// import Footer from "./components/footer";
import PartnerIntegration from "./partner-integration";
import Savetime from "./savetime";
import Invoice from "./invoice";
import Reminder from "./reminders";
import Magic from "./magic";
import Slider from "./slider";
import pricingicon from "./pricing.svg";
import dot from "./pricing-dot.svg";
import hiwIconFull from "./hiw-icon-full.svg";
// import Navbar from "./components/Navbar/Navbar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twitter from './twitter.svg'
import insta from './insta.svg'
import facebook from './facebook.svg'




class Home extends React.Component {
    render() {
      return (

<div className="App" >
        <meta charset="UTF-8"></meta>
        <div className="Navbar">
        <Navbar />
        </div>
        <div className="Homesection">
        <HomeSection />
        </div>
        <div className="HIWsection">
          <a name="hiw"></a>
            <div className="hiw-title-box">
              <h6 className="hiw-title">
              How <img src={LucaLOGO} className="hiw-luca-logo" alt="Luca Logo" /> Works{" "}
              </h6>
            </div>
          {/* <HowItWorks /> */}
          <div className="icon-container">
            <img src={hiwIconFull} alt="hero" className="hiw-icon" />
          </div>
        </div>
        <div className="Pricingsection">
        <a name="pricing"></a>
          <div className="pricing-image-box">
                <img src={pricingicon} alt="hero" className="pricing-icon" />
          </div>
        <div className="bottom-pricing-box">
          <img src={dot} alt="hero" className="pricing-dotted-image" />
        </div>
        </div>
        <div className="PIsection">
        <PartnerIntegration />
        </div>
        <div className="Savetimesection">
        <Savetime />
        </div>
        <div className="Invoicesection">
          
          <Invoice />
          
        </div>
        <div className="Remindersection">
        <Reminder />
        </div>
        <div className="Magicsection">
        <Magic />
        </div>
        <div className="Slidersection">
        <Slider />
        </div>
        <div className="Footersection">
          <div className="footer-container">
            <div className="footer-topbox">
              <div className="footer-details-container">
                <h2 className="footer-details-notes"><img src={LucaLOGO} className="details-luca-logo" alt="Luca Logo" /> is a free app, you won’t be charged</h2>
                  <div className="footer-email-form">
                      <form className="form-inline" action="/"> 
                          <input type="email" id="footer-email" placeholder="Your email" name="email"></input>
                      </form>
                      <button className="footer-button-container">
                      <a className="getstarted" href="https://luca.ledgerium.net/register"><p id="footer-button">Start free  <FontAwesomeIcon icon={faChevronRight} transform="right-4 bottom-2"/></p></a>
                      </button>
                  </div>
              </div>
            </div>
            <div className="footer-lowerbox">
            <div className="middlebox">
              <div className="back-to-top">
                <a href="#top"><FontAwesomeIcon className="chevron-up" icon={faChevronUp} transform="" size="2x"/></a>
              </div>
              <div className="footer-middlebox">
                <ul className="footer-navbox">
                  <li className="footer-navitem">
                      <a className="navlink" href="#top">
                          Product
                      </a>
                  </li>
                  <li className="footer-navitem">
                      <a href="#hiw" className="navlink" to="/Features">
                          Features
                      </a>
                  </li>
                  <li className="footer-navitem">
                      <a href="https://docs.theblockledger.net/" className="navlink" to="/Support">
                          Support
                      </a>
                  </li>
                  
                  <div className="footer-logo-box">
                      <img src={LucaLOGO} className="footer-luca-logo" alt="Luca Logo" />
                      {/* <SVG /> */}
                  </div>
                  <li className="footer-navitem">
                      <Link className="navlink" to="/comingsoon">
                          About
                      </Link>
                  </li>
                  <li className="footer-navitem">
                      <a href="https://www.theblockledger.net/blog/" className="navlink" to="/Blog">
                          Blog
                      </a>
                  </li>
                  <li className="footer-navitem">
                      <Link className="navlink"to="/comingsoon">
                          Contact us
                      </Link>
                  </li>           
                </ul>       
              </div>
              <div className="footer-sm-box">
                <div className="footer-social-media-container">
                    <img src={twitter} className="twitter" alt="Luca Logo" />
                    <img src={insta} className="insta" alt="Luca Logo" />
                    <img src={facebook} className="facebook" alt="Luca Logo" />
                </div>
              </div>
           </div>    
            </div>
            <div className="second-last-copyright-box">
              <p className="copyright-font">© Copyright 2019 Blockledger | Terms of Service | Privacy & Security</p>
            </div>
            <div className="footer-lowestbox">
              <p className="most-bottom-font">Made with ❤️ by The Block Ledger</p>
            </div>
          </div>  
          {/* <Footer /> */}
        </div>
      </div>


);
}
}

export default Home;