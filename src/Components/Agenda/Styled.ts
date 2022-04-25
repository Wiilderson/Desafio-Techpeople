import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  width: 100%;
  height: 804px;
  margin: auto;
  background-color: #f2f2f2;
`;

export const TextAgenda = styled.div`
  width: 949px;
  margin: auto;
  margin-top: 80px;
  h1 {
    margin-top: 60px;
    position: relative;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 54px;
  }

  p {
    margin-top: 30px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    color: #7d7d7d;
  }
`;

export const CardsAgendaContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 40px; */
  justify-content: space-between;
  margin: auto;
  width: 1127px;
  background-color: green;
  height: 390px;
  margin-top: 30px;
`;
export const CardAgenda = styled.div`
  width: 540px;
  height: 308px;
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
`;
