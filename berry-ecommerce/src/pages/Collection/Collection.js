import { React, useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

import Spotlight from "../../components/Spotlight/Spotlight";
import CollectionCardBar from "../../components/CollectionCardBar/CollectionCardBar";
import LearnMore from "../../learnMore/LearnMore";

function Collection() {

  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const getWatchByBrand = async () => {
      try {
        const brandData = await API.getAllBrands();
        console.log(brandData);
        setBrandData(brandData);
        // const data = await API.getWatchByBrand(brandData.brand);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWatchByBrand();
  }, []);

  return (
    <div id="collectionPage">
      <div id="collectionBox">
        <div id="collectionWatches">
          {brandData.map((brandData, index) => {
            return (
              <CollectionCardBar brand = {brandData} key={index}/>

            )
            })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
