import React from "react";
import "./style.css";
import Spotlight from "../../components/Spotlight/Spotlight";
import CardBar from "../../components/CardBar/CardBar";
import LearnMore from "../../learnMore/LearnMore";

function Home() {
  return (
    <div>
      <script src="owlcarousel/owl.carousel.min.js"></script>  
      <Spotlight />
      <CardBar/>
      <LearnMore/>
    </div>
  );
}

export default Home;
