import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 50px 150px;
  display: flex;
  align-items: center;
  gap: 30px;

  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--color-blue-200);
    cursor: pointer;
  }

  .searchInput {
    display: flex;
    width: 100%;

    img {
      position: relative;
      top: px;
      left: 40px;
    }

    ::placeholder {
      color: var(--color-gray-300);
    }
  }

  .logout {
    margin-left: 12px;
    color: var(--color-gray-500);
    cursor: pointer;
  }
`;
