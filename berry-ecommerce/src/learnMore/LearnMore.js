import React from "react";
import "./style.css";
import Button1 from "./assets/Button1.png";

const LearnMore = () => {

  return (
    <div id="learnMoreContainer">
    <div id="learnMoreTitle">Timeless Elegance,<br></br> Crafted for Excellence</div>
      <div id="learnMoreButton">
        {" "}
        <img id="learnMoreButton" src={Button1}></img>
      </div>
    </div>
  );
};

export default LearnMore;
