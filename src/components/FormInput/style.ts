import { css, styled } from "styled-components";

export const StyledFormInput = styled.div<{ isFocused: boolean }>`
  width: 100%;
  padding: 0.5em;

  border-radius: 5px;

  ${(props) => {
    if (props.isFocused) {
      return css`
        border: 2px solid var(--color-blue-100);
      `;
    } else {
      return css`
        border: 2px solid var(--color-gray-300);
      `;
    }
  }}

  input {
    border: none;
    color: var(--color-gray-600);
    font-size: 1rem;
    padding: 0.5em
  }
`;
