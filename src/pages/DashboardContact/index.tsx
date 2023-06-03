import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { GreenButton } from "../../components/GreenButton";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledDashboardContact } from "./style";
import {  ContactsContext } from "../../providers/ContactsContext";
import { StyledModalContainer } from "../../styles/modalContainer";
import { UpdateContactForm } from "../../components/UpdateContactForm";

export const DashboardContact = () => {

  const { token } = useContext(UserContext);

  const {
    openModal,
    setOpenModal,
    contact,
    firstLetter,
    getContact,
  } = useContext(ContactsContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (id) {
        getContact(id);
    }
  }, []);

  return (
    <>
      <Header />
      <StyledDashboardContact>
        <div className="contact-name">
          <div className="contact">
            <div>
              <span>{firstLetter}</span>
            </div>
            <p>{contact.fullName}</p>
          </div>
          <GreenButton
            type="button"
            text="Editar"
            callBack={() => setOpenModal(true)}
          />
        </div>
        <div className="contact-details">
          <h3>Detalhes do contato</h3>
          <div className="email">
            <p>Email:</p>
            <p>{contact.email}</p>
          </div>
          <div className="phone">
            <p>Telefone:</p>
            <p>{contact.phone}</p>
          </div>
        </div>
        {openModal ? (
          <StyledModalContainer>
            <UpdateContactForm contact={contact}/>
          </StyledModalContainer>
        ) : null}
      </StyledDashboardContact>
    </>
  );
};
