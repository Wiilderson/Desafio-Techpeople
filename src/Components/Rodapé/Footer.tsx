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
          <a href="https://www.facebook.com/" target={"_blank"}>
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
          </a>

          <a href="https://twitter.com/" target={"_blank"}>
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
          </a>

          <a href="https://www.instagram.com/" target={"_blank"}>
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
          </a>
        </SocialsMedias>
      </Content>
    </ContainerFooter>
  );
}

export default Footer;
