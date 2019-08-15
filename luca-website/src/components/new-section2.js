import React from "react";
import "./cssComponents/home-section.css";
import luca from "../luca.jpeg";
import savetime from "./savetime.svg";

class New2 extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home section ">
          <div className="section-title-box-left">
            <h6 className="section-title">
            Save time and cost as manual entry
              <div className="greenbox"></div>
            </h6>
            <div className="home-notes">
            LucaPlus creates an audit trail to monitor and track all transactions which have occurred so the data between
both platforms syncs in realtime.  
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
            
            <img src={savetime} alt="hero" className="Hero-image" />
           
          </div>
        </div>

      </div>
    );
  }
}

export default New2;