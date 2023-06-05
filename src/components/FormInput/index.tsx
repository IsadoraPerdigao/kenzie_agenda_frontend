import { forwardRef, useState } from "react";
import { StyledFormInput } from "./style";

interface FormInputProps {
  text: string;
  type: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ text, type, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <StyledFormInput isFocused={isFocused}>
        <input
          ref={ref}
          placeholder={text}
          onFocus={() => setIsFocused(true)}
          onBlurCapture={() => setIsFocused(false)}
          type={type}
          {...rest}
        />
      </StyledFormInput>
    );
  }
);
