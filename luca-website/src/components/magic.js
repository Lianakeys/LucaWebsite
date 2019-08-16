import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import "./cssComponents/magic.css";
import luca from "../luca.jpeg";
import magic from "./magic.svg";
import dot from "./dot.svg";

class Magic extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="invoice-section ">

          <div className="section-content">
            
            <img src={magic} alt="hero" className="Hero-image" />
           
          </div>
          <div className="invoice-section-title-box-left">
            <h6 className="invoice-section-title">
            All these magic are <span className="time">FREE</span> to use
            </h6>
            <div className="magic-notes">
            LucaPlus is a FREE app! You won’t be charged for any reasons. 
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            

                <button className="magic-button">
                  <h2 id="savetime-get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2>
                </button>
          
            
          </div>
         
        </div>

        <div className="magic-dotted-section">
            <img src={dot} alt="hero" className="Hero-image" />
        </div>
      </div>
    );
  }
}

export default Magic;