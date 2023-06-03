import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../styles/formContainer";
import { FormInput } from "../FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactsContext,
  UpdateContactParameter,
} from "../../providers/ContactsContext";
import { BrandButton } from "../BrandButton";
import { GreenButton } from "../GreenButton";
import { useContext } from "react";
import { UpdateContactSchema } from "../AddContactForm/ContactSchema";
import { Contacts } from "../../providers/ContactsContext";
import { RedButton } from "../RedButton";

export const UpdateContactForm = ({ contact }: { contact: Contacts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateContactParameter>({
    resolver: zodResolver(UpdateContactSchema),
    mode: "onBlur",
    values: contact,
  });

  const { setOpenModal, updateContact, deleteContact } = useContext(ContactsContext);

  return (
    <StyledFormContainer onSubmit={handleSubmit(updateContact)}>
      <h1>Editar contato</h1>

      <FormInput type="text" text="Nome completo" {...register("fullName")} />
      {errors.fullName && <p className="error">{errors.fullName.message}</p>}

      <FormInput type="text" text="Telefone" {...register("phone")} />
      {errors.phone && <p className="error">{errors.phone.message}</p>}

      <FormInput type="text" text="Email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <BrandButton text="Salvar" type="submit" />
      <div className="buttons">
        <GreenButton
          text="Voltar"
          type="button"
          callBack={() => setOpenModal(false)}
        />
        <RedButton
          text="Excluir contato"
          type="button"
          callBack={() => deleteContact(contact)}
        />
      </div>
    </StyledFormContainer>
  );
};
