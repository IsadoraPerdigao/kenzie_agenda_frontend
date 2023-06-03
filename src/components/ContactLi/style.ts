import { styled } from "styled-components";

export const StyledLi = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 300px;
    justify-items: start;
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
`