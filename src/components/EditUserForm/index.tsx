import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../styles/formContainer";
import { FormInput } from "../FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateContactParameter } from "../../providers/ContactsContext";
import { updateUserSchema } from "../../pages/Register/RegisterForm/userSchema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { GreenButton } from "../GreenButton";
import { BrandButton } from "../BrandButton";
import logoutIcon from "../../assets/img/logoutIcon.svg";
import { useNavigate } from "react-router-dom";
import { RedButton } from "../RedButton";

export const EditUserForm = () => {
  const user = JSON.parse(localStorage.getItem("@USERDATA")!);
  const { userUpdate, setOpenUserModal, userDelete } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateContactParameter>({
    resolver: zodResolver(updateUserSchema),
    mode: "onBlur",
    values: user,
  });

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERDATA");
    setOpenUserModal(false);
    navigate("/");
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(userUpdate)}>
      <div className="edit-user-form-header">
        <h1>Editar usuário</h1>
        <div onClick={() => logout()}>
          <img src={logoutIcon} alt="Ícone de logout" />
          <p>Logout</p>
        </div>
      </div>

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
          callBack={() => setOpenUserModal(false)}
        />
        <RedButton text="Deletar conta" type="button" callBack={() => userDelete(user)}/>
      </div>
    </StyledFormContainer>
  );
};
