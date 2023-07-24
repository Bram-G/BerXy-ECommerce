import { React, useEffect, useState} from "react";
import "./style.css";
import AddToCart from "./assets/AddToCart.png";
import CardBar from "../CardBar/CardBar";
import API from "../../utils/API";

const WatchCard = (props) => {

  const [watchData, setWatchData] = useState([]);

  // useEffect(() => {
  //   const getManyWatches = async () => {
  //     try {
  //       const data = await API.getAllWatches();
  //       setWatchData(data);
  //       // console.log(data);
  //     }catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getManyWatches();
  //   function getRandomUniqueNumbers(count, max) {  
  //     const uniqueNumbers = new Set();
    
  //     while (uniqueNumbers.size < count) {
  //       const randomNumber = Math.floor(Math.random() * max) + 1;
  //       uniqueNumbers.add(randomNumber);
  //     }
  //     return Array.from(uniqueNumbers);
  //   }
  //   const arrayLength = watchData.length; // Set this to the desired length of the array
  //   // Generate 6 random unique numbers within the arrayLength range
  //   const randomNumbers = getRandomUniqueNumbers(6, arrayLength);
  //   // Assign each random number to different variables
  //   const [var1, var2, var3, var4, var5, var6] = randomNumbers;
    
  //   console.log("Random Numbers:", randomNumbers);
  //   console.log("Variables:", var1, var2, var3, var4, var5, var6);

  // },[]);
  
 

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
          <div id="boxBreak"></div>
          <div id="description">{props.description}</div>
          <div id="boxBreak"></div>
          <div id="boxBreak"></div>
          <div id="cartOptions">
            <a href="#">
              <img id="addToCartw" src={AddToCart}></img>
            </a>
              <img id="trade" src={AddToCart}></img>
          </div>
        </div>
      </div>
      <div id="underWatchContainer">
        <div id="underWatchMoreImages">
          <div id="underWatchTitle">
            <div id="title">More Images</div>
          </div>
          <div id="moreImageCon">
            <img id="moreImage" src={props.image1} alt="WatchcardImg" />
            <img id="moreImage" src={props.image2} alt="WatchcardImg" />
          </div>
        </div>
        <div id="underWatchCardBar">
          <CardBar 

          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default WatchCard;
