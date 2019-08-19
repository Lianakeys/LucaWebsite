import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import HomeSection from "./components/home-section";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import Pricing from "./components/pricing";
import PartnerIntegration from "./components/partner-integration";
import Savetime from "./components/savetime";
import Invoice from "./components/invoice";
import Reminder from "./components/reminders";
import Magic from "./components/magic";
import Slider from "./components/slider";
import pricingicon from "./components/pricing.svg";
// import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <meta charset="UTF-8"></meta>
        <div className="Navbar">
        <Navbar />
        </div>
        <div className="Homesection">
        <HomeSection />
        </div>
        <div className="HIWsection">
        <HowItWorks />
        </div>
        <div className="Pricingsection">
          <div className="pricing-image-box">
                <img src={pricingicon} alt="hero" className="pricing-icon" />
          </div>
        <Pricing />
        </div>
        <div className="PIsection">
        <PartnerIntegration />
        </div>
        <div className="Savetimesection">
        <Savetime />
        </div>
        <div className="Invoicesection">
        <Invoice />
        </div>
        <div className="Remindersection">
        <Reminder />
        </div>
        <div className="Magicsection">
        <Magic />
        </div>
        <div className="Slidersection">
        <Slider />
        </div>
        <div className="Footersection">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
