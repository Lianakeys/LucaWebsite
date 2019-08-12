import React from "react";
import "./App.css";
import HomeSection from "./components/home-section";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
// import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <meta charset="UTF-8"></meta>
        <HomeSection />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

export default App;
