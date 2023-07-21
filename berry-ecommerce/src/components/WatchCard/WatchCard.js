import {React, useEffect } from "react";
import "./style.css";
import AddToCart from "./assets/AddToCart.png";
import Minicard from "../Minicard/Minicard";

const WatchCard = (props) => {

  return (
    <div>
      <div id="watchCardContainer">
        <div id="watchCardImgContainer">
          <div id="watchCardview">
            <a href="#">
              <img id="watchCardImg" src={props.mainImage} alt="WatchcardImg" />
            </a>
          </div>
        </div>
        <div id="infoContainer">
          <a href="#">
            <div id="title">{props.name}</div>
          </a>
          <div id="price">${props.price}</div>
          <div id="cartOptions">
            <a href="#">
              <img id="addToCart" src={AddToCart}></img>
            </a>
          </div>
        </div>
      </div>
      <div id="underWatchContainer">
        <div id="underWatchMoreImages">
          <div id="moreImageCon">
            <img id="moreImage" src={props.image1} alt="WatchcardImg" />

          </div>
        </div>
        <Minicard />
      </div>
      <div />
    </div>
  );
};

export default WatchCard;
