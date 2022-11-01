import React from "react";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import {FooterLink,FooterC} from "./StyledComponents";

function Footer() {
  return (
    <FooterC className="footer-container">
    <section>
          <FooterLink herf="#">About us</FooterLink>
          <FooterLink herf="#">Contact</FooterLink>
          </section>  
          <section>
          <FooterLink herf="#">Twitter</FooterLink>
          <FooterLink>
            <img src={twitter} className="twitter" alt="twitter.svg" />
          </FooterLink>
          <FooterLink herf="#">Facebook</FooterLink>
         <FooterLink>
            <img src={facebook} className="facebook" alt="facebook.svg" />
          </FooterLink>
          </section>
     </FooterC>
  )
}

export default Footer;
