import {
  Alerta,
  Container,
  FormsContainer,
  Input,
  InputButton,
  TextForms,
} from "./Styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import Loading from "./Loading";
import Success from "./Success";

interface FormInputs {
  fullName: string;
  email: string;
  fone: number;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/;

const formSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    fone: yup.string().matches(phoneRegExp, "Digite apenas números"),
  })
  .required();

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
  });

  const [showLoader, setShowLoader] = useState(false);

  function onSubmit(data: FormInputs) {
    setShowLoader(true);
    console.log(data);
    // setShowLoader(false);
  }
  return (
    <>
      <Container>
        {!showLoader ? (
          <>
            <TextForms>
              <h1>Preparado para fazer parte da nossa iniciativa?</h1>

              <p>
                Preencha todos os campos para que possamos entrar em contato.
              </p>
            </TextForms>
            <FormsContainer>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  {...register("fullName")}
                  placeholder="Nome completo"
                  theme={errors.fullName?.type ? "#F49A9A" : "#DEDEDE"}
                  color={errors.fullName?.type ? "#F9ECEC" : "#FFFFFF"}
                />
                <Input
                  {...register("email")}
                  placeholder="E-mail"
                  theme={errors.email?.type ? "#F49A9A" : "#DEDEDE"}
                  color={errors.email?.type ? "#F9ECEC" : "#FFFFFF"}
                />
                <Input
                  {...register("fone")}
                  placeholder="Telefon Celular"
                  theme={errors.fone?.type ? "#F49A9A" : "#DEDEDE"}
                  color={errors.fone?.type ? "#F9ECEC" : "#FFFFFF"}
                />
                <InputButton type="submit">Cadastre-se</InputButton>
                <AiOutlineArrowRight
                  size={23}
                  color="#37474F"
                  style={{
                    backgroundColor: "transparent",
                    // position: "absolute",
                    marginTop: "23px",
                    marginLeft: "-63px",
                    cursor: "pointer",
                  }}
                />
              </form>
              <Alerta>
                <p>{errors.fone?.message}</p>
              </Alerta>
            </FormsContainer>
          </>
        ) : (
          <Loading />
        )}

        {/* {<Loading /> ? <Success /> : <Forms />} */}

        {/* {showLoader && <Loading />} */}
      </Container>
    </>
  );
}

export default Forms;
