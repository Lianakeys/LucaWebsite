import React from "react";
import "./cssComponents/hamburger.css";
import { Link } from "react-router-dom";

class Hamburger extends React.Component {
    render() {
      return (

       
        <nav role="navigation">
          <div id="menuToggle">
        
            <input type="checkbox" />
            
          
            <span></span>
            <span></span>
            <span></span>
            
           
            <ul id="menu">
              <a href="#"><li>Why us?</li></a>
              <a href="https://docs.theblockledger.net/"><li>BlockLedger</li></a>
              <a href="#"><Link className="navlink-phone" to="/comingsoon"><li>Contact us</li> </Link></a>
              <a href="#pricing"><li>Pricing</li></a>
              <a href="https://luca.ledgerium.net/login" target="_blank"><li>Login</li></a>
              <a href="https://luca.ledgerium.net/register" target="_blank"><li>Sign up</li></a>
            </ul>
          </div>
        </nav>


            );
        }
    }
    
    export default Hamburger;