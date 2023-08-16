import React from "react";
import "./style.css";
import Spotlight from "../../components/Spotlight/Spotlight";
import CardBar from "../../components/CardBar/CardBar";
import LearnMore from "../../components/learnMore/LearnMore";
import Infotainer from "../../components/Infotainer/Infotainer";

function Home() {
  return (
    <div>
      <Spotlight />
      <CardBar/>
      <LearnMore/>
      <Infotainer/>
    </div>
  );
}

export default Home;
