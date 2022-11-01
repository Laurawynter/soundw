import micro from "../images/microphone.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import albums from "../images/albums.svg";
/*import Footer from "./Footer.js";*/
import { BoxC, BoxA, BoxM,BoxD,Cov, DiscoverC,T,P } from "./StyledComponents";

function Discover() {
  return (
    <DiscoverC>
      <div className="discover-container">
       <T>Discover new music</T>

        <BoxC className ="box-container">
          <BoxA src={albums} className="albums" alt="albums"  />
        
       
        
          <BoxD src={micro} className="micro" alt="micro"  />
        
       
        
          <BoxM src={more} className="more" alt="more" />
        </BoxC>

        <P>
          By joining you can benefit by listening to the latest albums released.
        </P>
      </div>

    
        <Cov src={covers} className="covers" alt="covers" />
        {/*<Footer />*/}
        
    </DiscoverC>
  );
}

export default Discover;
