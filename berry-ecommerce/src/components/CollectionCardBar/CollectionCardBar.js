import { React, useState, useEffect } from "react";
import "./style.css";
import Minicard from "../Minicard/Minicard";
import API from "../../utils/API";

const CollectionCardBar = (props) => {
  const [watchData, setWatchData] = useState([]);

  useEffect(() => {
    const getWatchesByBrand = async () => {
      try {
        const data = await API.getWatchByBrand(props.brand);
        setWatchData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWatchesByBrand();
  }, []);


  return (
    <div className="collectionCardBarContainer">
      <div className="collectionCardBarTitle">{props.brand}</div>
      <div className="collectionCardBarCard">
        {watchData.map((watch) => (
          <Minicard
            key={watch._id}
            id={watch._id}
            name={watch.name}
            price={watch.price}
            mainImage={watch.mainImage}
            image1={watch.image1}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionCardBar;
