import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./cssComponents/Navbar.css";
// import SVG from '../SVG'
import LucaLOGO from './Luca-logo.svg'

class Navbar extends Component {
  render() {
    return (
      <>
       
        <nav className="navbar">
          <ul className="navbox">
            <div className="logo">
              <img src={LucaLOGO} className="logoimage" alt="Luca Logo" />
              {/* <SVG /> */}
            </div>
            <li className="navitem">
              <Link className="navlink" to="/WhyUs">
                Why us?
              </Link>
            </li>
            <li className="navitem">
              <Link className="navlink" to="/HelpCentre">
                Help centre
              </Link>
            </li>
            <li className="navitem">
              <Link className="contactus" to="/Contact Us">
                Contact us
              </Link>
            </li>
            <li className="navitemdiff">
              <Link className="navlink" to="/Login">
                Login
              </Link>
            </li>
            <li className="navitemdiff">
              <button className="navbarbutton" to="/SignUp">
                Signup for free
              </button>
            </li>
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
