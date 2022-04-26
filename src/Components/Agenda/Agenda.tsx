import {
  CardAgenda,
  CardContent,
  CardsAgendaContainer,
  Container,
  Data,
  HoursContent,
  LiveText,
  Paragrf,
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
        <CardAgenda>
          <CardContent>
            <Data>
              <span>20</span>
              <p>Jun</p>
            </Data>
            <LiveText>
              Live: Iniciando com Nuxt por Mateus Ávila Isidoro
            </LiveText>
          </CardContent>
          <Paragrf>
            <p>
              Maiores voluptas laboriosam non dolorum perferendis fuga repellat
              aut. Blanditiis quos in minus. Voluptatum quia quia voluptas
              voluptatem vero ex possimus. Iure et consectetur;
            </p>
          </Paragrf>
          <HoursContent>
            <p>Participar</p>
            <span>19:00 - 22:00</span>
          </HoursContent>
        </CardAgenda>
        <CardAgenda>a</CardAgenda>
      </CardsAgendaContainer>
    </Container>
  );
}

export default Agenda;
