import React from "react";
import landingPagegirl from "../images/landingpagegirl.png";
import JoinButton from "./JoinButton.js";
import { Circle2, Circle3, CircleP,Girl,M,Titl,Pa } from "./StyledComponents";

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
    
        <div>
          <Titl> Feel the Music</Titl>
          <Pa>Stream over 20 thousands songs with one click</Pa>
          <JoinButton>Join Now</JoinButton>
        </div>
     
    </M>
  );
}

export default Main;
