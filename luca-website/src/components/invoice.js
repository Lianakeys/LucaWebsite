import React from "react";
import "./cssComponents/home-section.css";
import "./cssComponents/savetime.css";
import "./cssComponents/invoice.css";
import luca from "../luca.jpeg";
import invoice from "./invoice.svg";
import finger from "./finger.png";

class Invoice extends React.Component {
  render() {
    return (
      <div className="invoice-page">
        <div className="home section ">

          <div className="section-content">
            <img src={invoice} alt="hero" className="invoice-Hero-image" />
          </div>

          <div className="section-title-box-left">
                
            <h6 className="invoice-section-title">
              Invoices are <span className="time">secure</span> and <span className="cost">direct</span>  
            </h6>
            <div className="invoice-notes">
              Powered by blockchain technology, you can be confident the invoices you receive are genuine and not a scam or fraud.
            </div>
              <button className="invoice-button">
                <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="get-1">Get started <span role="img"><img src={finger} alt="hero" className="finger" /></span></h2></a>
              </button>

          </div>
        
        </div>

      </div>
    );
  }
}

export default Invoice;




{/* <h6 className="section-title">
The single source of truth for all transactions{" "}
<div className="greenbox"></div>
</h6>
<div className="home-notes">
{" "}
<strong>LucaPlus</strong> makes transactions simpler, faster and smarter, whilst
ensuring the integrity of the data{" "}
</div>

<div className="email-form">
 

  <button className="home-button">
    <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2></a>
  </button>
</div> */}









// <div className="invoice-section-content">
            
// <img src={invoice} alt="hero" className="invoice-Hero-image" />

// </div>

// <div className="invoice-section-title-box-left">
// <h6 className="invoice-section-title">
//   Invoices are <span className="time">secure</span> and <span className="cost">direct</span>  
// </h6>
// <div className="invoice-notes">
//   Powered by blockchain technology, you can be confident the invoices you receive are genuine and not a scam or fraud.
// </div>
//     <button className="invoice-button">
//       <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2></a>
//     </button>

// </div>