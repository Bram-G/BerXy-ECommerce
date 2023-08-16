import React from "react";
import "./style.css";
import grandSeikoLogo from "./assets/grandSeikoLogo.png";
import nomosLogo from "./assets/nomosLogo.png";
import trilobeLogo from "./assets/trilobeLogo.png";
import vulcainLogo from "./assets/vulcainLogo.png";
import tagLogo from "./assets/tagLogo.png";
import blancpainLogo from "./assets/blancpainLogo.png";
import breitlingLogo from "./assets/breitlingLogo.png";
import omegaLogo from "./assets/omegaLogo.png";
import seikoLogo from "./assets/seikoLogo.png";

function Infotainer() {
  return (
    <div className="infotainer">
      <div id="leftInfo">
        <div id="infoTitle">Featured Watches</div>
        <div id="allWatches">
          <div id="leftWatches">
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank"  rel="noreferrer" href="https://www.grand-seiko.com/us-en/"><img className="watchLogo" src={grandSeikoLogo} alt="Grand Seiko Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://nomos-glashuette.com/en"><img className="watchLogo" src={nomosLogo} alt="NOMOS Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://trilobe.com/us/"><img className="watchLogo" src={trilobeLogo} alt="Trilobe Logo"/></a>
            </div>
          </div>
          <div id="centerWatches">
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://vulcain.ch/"><img className="watchLogo" src={vulcainLogo} alt="Vulcain Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://www.tagheuer.com/us/en/"><img className="watchLogo" src={tagLogo} alt="Tag Huer Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://www.blancpain.com/en"><img className="watchLogo" src={blancpainLogo} alt="BlancPain Logo"/></a>
            </div>
          </div>
          <div id="rightWatches">
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://www.breitling.com/us-en/"><img className="watchLogo" src={breitlingLogo} alt="Breitling Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://www.omegawatches.com/en-us/"><img className="watchLogo" src={omegaLogo} alt="Omega Logo"/></a>
            </div>
            <div className="watchLogoContainer">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://seikousa.com/"><img className="watchLogo" src={seikoLogo} alt="Seiko Logo"/></a>
            </div>
          </div>
        </div>
      </div>
      <div id="rightInfo">
        <div id="infoTitle">About Us</div>
        <div id="infoText">
          Welcome to BerXy, your premier online destination for discerning watch
          enthusiasts seeking the epitome of sophistication and style. At BerXy,
          we take pride in offering a curated selection of high-end timepieces
          from a diverse array of world-renowned watch manufacturers. Our
          passion lies in connecting you with the finest examples of horological
          mastery, where the art of watchmaking converges with the pursuit of
          timeless elegance. With an extensive collection sourced from renowned
          craftsmen around the globe, BerXy brings you an unparalleled
          opportunity to explore a symphony of designs, complications, and
          materials. Whether you're captivated by the precision of Swiss
          engineering, the innovation of Japanese craftsmanship, or the heritage
          of European artistry, BerXy invites you to embark on a journey of
          discovery and refinement. Elevate your personal style and celebrate
          the essence of luxury with every tick of one of these timepieces – where
          every watch tells a story as unique as its wearer.
        </div>
      </div>
    </div>
  );
}

export default Infotainer;
