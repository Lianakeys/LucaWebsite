import React from "react";
import { Link } from "react-router-dom";
import LucaLOGO from './Luca-logo.svg'
import "../App.css";
import Navbar from "./navbar-new"
import HomeSection from "./home-section";
// import Footer from "./components/footer";
import PartnerIntegration from "./partner-integration";
import Savetime from "./savetime";
import Hamburger from "./hamburger";
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
import finger from './finger.png'
import myobbutton from "./MYOBbutton-phone.svg";
import xerobutton from "./Xerobutton-phone.svg";
import heroimage from "./Hero-image.svg";



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
        <div className="HomeforPhone-container">
          <div className="hamburgermenu-container">
            <div className="hamburgermenu">
              <Hamburger />
            </div>
          </div>
          <div className="Lucaforphone-logocontainer">
            <img src={LucaLOGO} className="luca-logo-phone" alt="Luca Logo" />
          </div>
          <div className="luca-home-title-container">
            <h6 className="luca-section-title">
              The single source of truth for all transactions{" "}
              <div className="luca-greenbox"></div>
              <h5 className="luca-home-notes">
                <strong>Luca+</strong> makes transactions simpler, faster and smarter, whilst
                ensuring the integrity of the data
              </h5>
              <form className="phone-form-inline" action="/"> 
                    <input type="email" id="phone-emaill" placeholder="Your email" name="email"></input>
              </form>

              <button className="phone-home-button">
                <a className="getstarted-phone" href="https://luca.ledgerium.net/register"><h2 id="get-phone">Get started for free</h2></a>
              </button>
            </h6>
            <div className="MYOBbutton-phone">
            <a className="MYOBbutton-outer-phone" href="https://login.myob.com/Account/RegisterOrganizationAsNewUser?client_id=essentials-frontend&redirect_uri=%2Foauth2%2Fauthorize%3Fresponse_type%3Did_token%2Btoken%26client_id%3Dessentials-frontend%26redirect_uri%3Dhttps%253a%252f%252fessentials.myob.com.au%252fLA%252fapp.htm%26resource%3Dcaca4a6d-1ed1-4e83-9d7a-6b294596a93b%2Bpay-item%2Bsingle-touch-payroll%2Binvoice-reminders%2Bpayday%2Bf4f42f8b-7d48-483a-869d-d0f4d830a666%26scope%3Dopenid%2Bemail%2Bphone%2Buser.register.trial%26state%3D83262b5a-28e5-4ed5-b924-708f0d36e049_eyJsb2dpblN0YXRlIjp7InR5cGUiOiJ1c2VyX3JlZ2lzdHJhdGlvbiIsInByb2R1Y3RJZCI6IjExIn0sInJlc291cmNlIjoiY2FjYTRhNmQtMWVkMS00ZTgzLTlkN2EtNmIyOTQ1OTZhOTNiIHBheS1pdGVtIHNpbmdsZS10b3VjaC1wYXlyb2xsIGludm9pY2UtcmVtaW5kZXJzIHBheWRheSBmNGY0MmY4Yi03ZDQ4LTQ4M2EtODY5ZC1kMGY0ZDgzMGE2NjYifQ%253d%253d%26nonce%3D09b4faab-30ef-45f3-9ea3-d0e536b09822%26branding_id%3Dessentials-au%26_ga%3D2.43303973.1260740423.1561083607-2140870890.1561083607%26client-request-id%3D9ac3621e-9322-4df6-82d3-3255bbf5fadc%26x-client-sku%3Djs%26x-client-ver%3D1.0.0&branding_id=essentials-au">
              <img src={myobbutton} alt="hero" className="MYOBbutton-image-phone" />
            </a>
          </div>
          <div className="Xerobutton-phone">
            <a className="XERObutton-outer-phone" href="https://www.xero.com/au/signup/?xtid=x30luca">
              <img src={xerobutton} alt="hero" className="XERObutton-image-phone" />
            </a>
          </div>
          </div>
          {/* <div className="luca-home-notes-container">
          </div> */}
          
        </div>
        <div className="hero-image-container">
          <img src={heroimage} alt="hero" className="hero-image-phone" />
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
                      <a className="getstarted" href="https://luca.ledgerium.net/register"><p id="footer-button">Start free  <FontAwesomeIcon icon={faChevronRight} transform="right-4 top-20"/></p></a>
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
                          Why us?
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
                    <a href="https://twitter.com/Luca_Accounting"><img src={twitter} className="twitter" alt="Luca Logo" /></a>
                    <a href="https://www.instagram.com/lucaaccounting/"><img src={insta} className="insta" alt="Luca Logo" /></a>
                    <a href="https://www.facebook.com/Luca.Accounting/?pageid=2516020795076745&ftentidentifier=2516120181733473&padding=0"><img src={facebook} className="facebook" alt="Luca Logo" /></a>
                </div>
              </div>
           </div>    
            </div>
            <div className="second-last-copyright-box">
              <p className="copyright-font">© Copyright 2019 Blockledger | Terms of Service | Privacy & Security</p>
            </div>
            <div className="footer-lowestbox">
              <p className="most-bottom-font">Made with ♥ by The Block Ledger</p>
            </div>
          </div>  
          {/* <Footer /> */}
        </div>
      </div>


);
}
}

export default Home;