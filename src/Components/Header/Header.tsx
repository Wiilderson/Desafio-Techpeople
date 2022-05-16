import { Link } from "react-scroll";
import Logo from "../Logo";
import { ContainerHeader, Navbar } from "./Styled";

function Header() {
  return (
    <ContainerHeader>
      <Navbar>
        <Logo />
        <ul>
          <li>Home</li>
          <li>
            <Link
              to="compromisso"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Compromisso
            </Link>
          </li>
          <li>
            <Link
              to="noticias"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              to="agenda"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Agenda
            </Link>
          </li>
        </ul>
      </Navbar>
    </ContainerHeader>
  );
}

export default Header;
