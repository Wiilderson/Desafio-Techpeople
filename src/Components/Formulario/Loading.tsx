import loading from "../../Assets/loading.svg";
import { LoadContainer } from "./Styled";

function Loading() {
  return (
    <LoadContainer>
      <img src={loading} alt="Loading" />
      <h1>Carregando...</h1>
    </LoadContainer>
  );
}

export default Loading;
