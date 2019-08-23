import React from "react";
import "./cssComponents/footer.css";
import { Link } from "react-router-dom";
import style from "./cssComponents/Navbar.css";
import LucaLOGO from './Luca-logo.svg'
import twitter from './twitter.svg'
import insta from './insta.svg'
import facebook from './facebook.svg'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';

// import { 
//   faBoxingGlove as faBoxingGloveRegular 
// } from '@fortawesome/regular-light-svg-icons';
// import { 
//   faBoxingGlove as faBoxingGloveSolid 
// } from '@fortawesome/solid-light-svg-icons';

// library.add(
//     faBoxingGlove,
// );


class Footer extends React.Component {
    render() {
      return (
        <div className="footer-container">
            <div className="footer-grid-container">
                <div className="footer-top-grid">
                   
                </div>
                
                <div className="footer-middle-grid"> 
                    <div className="middle-box-shadow"></div>
                    <div className="back-to-top">
                        <a href="#top"><FontAwesomeIcon className="chevron-up" icon={faChevronUp} transform="right-10" size="2x"/></a>
                    </div>
                    <div className="footer-middle-links-container">
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
                                <Link className="navlink" to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="footer-navitem">
                                <a href="https://www.theblockledger.net/" className="navlink" to="/Blog">
                                    Blog
                                </a>
                            </li>
                            <li className="footer-navitem">
                                <Link className="navlink"to="/ContactUs">
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
                <div className="second-last-copyright-box">
                    <p className="copyright-font">© Copyright 2019 Blockledger | Terms of Service | Privacy & Security</p>
                </div>
                <div className="footer-bottom-grid">                 
                    <div className="copyright-terms-box">
                        <p className="most-bottom-font">Made with ♥ by The Block Ledger</p>
                    </div>
                </div>
            </div>
        </div>

      )


    }




};


export default Footer;
