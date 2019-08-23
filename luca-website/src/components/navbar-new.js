import React, { Component } from "react";
import { Link } from "react-router-dom";
import LucaLOGO from './Luca-logo.svg';
import "./cssComponents/navbar-new.css"
import pricinglink from "./pricing-navlink.svg";


class Navbar extends Component {
    render() {
      return (

        <div className="navbar-container">
            <div className="logo-box">
            <Link className="navlink" to="/Home"><img src={LucaLOGO} className="logoimage" alt="Luca Logo" /></Link>
            </div>
            <span className="navbox-for-four">
                <ul>
                <li className="navlink">
                    <a href="#pricing" className="navlink" >
                        Why us?
                    </a>
                </li>
                <li className="navlink">
                    <a href="https://docs.theblockledger.net/" className="navlink" to="/HelpCentre">
                        Block Ledger
                    </a>
                </li>
                <li className="navlink">
                    <Link className="navlink" to="/comingsoon">
                        Contact us
                    </Link>
                </li>
                <li className="navlink">
                    <a href="#pricing"><img src={pricinglink} className="pricing-navlink" alt="Luca Logo" /></a>
                </li>
                <li className="navlink">
                    <a href="https://luca.ledgerium.net/login" className="navlink" to="/Login">
                        Login
                    </a>
                </li>
                <li className="navlink">
                    <button className="navbarbutton" to="/SignUp" >
                        <a href="https://luca.ledgerium.net/register" className="link-register">
                            Sign up
                        </a>
                    </button>
                </li>
                </ul>
            </span>

        </div>



        
      );
    }
  }
  
  export default Navbar;