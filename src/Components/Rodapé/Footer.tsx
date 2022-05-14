import {
  ContainerFooter,
  Content,
  FooterContent,
  SocialsMedias,
} from "./Styled";
import logo from "../../Assets/logofooter.svg";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import "./Styled.css";

function Footer() {
  return (
    <ContainerFooter>
      <Content>
        <FooterContent>
          <img src={logo} alt="mini logo footer" />
          <p>Iniciativa Pessoas de Tech Todos os direitos reservados</p>
        </FooterContent>
        <SocialsMedias>
          <FaFacebookF
            className="social-medias"
            size={18}
            color="#FFFFFF"
            style={{
              //     backgroundColor: "transparent",
              //     // position: "absolute",
              //     marginTop: "23px",
              //     marginLeft: "-63px",
              cursor: "pointer",
            }}
          />
          <FiTwitter
            className="social-medias"
            size={20}
            color="#FFFFFF"
            style={{
              //     backgroundColor: "transparent",
              //     // position: "absolute",
              //     marginTop: "23px",
              //     marginLeft: "-63px",
              cursor: "pointer",
            }}
          />
          <BsInstagram
            className="social-medias"
            size={20}
            color="#FFFFFF"
            style={{
              //     backgroundColor: "transparent",
              //     // position: "absolute",
              //     marginTop: "23px",
              //     marginLeft: "-63px",
              cursor: "pointer",
            }}
          />
        </SocialsMedias>
      </Content>
    </ContainerFooter>
  );
}

export default Footer;
