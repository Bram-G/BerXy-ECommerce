import React from "react";
import "./style.css";
import Watch3 from "./assets/Watch3.png";
import AddToCart from "./assets/AddToCart.png";

const Minicard = (props) => {
  return (
    <div id="minicardContainer">
      <div id="imgContainer">
        <div id="view">
          <a href={"/watch/" + props.id}>
            <img id="miniCardImg" src={props.mainImage} alt="minicardImg" />
          </a>
        </div>
      </div>
      <div id="cardInfoContainer">
        <div id="titleContainer">
          <a href={"/watch/" + props.id}>
            <div id="watchTitle">{props.name}</div>
          </a>
        </div>
        <div id="price">${props.price}</div>
      </div>
      <div>
        <a href="#">
          <img id="addToCart" src={AddToCart}></img>
        </a>
      </div>
    </div>
  );
};

export default Minicard;
