import { styled } from "styled-components";

export const CoffeValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["base-text"]};

  .value-description {
    font-size: 0.875rem;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bold;
  }
`;
