import { styled } from "styled-components";

export const StyledContactsList = styled.ul`
  width: 100%;
  margin: 20px 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: var(--color-gray-500);
    cursor: pointer;

    .contactName {
      display: flex;
      align-items: center;
      gap: 20px;

      div {
        height: 50px;
        width: 50px;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--color-blue-200);
        color: var(--color-gray-100);
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
  }
`;
