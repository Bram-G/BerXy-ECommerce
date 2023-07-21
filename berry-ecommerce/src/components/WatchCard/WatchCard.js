import React from "react";
import "./style.css";
import AddToCart from "./assets/AddToCart.png";

const WatchCard = (props) => {
  return (
    <div id="watchCardContainer">
      <div id="watchCardImgContainer">
        <div id="watchCardview">
          <a href="#"><img id="watchCardImg" src={props.mainImage} alt="WatchcardImg" /></a>
        </div>
      </div>
      <div id="infoContainer">
        <a href="#">
        <div id="title">{props.name}</div>
        </a>
        <div id="price">${props.price}</div>
      </div>
      <div>
        <a href="#"><img id="addToCart"src={AddToCart}></img></a>
      </div>
    </div>
  );
};

export default WatchCard;
