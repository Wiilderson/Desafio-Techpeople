import styled from "styled-components";

export const HomeDivs = styled.div`
  max-width: 1300px;
  height: 500px;
  margin: auto;
  /* background-color: gray; */
`;

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
