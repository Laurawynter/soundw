
  import React from "react";
  import landingPagegirl from "../images/landing-page-girl.png";
  import {MainC} from "./styled-components.js";
  import Joinbutton from "./Join button.js";
  
  function Main(){
  return(
  <div>
  <MainC>    
  <img src={landingPagegirl} className="landing-page-girl" alt="landing-page-girl" />
  <section>
  <h1> Feel the Music </h1>
  <p>Stream over 20  thousands songs with one click</p>
  <Joinbutton/>
  </section>
  </MainC> 


  

  </div>
  )
  }
  
  export default Main;
  