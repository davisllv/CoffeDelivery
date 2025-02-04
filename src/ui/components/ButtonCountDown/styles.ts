import { styled } from "styled-components";

export const ButtonCountDownElements = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme["base-button"]};

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 0;
    padding: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};

    &:hover {
      font-weight: bold;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    color: ${(props) => props.theme["base-title"]};
  }
`;
