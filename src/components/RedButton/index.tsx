import { ButtonProps } from "../../interfaces/ButtonProps"
import { StyledRedButton } from "./style"

export const RedButton = ({text, type, callBack} : ButtonProps) => {
    return (
        <StyledRedButton type={type} onClick={callBack}>
            {text}
        </StyledRedButton>
    )
}