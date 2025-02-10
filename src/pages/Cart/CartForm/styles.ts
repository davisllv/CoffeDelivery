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
`;
