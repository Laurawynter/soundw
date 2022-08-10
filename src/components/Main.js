import React from "react";
import landingPagegirl from "../images/landingpagegirl.png";
import JoinButton from "./JoinButton.js";
//import Circle from"./styled-components";
import { Circle2, CircleP } from "./StyledComponents";

function Main() {
  return (
    <div>
      <section className="main">
        <CircleP />
        <Circle2 />

        <img
          src={landingPagegirl}
          className="landingpagegirl"
          alt="landing-page-girl"
        />

        <div>
          <h1> Feel the Music</h1>
          <p>Stream over 20 thousands songs with one click</p>
          <JoinButton>Join Now</JoinButton>
        </div>
      </section>
    </div>
  );
}

export default Main;
