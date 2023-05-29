import styled from "styled-components";

export const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 1.25em;
  background-color: var(--color-gray-100);
  border: 2px solid var(--color-gray-100);
  border-radius: 8px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;

  .error {
    color: var(--color-red-100);
    font-size: 0.8rem;
  }

  .line {
    width: 100%;
    border-bottom: 1px solid var(--color-gray-300);
  }

  h1 {
    color: var(--color-gray-500);
    margin: 20px 0;
  }
`;
