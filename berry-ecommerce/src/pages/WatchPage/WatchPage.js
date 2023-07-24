import { React, useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import WatchCard from "../../components/WatchCard/WatchCard";
import API from "../../utils/API";

function WatchPage() {
  const params = useParams();
  const [watchData, setWatchData] = useState([]);

  useEffect(() => {
    const getWatch = async (id) => {
      try {
        const data = await API.getWatchById(id);
        setWatchData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getWatch(params.id);
  },[]);

  return (
    <div>
      <WatchCard
        name={watchData.name}
        description={watchData.description}
        mainImage={watchData.mainImage}
        image1={watchData.image1}
        image2={watchData.image2}
        price={watchData.price}
      />
    </div>
  );
}

export default WatchPage;
