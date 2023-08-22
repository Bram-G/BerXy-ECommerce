import React from "react";
import "./style.css";
import Watch1 from "./assets/Watch1.png";
import Elipse2 from "./assets/Elipse2.png";

const Spotlight = () => {
  return (
    <div id="spotlightContainer">
      <div id="spotlightImage">
        <img className="spotlightElipse" src={Elipse2} alt="Elipse styling"></img>
        <img className="spotlightWatch" src={Watch1} alt="watch"></img>
      </div>
      <div id="spotlightTextBox">
        <div id="mottoText">
          Where Time Meets<div id="mottoText2">Opulence</div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
