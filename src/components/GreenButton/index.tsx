import { ButtonProps } from "../../interfaces/ButtonProps";
import { StyledGreenButton } from "./style";

export const GreenButton = ({ text, type, callBack }: ButtonProps) => {
  return <StyledGreenButton type={type} onClick={callBack}>{text}</StyledGreenButton>;
};