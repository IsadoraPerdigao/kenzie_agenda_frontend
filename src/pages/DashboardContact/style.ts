import { styled } from "styled-components";

export const StyledDashboardContact = styled.div`
  max-width: 100%;
  margin: 0px 150px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  .contact-name {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 50px;
    color: var(--color-gray-500);
    font-size: 2.5rem;

    div {
      background-color: var(--color-blue-200);
      min-width: 100px;
      min-height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-gray-100);
      font-weight: 700;
      font-size: 3rem;
    }
  }

  .contact-details {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 25px;
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
    font-size: large;

    .contact-name-sl, .email, .phone{
      display: flex;
      gap: 16px;
    }
  }
`;
