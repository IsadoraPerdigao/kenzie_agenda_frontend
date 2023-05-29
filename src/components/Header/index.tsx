import logo from "../../assets/img/logo.svg";
import searchIcon from "../../assets/img/searchIcon.svg";
import logoutIcon from "../../assets/img/logoutIcon.svg";

import { StyledHeader } from "./style";
import { SearchInput } from "../SearchInput";
import { Link } from "react-router-dom";
import { AddContactDiv } from "../AddContactDiv";

export const Header = () => {
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
      <AddContactDiv />
      <div className="logout">
        <img src={logoutIcon} alt="Ícone de saída da página" />
        <span>Sair</span>
      </div>
    </StyledHeader>
  );
};
