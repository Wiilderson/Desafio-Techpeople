import { createGlobalStyle } from "styled-components";
import Oval from "../src/Assets/Oval.svg";

const globalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    background-color: #F2F2F2;     
    /* margin: auto; */
}
    /* html { 
    background-image: url(${Oval});
    background-repeat: no-repeat;
    background-size: cover;
} */
`;

export default globalStyles;
