import { LoginForm } from "./LoginForm";
import { StyledLoginPage } from "./style";

export const Login = () => {
  return (
    <StyledLoginPage>
        <div>
            <h1>Agenda Kenzie</h1>
            <p>Salve seus contatos e tenha acesso</p>
            <p>a eles em qualquer lugar</p>
        </div>
        <LoginForm />
    </StyledLoginPage>
  );
};
