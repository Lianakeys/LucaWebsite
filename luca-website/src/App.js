import React from "react";
import "./App.css";
import HomeSection from "./components/home-section";
import Footer from "./components/footer";
// import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomeSection />
        <Footer />
      </div>
    );
  }
}

export default App;
