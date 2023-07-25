import { React, useEffect, useState } from "react";
import "./style.css";
import AddToCart from "./assets/AddToCart.png";
import CardBar from "../CardBar/CardBar";
import API from "../../utils/API";
import ReactImageMagnify from "react-image-magnify";
import AddToCart2 from "./assets/AddToCart2.png";

const WatchCard = (props) => {
  const [heroImage, setHeroImage] = useState();
  useEffect(() => {
    setHeroImage(props.mainImage);
  }, [props.mainImage]);

  function handleHeroImage(event) {
    setHeroImage(event.target.src);
  }

  return (
    <div>
      <div id="watchCardContainer">
        <div id="watchCardImgContainer">
          <div id="watchCardview">
            <ReactImageMagnify {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: heroImage,
                },
                largeImage: {
                  src: heroImage,
                  width: 2038,
                  height: 2038,
                },
              }}
            />
            {/* <img id="watchCardImg" src={heroImage} alt="WatchcardImg" /> */}
          </div>
        </div>
        <div id="infoContainer">
          <div id="title">{props.name}</div>
          <div id="watchCardBrand">{props.brand}</div>
          <div id="watchCardPrice">${props.price}</div>
          <div id="watchCardDescription">{props.description}</div>
          <div id="boxBreak"></div>
          <div id="cartOptions">
            <a href="#">
              <div id="addToCartw"> Add To Cart</div>
              {/* <img id="addToCartw" src={AddToCart}></img>
              <img id="addToCart2" src={AddToCart2}></img> */}
            </a>
            {/* <img id="trade" src={AddToCart}></img> */}
          </div>
        </div>
      </div>
      <div id="underWatchContainer">
        <div id="underWatchMoreImages">
          <div id="underWatchTitle">
            <div id="title">More Images</div>
          </div>
          <div id="moreImageCon">
            <a href="#">

            <img
              id="moreImage"
              onClick={handleHeroImage}
              src={props.mainImage}
              alt="WatchcardImg"
              />
              </a>
              <a href="#">
            <img
              id="moreImage"
              onClick={handleHeroImage}
              src={props.image1}
              alt="WatchcardImg"
            />
            </a>
            <a href="#">

            <img
              id="moreImage"
              onClick={handleHeroImage}
              src={props.image2}
              alt="WatchcardImg"
              />
              </a>
          </div>
        </div>
        <div id="underWatchCardBar">
          <CardBar />
        </div>
      </div>
      <div />
    </div>
  );
};

export default WatchCard;
