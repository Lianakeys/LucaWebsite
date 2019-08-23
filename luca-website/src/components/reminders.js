import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import "./cssComponents/reminders.css";
import luca from "../luca.jpeg";
import calendar from "./calendar.svg";
import finger from "./finger.png";

class Reminder extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="reminders-section ">
          <div className="section-title-box-left">
            <h6 className="reminders-section-title">
            Automatic <span className="time">reminders</span> to make sure your customers pay you faster
            </h6>
            <div className="reminders-notes">
            As well as reminders for you to avoid late payment fees. You won’t miss paying any single invoice anymore.  
            </div>
               <button className="reminders-button">
               <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="get-1">Get started <span role="img"><img src={finger} alt="hero" className="finger" /></span></h2></a>
               </button> 
          </div>
          <div className="section-content">
            
            <img src={calendar} alt="hero" className="reminders-Hero-image" />
           
          </div>
        </div>

      </div>
    );
  }
}

export default Reminder;