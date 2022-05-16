import {
  ButtonHome,
  DescriptionDivs,
  DivSpan,
  PicturesDiv,
  TesteContainer,
} from "./Styled";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";
import WomanStudant from "../../Assets/womanStudant.png";

function Teste() {
  return (
    <TesteContainer>
      <DescriptionDivs>
        <p>
          Somos um servidor
          <span> focado em transição de </span>
          carreira
        </p>

        <DivSpan>
          <span>
            Temos desafios, lives, eventos, tiramos dúvidas e até achamos uma
            colocação para você. Quer fazer parte? Clique no botão abaixo:
          </span>
        </DivSpan>

        <Link
          to="compromisso"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          <ButtonHome>Participar</ButtonHome>
          <AiOutlineArrowDown
            size={23}
            color="#37474F"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              marginTop: "52px",
              marginLeft: "-41px",
              cursor: "pointer",
            }}
          />
        </Link>
      </DescriptionDivs>
      <PicturesDiv>
        <img src={WomanStudant} alt="mulher estudante" />
      </PicturesDiv>
    </TesteContainer>
  );
}

export default Teste;
