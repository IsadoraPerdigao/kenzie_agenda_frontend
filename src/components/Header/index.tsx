import logo from "../../assets/img/logo.svg";
import searchIcon from "../../assets/img/searchIcon.svg";
import { StyledHeader } from "./style";
import { SearchInput } from "../SearchInput";
import { Link, useLocation } from "react-router-dom";
import { AddContactDiv } from "../AddContactDiv";
import { UserInfo } from "../UserInfo";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { EditUserForm } from "../EditUserForm";
import { StyledModalContainer } from "../../styles/modalContainer";

export const Header = () => {
  const location = useLocation();

  const { openUserModal } = useContext(UserContext);

  return (
    <StyledHeader>
      <Link to={"/dashboard"}>
        <div className="logo">
          <img src={logo} alt="Ícone de perfil azul" />
          <h1>Contatos</h1>
        </div>
      </Link>

      <div className="searchInput">
        <img src={searchIcon} alt="Ícone de lupa" />
        <SearchInput />
      </div>

      {location.pathname === "/dashboard" ? <AddContactDiv /> : null}

      <UserInfo />
      {openUserModal ? (
        <StyledModalContainer>
          <EditUserForm />
        </StyledModalContainer>
      ) : null}
    </StyledHeader>
  );
};
