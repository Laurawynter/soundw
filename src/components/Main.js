
  import React from "react";
  import landingPagegirl from "../images/landing-page-girl.png";
  import {Circle1,Circle2,Circle3} from "./styled-components.js";
  import Joinbutton from "./Join button.js";
  
  function Main(){
  return(
  <div>
  <main className="mainContainer"></main > 
  <img src={landingPagegirl} className="landing-page-girl" alt="landing-page-girl" />
  <h1>Feel the Music </h1>
  <p>Stream over 20  thousands songs with one click</p>
  <Joinbutton/>
  <Circle1/>
  <Circle2/>
  <Circle3/> 


  

  </div>
  )
  }
  
  export default Main;
  