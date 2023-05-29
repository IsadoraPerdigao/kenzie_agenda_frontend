import { useContext } from "react";
import { StyledFormContainer } from "../../../styles/formContainer";
import { LoginParameter, UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { FormInput } from "../../../components/FormInput";
import { BrandButton } from "../../../components/BrandButton";
import { Link } from "react-router-dom";
import { GreenButton } from "../../../components/GreenButton";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParameter>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  return (
    <StyledFormContainer onSubmit={handleSubmit(userLogin)}>
      <FormInput type="text" text="Email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <FormInput type="password" text="Senha" {...register("password")} />
      {errors.password && <p className="error">{errors.password.message}</p>}
      <BrandButton type="submit" text="Log In" />
      <div className="line"></div>
      <Link to={"/register"}>
        <GreenButton text="Criar nova conta" type="button" />
      </Link>
    </StyledFormContainer>
  );
};
