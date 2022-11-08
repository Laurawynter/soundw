import React from "react";
import landingPagegirl from "../assets/landingpagegirl.png";
import JoinButton from "../components/JoinButton.js";
import { Circle2, Circle3, CircleP,Girl,M,Titl,Pa,I } from "../components/StyledComponents";

function Main() {
  return (
    <M>
       
        <CircleP />
        <Circle2 />
        <Circle3/>

        <Girl
          src={landingPagegirl}
          className="landingpagegirl"
          alt="landing-page-girl"
        />
    
        <I className="Information">
          <Titl> Feel the Music</Titl>
          <Pa>Stream over 20 thousands songs with one click</Pa>
          <JoinButton>Join Now</JoinButton>
        </I>
     
    </M>
  );
}

export default Main;
