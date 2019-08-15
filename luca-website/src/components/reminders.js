import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import "./cssComponents/reminders.css";
import luca from "../luca.jpeg";
import calendar from "./calendar.svg";

class Reminder extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="reminders-section ">
          <div className="section-title-box-left">
            <h6 className="reminders-section-title">
            Automatic <span className="time">reminders</span> to make sure your customers pay you faster
            </h6>
            <div className="home-notes">
            As well as reminders for you to avoid late payment fees. You won’t miss paying any single invoice anymore.  
            </div>
               <button className="savetime-button">
                  <h2 id="get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2>
                </button> 
          </div>
          <div className="section-content">
            
            <img src={calendar} alt="hero" className="Hero-image" />
           
          </div>
        </div>

      </div>
    );
  }
}

export default Reminder;