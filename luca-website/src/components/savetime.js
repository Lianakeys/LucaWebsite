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
      <div className="home-page">
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
            

                <button className="savetime-button">
                <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="savetime-get-1">Get started <span role="img"><img src={finger} alt="hero" className="finger" /></span></h2></a>
                </button>
          
            
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
