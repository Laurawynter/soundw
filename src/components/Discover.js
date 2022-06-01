import micro from "../images/microphone.svg";
import more from "../images/more.svg"
import covers from "../images/covers.jpg";
import albums from"../images/albums.svg"
import Footer from "./Footer.js"
import { DiscoverC } from "./styled-components";



function Discover (){
return (
    <div>
    <DiscoverC>
    <h1>Discover new music</h1>
    <img src={albums} className="albums" alt="albums" />
    <img src={micro} className="microphone" alt="microphone" />
    <img src={more} className="more" alt="more" />
    <p>By joining you can benefit by listening to the latest albums released</p>
</DiscoverC>
     <img src={covers} className="covers" alt="covers" />
     <Footer/>
   </div>
   )
   }
   



export default Discover;    
 
    