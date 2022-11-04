
import micro from "../images/microphone.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import albums from "../images/albums.svg";
/*import Footer from "./Footer.js";*/
import {Cov,T,P, D, BC,BA,BM,BD} from "./StyledComponents";


function Discover() {
  return (
  
  <D className="discover-container">
      <T>Discover new music</T>
       <BC className="box-container">
        <BA className="BoxA">
          <img src={albums} className="albums" alt="charts" />
          <span>Charts</span>
        </BA>
        <BM className="BoxM">
          <img src={micro} className="micro" alt="micro" />
          <span>Micro</span>
        </BM>
        <BD className="BoxD">
       <img src={more} className="more" alt="more" />
          <span>More</span>
        </BD>
        </BC>
      
      <P>
        By joining you can benefit by listening to the latest albums released.
      </P>
     <div>
     
      <Cov src={covers} className="covers" alt="covers" />
        {/*<Footer />*/}
        </div>
        </D>
       
     
     
   
  );
}

export default Discover;
