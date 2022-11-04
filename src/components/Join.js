import React from "react";
import JoinSection from "./JoinSection";
import { JoiS, JC,CircleJ,Title, CircleM } from "./StyledComponents";

function Join() {
  return (
   
   <JC>
    <CircleJ/>
    <CircleM/>
     
      <section>
      <Title>Join the fun</Title>
      </section>
     
      <JoiS>
        <JoinSection />
      </JoiS>
    </JC>
  );
}

export default Join;
