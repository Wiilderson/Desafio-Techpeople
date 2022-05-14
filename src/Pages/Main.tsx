import Agenda from "../Components/Agenda/Agenda";
import Compromisso from "../Components/Commitment/Compromisso";
import Forms from "../Components/Formulario/Forms";
import Header from "../Components/Header/Header";
import Home from "../Components/Home";
import News from "../Components/News/News";
import Footer from "../Components/Rodapé/Footer";

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
      <Agenda />
      <Forms />
      <Footer />
    </>
  );
}

export default Main;
