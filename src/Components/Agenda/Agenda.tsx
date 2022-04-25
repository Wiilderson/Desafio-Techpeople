import {
  CardAgenda,
  CardsAgendaContainer,
  Container,
  TextAgenda,
} from "./Styled";

function Agenda() {
  return (
    <Container>
      <TextAgenda>
        <h1>Anota ai nossa agenda</h1>
        <p>
          Temos um monte de eventos que estamos criando no nosso servidor. Fique
          de olho que sempre tem coisa boa!
        </p>
      </TextAgenda>

      <CardsAgendaContainer>
        <CardAgenda>a</CardAgenda>
        <CardAgenda>a</CardAgenda>
      </CardsAgendaContainer>
    </Container>
  );
}

export default Agenda;
