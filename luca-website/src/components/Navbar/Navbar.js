import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <>
       
        <nav className={style.navbar}>
       
          <ul className={style.navbox}>
            <div className={style.logo}>
              <img className={style.logoimage} alt="Luca Logo" />
            </div>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/WhyUs">
                Why Us?
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/HelpCentre">
                Help Centre
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.contactus} to="/Contact Us">
                Contact Us
              </Link>
            </li>
            <li className={style.navitemdiff}>
              <Link className={style.navlink} to="/Login">
                Login
              </Link>
            </li>
            <li className={style.navitemdiff}>
              <button className={style.navbarbutton} to="/SignUp">
                Sign Up for free
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
