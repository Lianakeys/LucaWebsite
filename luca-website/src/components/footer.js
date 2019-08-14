import React from "react";
import "./cssComponents/footer.css";
import { Link } from "react-router-dom";
import style from "./cssComponents/Navbar.css";
import LucaLOGO from './Luca-logo.svg'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
                    <div className="footer-details-container">
                        <h2 className="footer-details-notes">LucaPlus is a free app, you won’t be charged</h2>
                        <div className="footer-email-form">
                            <form className="form-inline" action="/"> 
                                <input type="email" id="footer-email" placeholder="Your email" name="email"></input>
                            </form>
                            <button className="footer-button-container">
                                <p id="footer-button">Start free  <FontAwesomeIcon icon={faChevronRight} transform="right-4 bottom-2"/></p>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-middle-grid"> 
                    <div className="middle-box-shadow"></div>
                    <div className="footer-middle-links-container">
                        <ul className="footer-navbox">
                            <li className="footer-navitem">
                                <Link className="navlink" to="/Product">
                                    Product
                                </Link>
                            </li>
                            <li className="footer-navitem">
                                <Link className="navlink" to="/Features">
                                    Features
                                </Link>
                            </li>
                            <li className="footer-navitem">
                                <Link className="navlink" to="/Support">
                                    Support
                                </Link>
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
                                <Link className="navlink" to="/Blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="footer-navitem">
                                <Link className="navlink"to="/ContactUs">
                                    Contact us
                                </Link>
                            </li>
                           
                        </ul>
                       
                    </div>
                </div>
                <div className="second-last-copyright-box">
                    <p className="copyright-font">© Copyright 2019 Blockledger | Terms of Service | Privacy & Security</p>
                </div>
                <div className="footer-bottom-grid">                 
                    <div className="copyright-terms-box">
                        <p className="most-bottom-font">Made with ❤️ by The Block Ledger</p>
                    </div>
                </div>
            </div>
        </div>

      )


    }




};


export default Footer;
