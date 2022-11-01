import React from "react";
import JoinSection from "./JoinSection";
import { JoiS, JC } from "./StyledComponents";

function Join() {
  return (
    <JC className="JoinContainer">
      <section><h2>Join the fun</h2></section>
      <JoiS>
        <JoinSection />
      </JoiS>
    </JC>
  );
}

export default Join;
