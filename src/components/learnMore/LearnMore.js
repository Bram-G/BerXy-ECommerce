import React from "react";
import "./style.css";
import Video from "./assets/video.mp4";

const LearnMore = () => {
  return (
    <div id="learnMoreContainer">
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
      <div id="learnMoreTitle">Timeless Elegance,<br></br> Crafted for Excellence</div>
      <div id="learnMoreButton">
        <a id= "aboutButton"href="/collection">

        <div id="buttonText">

         Collection
        </div>
        </a>
        {/* <img id="learnMoreButton" src={Button1}></img> */}
      </div>
    </div>
  );
};

export default LearnMore;
