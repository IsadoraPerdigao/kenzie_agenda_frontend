import { ContactsList } from "../../components/ContacsList";
import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { StyledContainer } from "./style";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <div className="dashTitles">
          <p>Nome</p>
          <p>E-mail</p>
          <p>Telefone</p>
        </div>
        <ContactsList />
        {/*<ContactForm />*/}
      </StyledContainer>
    </>
  );
};
