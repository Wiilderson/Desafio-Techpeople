import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  width: 100%;
  height: 851px;
  margin: auto;
  background-color: #fafafa;
  margin-top: 67%;
`;

export const TextNews = styled.div`
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

export const CardsNews = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 40px; */
  justify-content: space-between;
  margin: auto;
  width: 1120px;
  background-color: green;
  height: 405px;
  margin-top: 30px;
`;

export const CardNews = styled.div`
  width: 344px;
  height: 406px;
  background: #ffffff;
  box-shadow: 0px 0px 77px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
`;

export const CardInfos = styled.div`
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #656465;
  }
`;
