import React from "react";
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"; 
import {FooterC} from"./styled-components";
   

function Footer (){

return (
    <div>
<FooterC>
<img src={twitter} className="twitter" alt="twitter.svg" />
<img src={facebook} className="facebook" alt="facebook.svg" />
<section>
<ul>
<li> "About us"</li>
<li> "Contact "</li>
<li>"Twitter"</li>
<li>"Facebook"</li>
</ul>
</section>
</FooterC>
</div>
);
}

export default Footer;
 