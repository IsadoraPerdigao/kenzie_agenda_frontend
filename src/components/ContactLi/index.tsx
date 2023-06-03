import { useNavigate, useParams } from "react-router-dom";
import { StyledLi } from "./style";

interface ContactLiProps {
  contact: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
}

export const ContactLi = ({ contact }: ContactLiProps) => {
  const firstLetter = contact.fullName.slice(0, 1);
  const  id  = contact.id;
  const navigate = useNavigate()

  return (
    <StyledLi onClick={() => navigate(`/dashboard/${id}`)}>
      <div className="contactName">
        <div>
          <span>{firstLetter}</span>
        </div>
        <p>{contact.fullName}</p>
      </div>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </StyledLi>
  );
};
