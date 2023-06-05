import { useContext, useEffect } from "react";
import { ContactsList } from "../../components/ContacsList";
import { Header } from "../../components/Header";
import { StyledContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { ContactsContext } from "../../providers/ContactsContext";
import { EmptyContactsList } from "../../components/EmptyContactsList";
import { StyledModalContainer } from "../../styles/modalContainer";
import { AddContactForm } from "../../components/AddContactForm";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const { filteredContacts, setLoadContacts } = useContext(ContactsContext);
  const { openModal } = useContext(ContactsContext);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    setLoadContacts(true)

  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <div className="dashTitles">
          <p>Nome</p>
          <p>E-mail</p>
          <p>Telefone</p>
        </div>

        {filteredContacts.length ? <ContactsList /> : <EmptyContactsList />}

        {openModal ? (
          <StyledModalContainer>
            <AddContactForm />
          </StyledModalContainer>
        ) : null}
      </StyledContainer>
    </>
  );
};
