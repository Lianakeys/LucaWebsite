import React from "react";
import "./cssComponents/home-section.css";
import luca from "../luca.jpeg";
import Navbar from "./Navbar/Navbar";
class HomeSection extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Navbar />
        <div className="home section ">
          <div className="section-title-box-left">
            <h6 className="section-title">
              The single source of truth for all transactions{" "}
            </h6>
            <div className="home-notes">
              {" "}
              LucaPlus makes transactions simpler, faster and smarter, whilst
              ensuring the integrity of the data{" "}
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            <div className="email-form">
                <form className="form-inline" action="/"> 
                    <input type="email" id="email" placeholder="Your email" name="email"></input>
                </form>

                <button className="home-button">
                <p id="get-1">Get started</p>
                </button>
            </div>
            
          </div>
          <div className="section-content">
            <h4>image inserted here</h4>
            <img src={luca} alt="luca-pic" className="Luca-pic" />
          </div>
        </div>

        <div className="how-it-works section ">
          <div className="section-title-box-left">
            <h6 className="section-title">
              The single source of truth for all transactions{" "}
            </h6>
            <div className="home-notes">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            <button className="home-button"><p id="get">Get started</p></button>
          </div>
          <div className="section-content">
            <h4>image inserted here</h4>
            <img src={luca} alt="luca-pic" className="Luca-pic" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
