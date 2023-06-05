import { useContext } from "react";
import { StyledContactsList } from "./style";
import { ContactsContext } from "../../providers/ContactsContext";
import { ContactLi } from "../ContactLi";

export const ContactsList = () => {
  const { filteredContacts } = useContext(ContactsContext);

  const contactsLi = filteredContacts.map((contact) => (
    <ContactLi contact={contact} key={contact.id} />
  ));
  return <StyledContactsList>{contactsLi}</StyledContactsList>;
};
