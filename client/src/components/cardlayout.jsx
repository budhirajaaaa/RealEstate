import React, {useState,useEffect} from "react";
import Card from './card.jsx';
import axios from "axios"

function CardLayout(){
  const [places, setPlaces] = useState([]);

  useEffect(() => {
         axios.get("/data")
         .then (res => {
             setPlaces(res.data);
         })
         .catch(err => {
             console.log(err);
         })
     });


  return <div>
  <div className="cardContainer">
    <div className="row">

    {places.map((placeItem, index) => {
  return (
    <Card
      key={index}
      id={index}
      info={placeItem.Info}
      price={placeItem.Price}
      location={placeItem.Location}
      link={placeItem.Link}
    />

  );
})}


  </div>
  </div>
  <br />
  <iframe src="https://app.lapentor.com/sphere/untitled-1630489133" frameborder="0" width="100%" height="400px" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
  <br />
  </div>
}
export default CardLayout;
