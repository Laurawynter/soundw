import React from "react";
import JoinSection from "./JoinSection";
import Footer from "./Footer.js";
import {  J, JoiS } from "./styled-components";

function Join (){
    return (
        <J>
          
            <h1>Join the fun</h1>
            <JoiS><JoinSection/></JoiS>
             <><Footer/></>
               </J>
    )
}
export default Join;