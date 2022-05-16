import {
  CardInfos,
  CardNews,
  CardsNewsContainer,
  Container,
  Paragrf,
  TextNews,
} from "./Styled";
import News1 from "../../Assets/News1.png";
import News2 from "../../Assets/News2.png";
import News3 from "../../Assets/News3.png";
import { AiOutlineCalendar } from "react-icons/ai";

function News() {
  return (
    <>
      <Container>
        <TextNews id="noticias">
          <h1>Notícias</h1>
          <p>
            Listamos abaixo algumas notícias de tecnologia que nos motivam a
            estar ativos diariamente neste nosso projeto.
          </p>
        </TextNews>

        <CardsNewsContainer>
          <CardNews>
            <img src={News1} alt="imagem card 1" />
            <CardInfos>
              <AiOutlineCalendar size={20} color="#565656" />
              <h3>17 Abr 2022</h3>

              <p>Participe da nossa Live sobre React e testes TDD</p>
            </CardInfos>
          </CardNews>
          <CardNews>
            <img src={News2} alt="imagem card 2" />
            <CardInfos>
              <AiOutlineCalendar size={20} color="#565656" />
              <h3>21 Abr 2022</h3>

              <p>Participe da nossa live de Nuxt para a Turing</p>
            </CardInfos>
          </CardNews>
          <CardNews>
            <img src={News3} alt="imagem card 3" />
            <CardInfos>
              <AiOutlineCalendar size={20} color="#565656" />
              <h3>03 Mai 2022</h3>
              <Paragrf>
                <p>Como apoiar uma desenvolvedora em início de carreira?</p>
              </Paragrf>
            </CardInfos>
          </CardNews>
        </CardsNewsContainer>
      </Container>
    </>
  );
}

export default News;
