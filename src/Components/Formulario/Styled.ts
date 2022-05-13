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
  margin-top: 95px;
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
  height: 157px;
  /* margin-bottom: 110px; */
  flex-direction: column;
  align-items: center;

  form {
    gap: 10px;
    width: 1126px;
    display: flex;
  }
`;

export const Input = styled.input`
  width: 290px;
  height: 64px;
  /* background: #ffffff; */
  /* border: 1px solid #dedede; */
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;

  &:focus {
    outline: none;
    background: ${(props) => props.color};
    border: 2px solid #909090;
    box-sizing: border-box;
    border-radius: 8px;
  }
`;

export const InputButton = styled.button`
  background: #717cff;
  border-radius: 11px;
  width: 262px;
  height: 64px;
  cursor: pointer;
  border: 0 none;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  color: #ffffff;
  text-align: left;
  padding-left: 35px;
`;

export const Alerta = styled.div`
  width: 151px;
  height: 21px;
  align-self: center;
  margin-top: 5px;
  margin-left: 237px;
`;

// componente LOADING...

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 379px; */
  margin: auto;
  background-color: #fafafa;
  align-items: center;
  img {
    width: 64px;
    height: 64px;
  }
  h1 {
    margin-top: 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`;

// componente SUCCESS...

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  background-color: #fafafa;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 43px;
    color: #252525;
  }

  p {
    margin-top: 15px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: rgba(55, 71, 79, 0.72);
  }

  button {
    margin-top: 30px;
    width: 169px;
    height: 48px;
    background: #717cff;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    color: #ffffff;
    cursor: pointer;
    border: 0 none;
  }
`;
