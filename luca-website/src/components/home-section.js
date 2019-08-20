import React from "react";
import "./cssComponents/home-section.css";
import luca from "../luca.jpeg";
import heroimage from "./Hero-image.svg";
import xeroicon from "./Xero-icon.svg";
import myobicon from "./Myob-icon.svg";
import myobfont from "./MYOB-font.svg";
import xerofont from "./XEROfont.svg";
import myobbutton from "./MYOB-button.svg";
import xerobutton from "./Xero-button.svg";

class HomeSection extends React.Component {
  render() {
    return (
      <div className="home-page">
        <a name="top"></a>
        <div className="home section ">
          <div className="section-title-box-left">
          <h6 className="section-title">
              The single source of truth for all transactions{" "}
              <div className="greenbox"></div>
            </h6>
            <div className="home-notes">
              {" "}
              <strong>Luca+</strong> makes transactions simpler, faster and smarter, whilst
              ensuring the integrity of the data{" "}
            </div>
            {/* <a class="button" href="#" role="button">Get started for free</a> */}
            <div className="email-form">
                <form className="form-inline" action="/"> 
                    <input type="email" id="email" placeholder="Your email" name="email"></input>
                </form>

                <button className="home-button">
                  <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="get-1">Get started <span role="img" className="finger-pointer" aria-label="finger">👉🏻</span></h2></a>
                </button>

            </div>
            {/* <button className="Myob-outer-button">
              <button className="MYOB-button">
                    <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="try">Try <span className="MYOB"><img src={myobfont} alt="hero" className="MYOBfont" /></span> for free</h2></a>
              </button>
            </button>  
            <button className="Xero-outer-button">
              <button className="Xero-button">
                    <a className="getstarted" href="https://luca.ledgerium.net/register"><h2 id="try">Try <img src={xerofont} alt="hero" className="XEROfont" /> for free</h2></a>
              </button>
            </button> */}
            <div className="MYOBbutton-outer">
            <div className="MYOB-left-button"><a className="MYOBbutton-outer" href="https://login.myob.com/Account/RegisterOrganizationAsNewUser?client_id=essentials-frontend&redirect_uri=%2Foauth2%2Fauthorize%3Fresponse_type%3Did_token%2Btoken%26client_id%3Dessentials-frontend%26redirect_uri%3Dhttps%253a%252f%252fessentials.myob.com.au%252fLA%252fapp.htm%26resource%3Dcaca4a6d-1ed1-4e83-9d7a-6b294596a93b%2Bpay-item%2Bsingle-touch-payroll%2Binvoice-reminders%2Bpayday%2Bf4f42f8b-7d48-483a-869d-d0f4d830a666%26scope%3Dopenid%2Bemail%2Bphone%2Buser.register.trial%26state%3D83262b5a-28e5-4ed5-b924-708f0d36e049_eyJsb2dpblN0YXRlIjp7InR5cGUiOiJ1c2VyX3JlZ2lzdHJhdGlvbiIsInByb2R1Y3RJZCI6IjExIn0sInJlc291cmNlIjoiY2FjYTRhNmQtMWVkMS00ZTgzLTlkN2EtNmIyOTQ1OTZhOTNiIHBheS1pdGVtIHNpbmdsZS10b3VjaC1wYXlyb2xsIGludm9pY2UtcmVtaW5kZXJzIHBheWRheSBmNGY0MmY4Yi03ZDQ4LTQ4M2EtODY5ZC1kMGY0ZDgzMGE2NjYifQ%253d%253d%26nonce%3D09b4faab-30ef-45f3-9ea3-d0e536b09822%26branding_id%3Dessentials-au%26_ga%3D2.43303973.1260740423.1561083607-2140870890.1561083607%26client-request-id%3D9ac3621e-9322-4df6-82d3-3255bbf5fadc%26x-client-sku%3Djs%26x-client-ver%3D1.0.0&branding_id=essentials-au
">
              <img src={myobbutton} alt="hero" className="MYOBbutton-image" />
            </a>
            </div>
            <div className="Xero-right-button">
            <a className="XERObutton-outer" href="https://www.xero.com/au/signup/?xtid=x30luca">
              <img src={xerobutton} alt="hero" className="XERObutton-image" />
            </a>
            </div>
            </div>
          </div>
          <div className="section-content">
            
            <img src={heroimage} alt="hero" className="Hero-image" />
            {/* <img src={myobicon} alt="hero" className="Myob-icon" />
            <img src={xeroicon} alt="hero" className="Xero-icon" /> */}
          </div>
        </div>

      
      </div>
    );
  }
}

export default HomeSection;
