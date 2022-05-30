
  import React from "react";
  import albums from"../images/albums.svg"
  import covers from "../images/covers.jpg";
  import facebook from "../images/facebook.svg";
  import landingPagegirl from "../images/landing-page-girl.png";
  import micro from "../images/microphone.svg";
  import more from "../images/more.svg"
  import twitter from "../images/twitter.svg"; 
  
  function Main(){
  return(
  <div>
  <main className="mainContainer"></main > 
  background-color:
  <img src={albums} className="albums" alt="albums" />
  <img src={covers} className="covers" alt="covers" />
  <img src={facebook} className="facebook" alt="facebook" />
  <img src={landingPagegirl} className="landing-page-girl" alt="landing-page-girl" />
  <img src ={micro} className="microphone" alt ="microphone"/>
  <img src ={more} className="more" alt ="more"/>
  <img src ={twitter} className="twitter" alt ="twitter"/>

  </div>
  )
  }
  
  export default Main;
  