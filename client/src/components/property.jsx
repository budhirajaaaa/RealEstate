import React,{useState,useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom'
import axios from "axios"

function Property(){

const  {id}  = useParams();
const [t,sett]= useState(0)
const [pplaces, setPPlaces] = useState([]);

useEffect(async () => {
       await axios.get("http://localhost:5000/data")
       .then (res => {
           setPPlaces(res.data);
           sett(1);
       })
       .catch(err => {
           console.log(err);
       })
   });


  return <div className="property-carousel">
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={(t==1)?pplaces[id].Link:null} className="d-block w-100 pimage" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://img77.uenicdn.com/image/upload/v1542048788/category/shutterstock_672083275.jpg" className="d-block w-100 pimage" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://i.pinimg.com/originals/78/77/c1/7877c117eaef64dba0e9895c818eb103.png" className="d-block w-100 pimage" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

<div className="property-detail">
<div className="row">
<div className="col-md-6">
<h1>Signature Tower</h1>
<p>Live in a luxurious home, in the lap of nature. Located in the foothills of the Aravallis, enjoy the green acres under a boundless blue sky – far away from the city’s pollution. Here, world class amenities are served to you in a blissfully serene atmosphere. And the premium floors are designed to ensure adequate natural sunlight in each apartment. Here living is a fine art. Where the sky is bluer and the field is greener, bathed in sunshine, surrounded by the scent of wet grass and, the music of birds and buzzing insects. It’s a perfect blend of natural beauty and comfort that you call home.</p>
</div>
<div className="col-md-6">
<img className="layout" src="http://www.niralaestate.net.in/images/floorplan/nirala-estate-phase2-Floorplan1.jpg" alt="" />
</div>
</div>
<br/>
<br/>
<hr/>
<br/>
<h3>Location Advantage</h3>
<ul class="a">

<li>More Than 6 Reputed Schools within 15 km Radius</li>
<li>Sohna Elevated Road (under construction)</li>
<li>Shopping Malls with Leading Brands 15 km Away</li>
<li>Hotels in 15 km Radius</li>
<li>11 Multiplex Screens to be Functional Soon</li>
<li>Office Complexes and Business Hubs in the Neighborhood</li>
<li>Adventure Park in the Vicinity</li>
<li>Lush Green Environment</li>
</ul>

</div>
  </div>



}
export default Property;
