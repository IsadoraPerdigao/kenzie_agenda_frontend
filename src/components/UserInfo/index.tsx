import { useContext } from "react";
import { StyledUserInfo } from "./style";
import { UserContext } from "../../providers/UserContext";

export const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem("@USERDATA")!);

  const firstLetterUser = user.fullName.slice(0, 1);

  const { setOpenUserModal } = useContext(UserContext)

  return (
    <StyledUserInfo onClick={() => setOpenUserModal(true)}>
      <span>{firstLetterUser}</span>
    </StyledUserInfo>
  );
};
