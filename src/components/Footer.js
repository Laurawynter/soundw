import React from "react";
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"; 
   

function Footer (){

return (
<section className = "Foot">
<img src={twitter} className="twitter" alt="twitter.svg" />
<img src={facebook} className="facebook" alt="facebook.svg" />
<ul>
<li> "About us"</li>
<li> "Contact "</li>
<li>"Twitter"</li>
<li>"Facebook"</li>
</ul>
</section>
);
}

export default Footer;
 