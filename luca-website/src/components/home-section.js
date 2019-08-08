import React from 'react';
import './cssComponents/home-section.css';

class HomeSection extends React.Component {

render () {
    return (

        
        <div class="home-page">

            <div class="home section ">
                <div class="section-title-box-left">
                    <h6 class="section-title">The single source of truth for all transactions </h6>
                    <div class="home-notes"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    {/* <a class="button" href="#" role="button">Get started for free</a> */}
                    <button class="home-button">Get started for free</button>
                </div>
                <div class="section-content">
                    <h4>image inserted here</h4>
                </div>
            </div>

            <div class="home section ">
                <div class="section-title-box-left">
                    <h6 class="section-title">The single source of truth for all transactions </h6>
                    <div class="home-notes"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    {/* <a class="button" href="#" role="button">Get started for free</a> */}
                    <button class="home-button">Get started for free</button>
                </div>
                <div class="section-content">
                    <h4>image inserted here</h4>
                </div>
            </div>


          </div>



    );
}


}


export default HomeSection;