import Compromisso from "../Components/Commitment/Compromisso";
import Header from "../Components/Header/Header";
import Home from "../Components/Home";

import { ContainerMain } from "./Styled";

function Main() {
  return (
    <>
      <ContainerMain>
        <Header />
      </ContainerMain>
      <Home />
      <Compromisso />
    </>
  );
}

export default Main;
