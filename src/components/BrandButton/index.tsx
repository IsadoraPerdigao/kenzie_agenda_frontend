import { ButtonProps } from "../../interfaces/ButtonProps";
import { StyledBrandButton } from "./style";

export const BrandButton = ({ text, type, callBack }: ButtonProps) => {
  return <StyledBrandButton type={type} onClick={callBack}>{text}</StyledBrandButton>;
};
