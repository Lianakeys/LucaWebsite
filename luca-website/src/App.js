import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import HomeSection from "./components/home-section";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import PartnerIntegration from "./components/partner-integration";
import Savetime from "./components/savetime";
import New2 from "./components/new-section2";
import New3 from "./components/new-section3";
import New4 from "./components/new-section4";
// import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <meta charset="UTF-8"></meta>
        <Navbar />
        <HomeSection />
        <HowItWorks />
        <PartnerIntegration />
        <Savetime />
        <New2 />
        <New3 />
        <New4 />
        <Footer />
      </div>
    );
  }
}

export default App;
