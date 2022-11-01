import React from "react";
import JoinSection from "./JoinSection";
import { JoiS, JC,CircleJ,Title } from "./StyledComponents";

function Join() {
  return (
   
   <JC>
    <CircleJ/>
     
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
