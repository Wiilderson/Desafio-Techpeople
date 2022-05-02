import { Container, FormsContainer, Input, TextForms } from "./Styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormInputs {
  fullName: string;
  email: string;
  fone: number;
}

const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/;

const formSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneNumber),
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
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <Container>
      <TextForms>
        <h1>Preparado para fazer parte da nossa iniciativa?</h1>

        <p>Preencha todos os campos para que possamos entrar em contato.</p>
      </TextForms>

      <FormsContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("fullName")} placeholder="Nome completo" />
          <p>{errors.fullName?.message}</p>

          <input {...register("email")} placeholder="E-mail" />
          <p>{errors.email?.message}</p>

          <input type="submit" />
        </form>
      </FormsContainer>
    </Container>
  );
}

export default Forms;
