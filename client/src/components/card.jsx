import React from "react";
import About from './about';
function Card(props){

  return  <div className="col-lg-4 propertyCard" >
  <div className="card" styles="width: 10rem;">
  <img className="card-img-top" src={props.link} alt="Card image cap" />
  <div className="card-body" index={props.id}>
  <a href="/" className="propertyLink"> <h5 className="card-title">{props.info}</h5></a>
    <p className="card-text">{props.price}</p>
    <p className="card-text">{props.location}</p>
  </div>
</div>
</div>


}

export default Card;
