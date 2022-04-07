import { CardInfos, CardNews, CardsNews, Container, TextNews } from "./Styled";
import News1 from "../../Assets/News1.png";
import { AiOutlineCalendar } from "react-icons/ai";

function News() {
  return (
    <>
      <Container>
        <TextNews>
          <h1>Notícias</h1>
          <p>
            Listamos abaixo algumas notícias de tecnologia que nos motivam a
            estar ativos diariamente neste nosso projeto.
          </p>
        </TextNews>

        <CardsNews>
          <CardNews>
            <img src={News1} alt="estrela central" />
            <CardInfos>
              <AiOutlineCalendar />
              <h3>17 abr 2022</h3>
              <p>Participe da nossa Live sobre React e testes TDD</p>
            </CardInfos>
          </CardNews>
          <CardNews></CardNews>
          <CardNews></CardNews>
        </CardsNews>
      </Container>
      ;
    </>
  );
}

export default News;
