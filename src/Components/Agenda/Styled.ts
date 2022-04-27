import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
  margin: auto;
  width: 1127px;
  /* width: 1400px; */
  background-color: green;
  height: 390px;
  margin-top: 30px;
`;
export const CardAgenda = styled.figure`
  width: 540px;
  height: 308px;
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  width: 446px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 29px;
`;

export const Data = styled.div`
  width: 76px;
  height: 76px;
  justify-content: center;
  background: rgb(113, 124, 255, 0.14);
  border-radius: 11px;
  display: flex;
  flex-direction: column;

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 32px;
    text-align: center;
    color: #717cff;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #717cff;
  }
`;

export const LiveText = styled.h3`
  width: 350px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: #37474f;
`;

export const Paragrf = styled.div`
  width: 481px;
  height: 91px;
  margin: 28px 0 0 29px;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.444444px;
    color: rgba(55, 71, 79, 0.721569);
  }
`;

export const HoursContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 481px;
  margin: 28px 0 0 29px;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.439286px;
    color: #717cff;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 28px;
    text-align: right;
    letter-spacing: 0.444444px;
    color: #373737;
  }
`;
