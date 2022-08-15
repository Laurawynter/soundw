import micro from "../images/microphone.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import albums from "../images/albums.svg";
/*import Footer from "./Footer.js";*/
import { BoxA, BoxC, BoxM, Cov, DiscoverC,T,P } from "./StyledComponents";

function Discover() {
  return (
    <DiscoverC>
      <section className="discover">
       <T>Discover new music</T>
        
          <BoxA src={albums} className="albums" alt="albums"  />
        
       
        
          <BoxC src={micro} className="micro" alt="micro"  />
        
       
        
          <BoxM src={more} className="more" alt="more" />
        

        <P>
          By joining you can benefit by listening to the latest albums released
        </P>
      </section>

    
        <Cov src={covers} className="covers" alt="covers" />
        {/*<Footer />*/}
        
    </DiscoverC>
  );
}

export default Discover;
