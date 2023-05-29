import { styled } from "styled-components";

export const StyledContainer = styled.main`
  width: 100vw;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .dashTitles {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px 40px 50px;
    border-bottom: 1px solid var(--color-gray-300);
    color: var(--color-gray-500);
    font-size: 1.25rem;
  }
`;
