import { RegisterForm } from "./RegisterForm";
import { StyledRegisterPage } from "./style";

export const Register = () => {
  return (
    <StyledRegisterPage>
      <RegisterForm />
      <div>
        <h1>Agenda Kenzie</h1>
        <p>Salve seus contatos e tenha acesso</p>
        <p>a eles em qualquer lugar</p>
      </div>
    </StyledRegisterPage>
  );
};
