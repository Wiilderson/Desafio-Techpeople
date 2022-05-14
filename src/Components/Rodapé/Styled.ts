import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 181px;
  background: #717cff;
  display: flex;
`;

export const Content = styled.div`
  width: 1135px;
  height: 72px;
  align-items: center;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    width: 70px;
    height: 70px;
  }

  p {
    width: 264px;
    height: 52px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #eeeeee;
  }
`;

export const SocialsMedias = styled.div`
  align-items: center;
  display: flex;
  gap: 25px;
  margin-right: -25px;
`;
