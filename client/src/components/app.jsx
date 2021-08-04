import React, { useState,useEffect } from "react";
import Footer from './footer';
import {Route,Link} from 'react-router-dom';
import About from './about';
import Home from './home';
import Property from './property';


function App(){



  return <div>

  <Route exact path="/about" >
  <About />
  </Route>
  <Route exact path="/" >
  <Home />
  </Route>
  <Route path="/property/:id" >
  <Property />
  </Route>

  <Footer />
  </div>
}

export default App;
