import React from "react";
import "./cssComponents/home-section.css";
import luca from "../luca.jpeg";
import heroimage from "./Hero-image.svg";
import xeroicon from "./Xero-icon.svg";
import myobicon from "./Myob-icon.svg";

class HomeSection extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home section ">
          <div className="section-title-box-left">
            <h6 className="section-title">
              The single source of truth for all transactions{" "}
              <div className="greenbox"></div>
            </h6>
            <div className="home-notes">
              {" "}
              <strong>LucaPlus</strong> makes transactions simpler, faster and smarter, whilst
              ensuring the integrity of the data{" "}
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            <div className="email-form">
                <form className="form-inline" action="/"> 
                    <input type="email" id="email" placeholder="Your email" name="email"></input>
                </form>

                <button className="home-button">
                  <h2 id="get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2>
                </button>
            </div>
            
          </div>
          <div className="section-content">
            
            <img src={heroimage} alt="hero" className="Hero-image" />
            <img src={myobicon} alt="hero" className="Myob-icon" />
            <img src={xeroicon} alt="hero" className="Xero-icon" />
          </div>
        </div>

      
      </div>
    );
  }
}

export default HomeSection;
