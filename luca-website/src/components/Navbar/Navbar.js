import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
// import SVG from '../SVG'
import LucaLOGO from './Luca-logo.svg'

class Navbar extends Component {
  render() {
    return (
      <>
       
        <nav className={style.navbar}>
       
          <ul className={style.navbox}>
            <div className={style.logo}>
              <img src={LucaLOGO} className={style.logoimage} alt="Luca Logo" />
              {/* <SVG /> */}
            </div>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/WhyUs">
                Why us?
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/HelpCentre">
                Help centre
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.contactus} to="/Contact Us">
                Contact us
              </Link>
            </li>
            <li className={style.navitemdiff}>
              <Link className={style.navlink} to="/Login">
                Login
              </Link>
            </li>
            <li className={style.navitemdiff}>
              <button className={style.navbarbutton} to="/SignUp">
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
