import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import luca from "../luca.jpeg";
import savetime from "./savetime.svg";
import dot from "./dot.svg";
import finger from "./finger.png";


class Savetime extends React.Component {
  render() {
    return (
      <div className="savetime-page">
        <div className="home section ">
          <div className="section-title-box-left">
            <h6 className="savetime-section-title">
              Save <span className="time">time</span> and <span className="cost">cost</span> as manual entry is no longer required 
            </h6>
            <div className="savetime-notes">
              Luca+ creates an audit trail to monitor and track all transactions which have occurred so the data between
              both platforms syncs in realtime.  
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            
            <a className="getstarted" href="https://luca.ledgerium.net/register">
                <button className="savetime-button">
               <h2 id="savetime-get-1">Get started </h2><img src={finger} alt="hero" className="finger-savetime" />
                </button>
            </a>
            
          </div>
          <div className="section-content">
            
            <img src={savetime} alt="hero" className="savetime-Hero-image" />
           
          </div>
        </div>

        <div className="dotted-section">
            <img src={dot} alt="hero" className="dotted-image" />
        </div>
      </div>
    );
  }
}

export default Savetime;
