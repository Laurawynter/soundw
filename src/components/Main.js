
  import React from "react";
  import landingPagegirl from "../images/landing-page-girl.png";
  import {MainC} from "./styled-components.js";
  import Joinbutton from "./Join button.js";
  import {ImgG} from "./styled-components";
  import Circle from"./styled-components";
  import CuartoC from "./styled-components";

  function Main(){
  return(
  <div>
  <MainC>  
  <div className ="Circle"/> 
  <div className="CuartoC"/> 
    <ImgG>
  <img src={landingPagegirl} className="landing-page-girl" alt="landing-page-girl" />
  </ImgG>
  <div>
  <h1> Feel the Music</h1> 
  <p>Stream over 20  thousands songs with one click</p>
  <Joinbutton/>
  </div>
  </MainC> 


  

  </div>
  )
  }
  
  export default Main;
  