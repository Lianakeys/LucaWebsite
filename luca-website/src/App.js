import React from "react";
import "./App.css";
import HomeSection from "./components/home-section";
// import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomeSection />
      </div>
    );
  }
}

export default App;
