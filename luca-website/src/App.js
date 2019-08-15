import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import HomeSection from "./components/home-section";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import PartnerIntegration from "./components/partner-integration";
import New from "./components/new-section";
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
        <New />
        <Footer />
      </div>
    );
  }
}

export default App;
