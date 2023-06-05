import styled from "styled-components";

export const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  background-color: var(--color-gray-100);
  border: 2px solid var(--color-gray-100);
  border-radius: 8px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  font-size: 0.8rem;

  h1 {
    color: var(--color-gray-500);
    margin: 20px 0;
  }

  .error {
    color: var(--color-red-100);
    font-size: 0.8rem;
  }

  .edit-user-form-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      cursor: pointer;
    }

    p {
      color: var(--color-gray-500);
      font-weight: 600;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
