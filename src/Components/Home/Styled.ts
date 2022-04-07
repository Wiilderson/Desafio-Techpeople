import styled from "styled-components";

//Div estilos para Index.tsx
export const HomeDivs = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 1300px; */
  height: 500px;
  margin: auto;
  justify-content: center;
  display: flex;
  background-color: #f2f2f2;
`;

//container para position
export const TesteContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1300px;
`;

//Estilos para div em
export const DescriptionDivs = styled.div`
  width: 50%;
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 66px;

    span {
      color: #717cff;
    }
  }
`;

export const DivSpan = styled.div`
  margin-top: 20px;

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    color: #7d7d7d;
  }
`;

export const ButtonHome = styled.button`
  margin-top: 30px;
  margin-left: 10px;
  background: #717cff;
  border-radius: 11px;
  width: 262px;
  height: 64px;
  cursor: pointer;
  /* box-shadow: 0 0 0 0; */
  border: 0 none;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 40px;
  color: #ffffff;
  text-align: left;
  padding-left: 35px;
`;

//Estilos para div secundária

export const PicturesDiv = styled.div`
  width: 50%;
  img {
    width: 470px;
    height: 565px;
    margin-left: 155px;
  }
`;

export const BallViolet = styled.div`
  width: 1300px;
  img {
    /* position: relative;
    background: transparent;
    width: 1042px;
    height: 1320px;
    left: 559px;
    top: 20px; */
    position: relative;
    background: transparent;
    width: 794px;
    height: 1050px;
    left: 807px;
    top: -35px;
  }
`;
