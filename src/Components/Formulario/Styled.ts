import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 379px;
  margin: auto;
  background-color: #fafafa;
`;
export const TextForms = styled.div`
  width: 1126px;
  margin: auto;
  margin-top: 80px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 43px;
    color: #252525;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 47px;
    color: rgba(55, 71, 79, 0.72);
  }
`;

export const FormsContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;

  form {
    gap: 10px;
    margin: auto;
    width: 1126px;
    display: flex;
  }
`;

export const Input = styled.input`
  width: 290px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;

  &:focus {
    outline: none;
    background: #ffffff;
    border: 2px solid #909090;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;
