import React from "react";
import "./style.css";
import { useState} from "react";

const Minicard = (props) => {
  
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    
    const handleCartAdd = () => {
      SaveDataToLocalStorage(props.id)
    }
    function SaveDataToLocalStorage(data)
    {
        var watchArray = [];
        // Parse the serialized data back into an aray of objects
        watchArray = JSON.parse(localStorage.getItem('cart')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        watchArray.push([data]);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('cart', JSON.stringify(watchArray));
    }


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
        <a href="/cart" onClick={handleCartAdd}>
          {/* <img id="addToCart" src={AddToCart}></img> */}
        <div id="addToCart">Add to Cart</div>
        </a>
      </div>
    </div>
  );
};

export default Minicard;
