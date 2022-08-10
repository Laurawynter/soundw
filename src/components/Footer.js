import React from "react";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import { Wrapper } from "./StyledComponents";
import { Column } from "./StyledComponents";

function Footer() {
  return (
    <Footer>
      <Wrapper>
        <Column>
          <Footer.Title>About us</Footer.Title>
          <Footer.Link herf="#">Contact</Footer.Link>
          <Footer.Link herf="#">Twitter</Footer.Link>
          <Footer.Link herf="#">Facebook</Footer.Link>
          <Footer.Link>
            <img src={twitter} className="twitter" alt="twitter.svg" />
          </Footer.Link>
          <Footer.Link>
            <img src={facebook} className="facebook" alt="facebook.svg" />
          </Footer.Link>
        </Column>
      </Wrapper>
    </Footer>
  );
}

export default Footer;
