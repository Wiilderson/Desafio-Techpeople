import { ButtonHome, DescriptionDivs, DivSpan } from "./Styled";
import { AiOutlineArrowDown } from "react-icons/ai";

function Teste() {
  return (
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
    </DescriptionDivs>
  );
}

export default Teste;
