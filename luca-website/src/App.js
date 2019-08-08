import React from 'react';
import './App.css';
import HomeSection from './components/home-section';
import Navbar from "./components/Navbar/Navbar";


class App extends React.Component {
  render() {


  return (
    <div className="App">
          <Navbar />
          <HomeSection />
    </div>
  );
  } 
}

export default App;
