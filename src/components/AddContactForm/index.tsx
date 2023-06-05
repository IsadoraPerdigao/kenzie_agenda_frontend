import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../styles/formContainer";
import { FormInput } from "../FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./ContactSchema";
import {
  AddContactParameter,
  ContactsContext,
} from "../../providers/ContactsContext";
import { BrandButton } from "../BrandButton";
import { GreenButton } from "../GreenButton";
import { useContext } from "react";

export const AddContactForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactParameter>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
  });

  const { setOpenModal, registerContact } = useContext(ContactsContext);

  return (
    <StyledFormContainer onSubmit={handleSubmit(registerContact)}>
      <h1>Novo contato</h1>

      <FormInput type="text" text="Nome completo" {...register("fullName")} />
      {errors.fullName && <p className="error">{errors.fullName.message}</p>}

      <FormInput type="text" text="Telefone" {...register("phone")} />
      {errors.phone && <p className="error">{errors.phone.message}</p>}

      <FormInput type="text" text="Email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <BrandButton text="Adicionar contato" type="submit" />

      <GreenButton
        text="Voltar"
        type="button"
        callBack={() => setOpenModal(false)}
      />

    </StyledFormContainer>
  );
};
