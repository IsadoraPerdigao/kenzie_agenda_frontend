import { createContext, useState } from "react";
import { DeepPartial, SubmitHandler } from "react-hook-form";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { loginSchema } from "../pages/Login/LoginForm/loginSchema";
import { userSchema } from "../pages/Register/RegisterForm/userSchema";

export type LoginParameter = z.infer<typeof loginSchema>;
export type UserParameter = z.infer<typeof userSchema>;
export type UpdateUserParameter = DeepPartial<UserParameter>;

interface UserProviderValue {
  userRegister: SubmitHandler<UserParameter>;
  userLogin: SubmitHandler<LoginParameter>;
  userUpdate: SubmitHandler<UpdateUserParameter>;
  userDelete: (userData: UserParameter) => Promise<void>
  token: string | null;
  setOpenUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  openUserModal: boolean;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  const [openUserModal, setOpenUserModal] = useState(false);

  const userRegister = async (FormRegisterData: UserParameter) => {
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
      const accessToken: string = responseLogin.data.token;

      localStorage.setItem("@TOKEN", accessToken);

      toast.success("Login realizado com sucesso");

      const response = await api.get("users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      localStorage.setItem("@USERDATA", JSON.stringify(response.data));

      navigate("/dashboard");
    } catch (error: any) {
      toast.error("Email ou senha inválidos");
    }
  };

  const userUpdate = async (
    updateUserForm: UpdateUserParameter,
  ) => {
    await api.patch(`users/${updateUserForm.id}`, updateUserForm, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("@USERDATA", JSON.stringify(updateUserForm));
    setOpenUserModal(false)
  };

  const userDelete =async (userData: UserParameter) => {
    await api.delete(`users/${userData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERDATA")

    navigate("/")
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, token, setOpenUserModal, openUserModal, userUpdate, userDelete }}
    >
      {children}
    </UserContext.Provider>
  );
};
