import {
  CardAgenda,
  CardContent,
  CardsAgendaContainer,
  Container,
  Data,
  HoursContent,
  Icons,
  LiveText,
  Paragrf,
  TextAgenda,
} from "./Styled";

import Carousel from "react-elastic-carousel";
import "./Styled.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function Agenda() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1400, itemsToShow: 2 },
  ];

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
        <Carousel isRTL={false} breakPoints={breakPoints}>
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
                Maiores voluptas laboriosam non dolorum perferendis fuga
                repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                voluptas voluptatem vero ex possimus. Iure et consectetur;
              </p>
            </Paragrf>
            <HoursContent>
              <p>Participar</p>
              <AiOutlineArrowRight
                size={17}
                color="#37474F"
                style={{
                  marginRight: "44%",
                  marginTop: "4px",
                  cursor: "pointer",
                }}
              />
              <Icons>
                <AiOutlineClockCircle
                  size={17}
                  color="#37474F"
                  style={{
                    marginLeft: "64%",
                    marginTop: "5px",
                  }}
                />
              </Icons>
              <span>19:00 - 22:00</span>
            </HoursContent>
          </CardAgenda>
          <CardAgenda>
            <CardContent>
              <Data>
                <span>25</span>
                <p>Dez</p>
              </Data>
              <LiveText>
                Live: React com TDD por Darlan Tódero ten Caten
              </LiveText>
            </CardContent>
            <Paragrf>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga
                repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                voluptas voluptatem vero ex possimus. Iure et consectetur;
              </p>
            </Paragrf>
            <HoursContent>
              <p>Participar</p>
              <AiOutlineArrowRight
                size={17}
                color="#37474F"
                style={{
                  marginRight: "44%",
                  marginTop: "4px",
                  cursor: "pointer",
                }}
              />
              <Icons>
                <AiOutlineClockCircle
                  size={17}
                  color="#37474F"
                  style={{
                    marginLeft: "64%",
                    marginTop: "5px",
                  }}
                />
              </Icons>
              <span>18:00 - 19:00</span>
            </HoursContent>
          </CardAgenda>

          <CardAgenda>
            <CardContent>
              <Data>
                <span>25</span>
                <p>Dez</p>
              </Data>
              <LiveText>
                Live: React com TDD por Darlan Tódero ten Caten
              </LiveText>
            </CardContent>
            <Paragrf>
              <p>
                Maiores voluptas laboriosam non dolorum perferendis fuga
                repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                voluptas voluptatem vero ex possimus. Iure et consectetur;
              </p>
            </Paragrf>
            <HoursContent>
              <p>Participar</p>
              <AiOutlineArrowRight
                size={17}
                color="#37474F"
                style={{
                  marginRight: "44%",
                  marginTop: "4px",
                  cursor: "pointer",
                }}
              />
              <Icons>
                <AiOutlineClockCircle
                  size={17}
                  color="#37474F"
                  style={{
                    marginLeft: "64%",
                    marginTop: "5px",
                  }}
                />
              </Icons>
              <span>18:00 - 19:00</span>
            </HoursContent>
          </CardAgenda>
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
                Maiores voluptas laboriosam non dolorum perferendis fuga
                repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                voluptas voluptatem vero ex possimus. Iure et consectetur;
              </p>
            </Paragrf>
            <HoursContent>
              <p>Participar</p>
              <AiOutlineArrowRight
                size={17}
                color="#37474F"
                style={{
                  marginRight: "44%",
                  marginTop: "4px",
                  cursor: "pointer",
                }}
              />
              <Icons>
                <AiOutlineClockCircle
                  size={17}
                  color="#37474F"
                  style={{
                    marginLeft: "64%",
                    marginTop: "5px",
                  }}
                />
              </Icons>
              <span>19:00 - 22:00</span>
            </HoursContent>
          </CardAgenda>
        </Carousel>
      </CardsAgendaContainer>
    </Container>
  );
}

export default Agenda;
