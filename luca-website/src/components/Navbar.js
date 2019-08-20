import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./cssComponents/Navbar.css";
// import SVG from '../SVG'
import LucaLOGO from './Luca-logo.svg'

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="logo-for-phone">
              <img src={LucaLOGO} className="logo-image-phone" alt="Luca Logo" />
              {/* <SVG /> */}
        </div>
        <nav className="navbar">
          <ul className="navbox-container">
            <div className="logo">
              <img src={LucaLOGO} className="logoimage" alt="Luca Logo" />
              {/* <SVG /> */}
            </div>
           <div className="navbox-for-three">
              <li className="navitem">
                <a href="#pricing" className="navlink" to="/WhyUs">
                  Why us?
                </a>
              </li>
              <li className="navitem">
                <a href="https://docs.theblockledger.net/" className="navlink" to="/HelpCentre">
                  Help centre
                </a>
              </li>
              <li className="navitem">
                <Link className="contactus" to="/Contact Us">
                  Contact us
                </Link>
              </li>
          </div>   
          <div className="navbox-for-two">
              <li className="navitemdiff">
                <a href="https://luca.ledgerium.net/login" className="navlink" to="/Login">
                  Login
                </a>
              </li>
              <li className="navitemdiff">
                <button className="navbarbutton" to="/SignUp" >
                  <a href="https://luca.ledgerium.net/register" className="link-register">
                  Signup for free
                  </a>
                </button>
              </li>
          </div>
          </ul>
{/* 
          <div id="menu-wrap">
            <input type="checkbox" class="toggler"></input>
            <div class="hamburger"></div>
            <div className="menu">
              <div>
              <ul>


                <li><a href="#">Why us</a></li>
                <li><a href="#">Help centre</a></li>
                <li><a href="#"></a>Contact us</li>
                <li><a href="#"></a>Login</li>
                <li><a href="#"></a></li>
              </ul>


              </div>



            </div>

          </div> */}

        </nav>
      </>
    );
  }
}

export default Navbar;
