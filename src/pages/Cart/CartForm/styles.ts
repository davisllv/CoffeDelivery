import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const FormContainerValues = styled.section`
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};

  display: flex;
  align-items: flex-start;

  flex-direction: column;

  gap: 2rem;

  .form-container-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100%;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.75rem;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-text"]};
      text-transform: uppercase;
      background: ${(props) => props.theme["base-button"]};
      border: none;
      border-radius: 6px;
      padding: 1rem;
      flex: 1;

      &:hover {
        background: ${(props) => props.theme["base-hover"]};
      }

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`;
