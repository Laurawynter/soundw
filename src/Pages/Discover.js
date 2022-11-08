
import micro from "../assets/microphone.svg";
import more from "../assets/more.svg";
import covers from "../assets/covers.jpg";
import albums from "../assets/albums.svg";
import {Cov,T,P, D, BC,BA,BM,BD} from "../components/StyledComponents";


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
      
        </div>
        </D>
       
     
     
   
  );
}

export default Discover;
