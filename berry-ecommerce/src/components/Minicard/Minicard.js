import React from "react";
import "./style.css";
import Watch3 from "./assets/Watch3.png";
import AddToCart from "./assets/AddToCart.png";

const Minicard = (props) => {
  return (
    <div id="minicardContainer">
      <div id="imgContainer">
        <div id="view">
          <a href="#"><img id="miniCardImg" src={Watch3} alt="minicardImg" /></a>
        </div>
      </div>
      <div id="infoContainer">
        <a href="#">
        <div id="title">Kosuke Kawamura</div>
        </a>
        <div id="price">$440</div>
      </div>
      <div>
        <a href="#"><img id="addToCart"src={AddToCart}></img></a>
      </div>
    </div>
  );
};

export default Minicard;
