import { useContext } from "react"
import { StyledFormContainer } from "../../../styles/formContainer"
import { RegisterParameter, UserContext } from "../../../providers/UserContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormInput } from "../../../components/FormInput"
import { BrandButton } from "../../../components/BrandButton"
import { Link } from "react-router-dom"
import { GreenButton } from "../../../components/GreenButton"
import { registerSchema } from "./registerSchema"

export const RegisterForm = () => {
    const {userRegister} = useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterParameter>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur"
    })
    return (
        <StyledFormContainer onSubmit={handleSubmit(userRegister)}>
            <FormInput type="text" text="Nome completo" {...register("fullName")} />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
            <FormInput type="text" text="Telefone" {...register("phoneNumber")} />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
            <FormInput type="text" text="Email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <FormInput type="password" text="Senha" {...register("password")} />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <BrandButton type="submit" text="Cadastrar" />
            <div className="line"></div>
            <Link to={"/"}>
                <GreenButton text="Voltar para Login" type="button" />
            </Link>
            
        </StyledFormContainer>
    )
}