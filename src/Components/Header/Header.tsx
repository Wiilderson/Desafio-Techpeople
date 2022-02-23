import Logo from "../Logo";
import { ContainerHeader, Navbar } from "./Styled";

function Header() {
  return (
    <ContainerHeader>
      <Navbar>
        <Logo />
        <ul>
          <li>Home</li>
          <li>Compromisso</li>
          <li>Notícias</li>
          <li>Agenda</li>
        </ul>
      </Navbar>
    </ContainerHeader>
  );
}

export default Header;
