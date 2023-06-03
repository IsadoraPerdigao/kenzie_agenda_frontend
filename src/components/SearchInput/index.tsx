import { useContext, useState } from "react";
import { StyledSearchInput } from "./style";
import { ContactsContext } from "../../providers/ContactsContext";
import { api } from "../../api/api";

export const SearchInput = () => {
  const [idPesquisa, setIdPesquisa] = useState(0);
  const { setFilteredContacts } = useContext(ContactsContext);
  const token = localStorage.getItem("@TOKEN")

  const handleTermChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
    if(idPesquisa) {
      clearTimeout(idPesquisa)
    }

    const newIdPesquisa = setTimeout(async () => {
      const result = await api.get(`/contacts/?name=${target.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFilteredContacts(result.data)
    }, 500);

    setIdPesquisa(newIdPesquisa)
  }

  return <StyledSearchInput placeholder="Pesquisa" onChange={handleTermChange} />;
};
