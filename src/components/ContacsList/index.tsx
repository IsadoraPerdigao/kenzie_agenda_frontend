import { StyledContactsList } from "./style";

export const ContactsList = () => {
  return (
    <StyledContactsList>
      <li>
        <div className="contactName">
          <div>
            <span>A</span>
          </div>
          <p>Alexandre</p>
        </div>
        <p>alexandre@mail.com</p>
        <p>987252388</p>
      </li>
      <li>
        <div className="contactName">
          <div>
            <span>C</span>
          </div>
          <p>Caio</p>
        </div>
        <p>caio@mail.com</p>
        <p>987252388</p>
      </li>
    </StyledContactsList>
  );
};
