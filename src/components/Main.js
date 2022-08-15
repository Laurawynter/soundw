import React from "react";
import landingPagegirl from "../images/landingpagegirl.png";
import JoinButton from "./JoinButton.js";
//import Circle from"./styled-components";
import { Circle2, CircleP,Girl,M } from "./StyledComponents";

function Main() {
  return (
    <M>
      
        <CircleP />
        <Circle2 />

        <Girl
          src={landingPagegirl}
          className="landingpagegirl"
          alt="landing-page-girl"
        />
    
        <div>
          <h1> Feel the Music</h1>
          <p>Stream over 20 thousands songs with one click</p>
          <JoinButton>Join Now</JoinButton>
        </div>
     
    </M>
  );
}

export default Main;
