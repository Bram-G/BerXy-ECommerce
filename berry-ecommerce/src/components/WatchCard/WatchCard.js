import { React, useEffect, useState } from "react";
import "./style.css";
import CardBar from "../CardBar/CardBar";
import ReactImageMagnify from "react-image-magnify";

const WatchCard = (props) => {
  const [heroImage, setHeroImage] = useState();
  useEffect(() => {
    setHeroImage(props.mainImage);
  }, [props.mainImage]);

  function handleHeroImage(event) {
    setHeroImage(event.target.src);
  }

  const handleCartAdd = () => {
    SaveDataToLocalStorage(props.id);
  };
  function SaveDataToLocalStorage(data) {
    var watchArray = [];
    // Parse the serialized data back into an aray of objects
    watchArray = JSON.parse(localStorage.getItem("cart")) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    watchArray.push([data]);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("cart", JSON.stringify(watchArray));
  }

  const image1 = props.image1;
  const image2 = props.image2;

  const shouldRenderImg1 = !!image1;
  const shouldRenderImg2 = !!image2;

  return (
    <div>
      <div id="watchCardContainer">
        <div id="underWatchMoreImages">
          <div id="underWatchTitle"></div>
          <div id="moreImageCon">
            <img
              id="moreImage"
              onClick={handleHeroImage}
              src={props.mainImage}
              alt="WatchcardImg"
            />

            {shouldRenderImg1 && (
              <img
                id="moreImage"
                onClick={handleHeroImage}
                src={props.image1}
                alt="WatchcardImg"
              />
            )}

            {shouldRenderImg2 && (
              <img
                id="moreImage"
                onClick={handleHeroImage}
                src={props.image2}
                alt="WatchcardImg"
              />
            )}
          </div>
        </div>
        <div id="watchCardImgContainer">
          <div id="watchCardview">
            <ReactImageMagnify
              {...{
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
          </div>
        </div>
        <div id="infoContainer">
          <div id="title">{props.name}</div>
          <div id="watchCardBrand">{props.brand}</div>
          <div id="watchCardPrice">${props.price}</div>
          <div id="watchCardDescription">{props.description}</div>
          <div id="boxBreak"></div>
          <div id="cartOptions">
            <a href="/cart" onClick={handleCartAdd}>
              <div id="addToCartw"> Add To Cart</div>
            </a>
          </div>
        </div>
      </div>
      <div id="underWatchContainer">
        <div id="underWatchCardBar">
          <CardBar />
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
