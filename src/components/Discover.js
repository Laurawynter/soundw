import micro from "../images/microphone.svg";
import more from "../images/more.svg";
import covers from "../images/covers.jpg";
import albums from "../images/albums.svg";
import Footer from "./Footer.js";
import { BoxA, BoxC, BoxM } from "./StyledComponents";

function Discover() {
  return (
    <div>
      <section className="discover">
        <title>Discover new music</title>
        <div>
          <BoxA>
            
            <img src={albums} className="albums" alt="albums" />
          </BoxA>
          <BoxC>
            
            <img src={micro} className="micro" alt="micro" />
          </BoxC>
          <BoxM>
            
            <img src={more} className="more" alt="more" />{" "}
          </BoxM>
        </div>

        <text>
          By joining you can benefit by listening to the latest albums released
        </text>
      </section>

      <section>
        <img src={covers} className="covers" alt="covers" />
        <Footer />
      </section>
    </div>
  );
}

export default Discover;
