import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const CardsNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1120px;
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
  margin: 28px 0px 0px 27px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;

  flex-wrap: wrap;

  h3 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 19px;
    color: #656465;
  }

  p {
    margin: 15px 0px 0px 0px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #656465;
  }
`;

export const Paragrf = styled.div`
  width: 290px;
`;
