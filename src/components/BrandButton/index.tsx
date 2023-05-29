import { ButtonProps } from "../../interfaces/ButtonProps";
import { StyledBrandButton } from "./style";

export const BrandButton = ({ text, type }: ButtonProps) => {
  return <StyledBrandButton type={type}>{text}</StyledBrandButton>;
};
