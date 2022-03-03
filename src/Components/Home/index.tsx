import { BallViolet, HomeDivs } from "./Styled";
import Teste from "./Teste";

import Oval from "../../Assets/Oval.svg";

function Home() {
  return (
    <HomeDivs>
      <BallViolet>
        <img src={Oval} alt="bola oval violeta" />
      </BallViolet>
      <Teste />
    </HomeDivs>
  );
}

export default Home;
