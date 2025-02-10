import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 100%;
`;

export const ButtonContainer = styled.button`
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

  &.selected {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple};
  }
`;
