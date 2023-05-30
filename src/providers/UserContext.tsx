import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { loginSchema } from "../pages/Login/LoginForm/loginSchema";
import { registerSchema } from "../pages/Register/RegisterForm/registerSchema";

export type LoginParameter = z.infer<typeof loginSchema>;
export type RegisterParameter = z.infer<typeof registerSchema>;

interface UserProviderValue {
  userLogin: SubmitHandler<LoginParameter>;
  userRegister: SubmitHandler<RegisterParameter>;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const userRegister = async (FormRegisterData: RegisterParameter) => {
    try {
      await api.post("users/", FormRegisterData);

      toast.success("Registro realizado com sucesso!");

      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const userLogin = async (FormData: LoginParameter) => {
    try {
      const responseLogin = await api.post("login/", FormData);
      const { accessToken } = await responseLogin.data;

      localStorage.setItem("@TOKEN", accessToken);

      toast.success("Login realizado com sucesso");

      navigate("/dashboard");
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
