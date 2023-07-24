import {React, useState, useEffect} from "react";
import "./style.css";
import Minicard from "../Minicard/Minicard";
import API from "../../utils/API";

const CardBar = () => {

  
  const [watchData, setWatchData] = useState([]);
  
  useEffect(() => {
    const getManyWatches = async () => {
      try {
        const data = await API.getAllWatches();
        setWatchData(data);
        console.log(data);
      }catch (error) {
        console.log(error);
      }
    };
    getManyWatches();
  },[]);
  // let var2 = 4;
    var var1, var2, var3, var4 = 2;
  function getRandomUniqueNumbers(){
    var1 = Math.floor(Math.random() * watchData.length);
    var2 = Math.floor(Math.random() * watchData.length);
    var3 = Math.floor(Math.random() * watchData.length);
    var4 = Math.floor(Math.random() * watchData.length);
  }
  getRandomUniqueNumbers();

  const watch1 = watchData[var1];
  const watch2 = watchData[var2];
  const watch3 = watchData[var3];
  const watch4 = watchData[var4];
  return (
    <div className="cardBarContainer">
      <div className="cardBarTitle">Reccomended For You</div>
      <div className="cardBarCard">
        <Minicard name={watch1.name} mainImage={watch1.mainImage} image1={watch1.image1} price={watch1.price} />
        <Minicard name={watch2.name} mainImage={watch2.mainImage} image1={watch2.image1} price={watch2.price} />
        <Minicard name={watch3.name} mainImage={watch3.mainImage} image1={watch3.image1} price={watch3.price} />
        <Minicard name={watch4.name} mainImage={watch4.mainImage} image1={watch4.image1} price={watch4.price} />
      </div>
    </div>
  );
};

export default CardBar;
