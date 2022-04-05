import {
  CardBloco,
  CardsCompromisse,
  Container,
  Divsplit,
  Img,
  Paragrf,
  Paragrf2,
  Span,
  Span2,
  TextCompromisse,
} from "./Styled";
import Escudo from "../../Assets/Group.svg";
import Stars from "../../Assets/stars1.svg";
import EscudoRed from "../../Assets/Rectangle.svg";
import School from "../../Assets/school.svg";
import EscudoVerde from "../../Assets/Escudoverde.svg";
import Check from "../../Assets/Check.svg";

function Compromisso() {
  return (
    <>
      <Container>
        <Divsplit></Divsplit>
        <TextCompromisse>
          <h1>Nosso Comprimisso</h1>
          <p>
            Temos um compromisso de fazer desafios e gerar avaliações precisas
            para que você saiba o quanto está evoluíndo. Acreditamos que você
            merece uma avaliação justa e precisa do seu processo.
          </p>
        </TextCompromisse>
        <CardsCompromisse>
          <CardBloco>
            <Img src={Escudo} alt="escudo de fundo" />
            <Span>
              <img src={Stars} alt="estrela central" />
            </Span>
            <h4>Avaliar Positivamente</h4>

            <Paragrf>
              <p>
                Entendemos que você está aprendendo. A gente também passou por
                esta fase, e sabemos que as coisas mudam muito rápido.
              </p>
            </Paragrf>
          </CardBloco>

          <CardBloco>
            <Img src={EscudoRed} alt="escudo de fundo red" />
            <Span>
              <img src={School} alt="escola chapeu" />
            </Span>
            <h4>Apoio pós-desafio</h4>

            <Paragrf>
              <p>
                Você saberá como está evoluindo, e nós aprendemos a deixar o
                nosso processo avaliativo mais seguro e de confiança.
              </p>
            </Paragrf>
          </CardBloco>

          <CardBloco>
            <Img src={EscudoVerde} alt="escudo de fundo" />
            <Span2>
              <img src={Check} alt="estrela central" />
            </Span2>
            <h4>Avaliar o que faz sentido</h4>

            <Paragrf2>
              <p>
                Nada de algoritmo de número primo ou de árvore binária. Nossos
                desafios se basearam no que você irá realmente trabalhar no
                futuro.
              </p>
            </Paragrf2>
          </CardBloco>
        </CardsCompromisse>
      </Container>
    </>
  );
}
export default Compromisso;
