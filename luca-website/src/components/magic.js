import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import "./cssComponents/magic.css";
import luca from "../luca.jpeg";
import magic from "./magic.svg";
import dot from "./dot.svg";
import finger from "./finger.png";

class Magic extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="invoice-section ">

          <div className="section-content">
            
            <img src={magic} alt="hero" className="magic-Hero-image" />
           
          </div>
          <div className="magic-section-title-box-left">
            <h6 className="magic-section-title">
            All these magic are <span className="time">FREE</span> to use
            </h6>
            <div className="magic-notes">
            Luca+ is a FREE app! You won’t be charged for any reasons. 
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            

                <button className="magic-button">
                  <a className="getstarted-magic" href="https://luca.ledgerium.net/register"><h2 id="savetime-get-1">Get started <span role="img"><img src={finger} alt="hero" className="finger" /></span></h2></a>
                </button>
          
            
          </div>
         
        </div>

        {/* <div className="magic-dotted-section">
            <img src={dot} alt="hero" className="magic-dotted-image" />
        </div> */}
      </div>
    );
  }
}

export default Magic;
