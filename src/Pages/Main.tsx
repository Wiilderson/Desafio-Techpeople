import Compromisso from "../Components/Commitment/Compromisso";
import Header from "../Components/Header/Header";
import Home from "../Components/Home";
import News from "../Components/News/News";

import { ContainerMain } from "./Styled";

function Main() {
  return (
    <>
      <ContainerMain>
        <Header />
      </ContainerMain>
      <Home />
      <Compromisso />
      <News />
    </>
  );
}

export default Main;
