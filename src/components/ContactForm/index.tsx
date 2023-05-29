import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../styles/formContainer";
import { FormInput } from "../FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./ContactSchema";
import { AddContactParameter } from "../../providers/ContactsContext";
import { BrandButton } from "../BrandButton";
import { GreenButton } from "../GreenButton";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactParameter>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
  });

  return (
    <StyledFormContainer>
      <h1>Novo contato</h1>
      <FormInput type="text" text="Nome completo" {...register("fullName")} />
      {errors.fullName && <p className="error">{errors.fullName.message}</p>}
      <FormInput type="text" text="Telefone" {...register("phoneNumber")} />
      {errors.phoneNumber && (
        <p className="error">{errors.phoneNumber.message}</p>
      )}
      <FormInput type="text" text="Email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <BrandButton text="Adicionar contato" type="submit" />
      <GreenButton text="Voltar" type="button" />
    </StyledFormContainer>
  );
};
