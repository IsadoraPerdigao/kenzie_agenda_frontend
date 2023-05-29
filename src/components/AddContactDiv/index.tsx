import plusIcon from "../../assets/img/plusIcon.svg";
import { StyledAddContactDiv } from "./style";

export const AddContactDiv = () => {
  return (
    <StyledAddContactDiv>
      <img src={plusIcon} alt="Símbolo de soma matemática" />
      <p>Criar contato</p>
    </StyledAddContactDiv>
  );
};
