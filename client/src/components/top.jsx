import React from "react";


function typeOfProperty(event){
  event.preventDefault();
  console.log(event.target.value);
}



function Top(){
  return <div>

  <div className="banner">
  <video autoPlay muted loop >
    <source src="bg.mp4" type="video/mp4" />
  </video>

  <div className="content">
  <h1>Budhiraja Estate<span></span></h1>


  </div>
  </div>
  </div>
}

export default Top;
// <--   <div className="banner-div">
//
// <select id="list" onChange={typeOfProperty}>
//            <option value="RENT">RENT</option>
//            <option value="BUY">BUY</option>
//
//        </select>
//
// </div>-->
