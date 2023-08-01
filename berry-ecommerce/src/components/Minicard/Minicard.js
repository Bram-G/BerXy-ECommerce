import React from "react";
import "./style.css";
import Watch3 from "./assets/Watch3.png";
import AddToCart from "./assets/AddToCart.png";
import { useState, useEffect } from "react";

const Minicard = (props) => {
  
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };


  return (
    <div id="minicardContainer">
      <div id="imgContainer">
        <div id="view">
          <a href={"/watch/" + props.id}>
            <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="miniCardImg" src={hovered ? props.image1 : props.mainImage} className={`image-with-hover ${hovered ? 'hovered' : ''}`} alt="minicardImg" />
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
          {/* <img id="addToCart" src={AddToCart}></img> */}
        <div id="addToCart">Add to Cart</div>
        </a>
      </div>
    </div>
  );
};

export default Minicard;
