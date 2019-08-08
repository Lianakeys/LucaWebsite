import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../components/Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className={style.lucalogocontainer}>
          <img className={style.logoimage} alt="Luca Logo" />
        </div>
        <nav className={style.navbar}>
          <ul className={style.navbox}>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/">
                Home
              </Link>
            </li>
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
              <Link className={style.navlink} to="/Contact Us">
                Contact Us
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/Login">
                Login
              </Link>
            </li>
            <li className={style.navitem}>
              <Link className={style.navlink} to="/SignUp">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
