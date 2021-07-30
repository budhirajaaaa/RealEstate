import React from "react";
import Top from './top';
import CardLayout from './cardlayout';
import Footer from './footer';
import Skill from './skill';
import Estate from './estate';
import Quote from './quote';
import Images from './images'
import About from './about';
import Feature from './features';
function Home(){
  return <div>
  <Top/>
  <Estate />
 <CardLayout />
<Quote />
<Skill />
<Feature />
<Images />
</div>
}

export default Home;
