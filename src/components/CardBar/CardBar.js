import { React, useState, useEffect } from "react";
import "./style.css";
import Minicard from "../Minicard/Minicard";
import API from "../../utils/API";

const CardBar = () => {
  const [watchData, setWatchData] = useState([]);

  useEffect(() => {
    const getManyRandomWatches = async () => {
      try {
        const data = await API.getRandomWatch();
        setWatchData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getManyRandomWatches();
  }, []);
  return (
    <div className="cardBar">

    <div className="cardBarContainer">
      <div className="cardBarTitle">Reccomended For You</div>
      <div className="cardBarCard">
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
          </div>
  );
};

export default CardBar;
