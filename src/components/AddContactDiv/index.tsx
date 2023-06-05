import { useContext } from "react";
import plusIcon from "../../assets/img/plusIcon.svg";
import { StyledAddContactDiv } from "./style";
import { ContactsContext } from "../../providers/ContactsContext";

export const AddContactDiv = () => {
  const { setOpenModal } = useContext(ContactsContext);

  return (
    <StyledAddContactDiv onClick={() => setOpenModal(true)}>
      <img src={plusIcon} alt="Símbolo de soma matemática" />

      <p>Criar contato</p>
    </StyledAddContactDiv>
  );
};
