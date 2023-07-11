import React from "react";
import "./style.css";
import Minicard from "../Minicard/Minicard";


const CardBar = () => {
  return <div className="cardBarContainer">
    <div className="cardBarTitle">Reccomended For You</div>
    <div className="cardBarCard">
      <Minicard/>
      <Minicard/>
      <Minicard/>
      <Minicard/>
    </div>

  </div>;
};

export default CardBar;
