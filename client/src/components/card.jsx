import React from "react";


function Card(props){
 function onclick(event){
   console.log(event.target);
 }


  return  <div className="col-6 col-md-4 propertyCard" >
  <div className="card" styles="width: 2rem;">
  <img className="card-img-top" src={props.link} alt="Card image cap" />
  <div className="card-body" >
  <a href={'/property/'+props.id} className="propertyLink"> <h5 className="card-title" index={props.id} onClick={onclick}>{props.info}</h5></a>
    <p className="card-text">{props.price}</p>
    <p className="card-text">{props.location}</p>
  </div>
</div>
</div>


}

export default Card;
