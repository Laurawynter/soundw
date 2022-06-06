import micro from "../images/microphone.svg";
import more from "../images/more.svg"
import covers from "../images/covers.jpg";
import albums from"../images/albums.svg"
import Footer from "./Footer.js"
import {BoxA, BoxM,BoxE, DiscoverC, ImgC} from"./styled-components"




function Discover (){
return (
    <div>
    <DiscoverC>
    <h1>Discover new music</h1>
    <BoxA> <img src={albums} className="albums" alt="albums" /></BoxA>
    <BoxM><img src={micro} className="microphone" alt="microphone" /></BoxM>
    <BoxE><img src={more} className="more" alt="more" /></BoxE>
    <p>By joining you can benefit by listening to the latest albums released</p>
</DiscoverC>
     <ImgC><img src={covers} className="covers" alt="covers" /></ImgC>
     <Footer/>
   </div>
   )
   }
   



export default Discover;    
 
    