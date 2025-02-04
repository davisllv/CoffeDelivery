import { styled } from "styled-components";

interface IInputProps {
  $size: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12;
}

export const InputMainContainer = styled.div<IInputProps>`
  position: relative;
  grid-column: span ${(props) => props.$size}; /* Usa a prop "size" para definir o span */
  width: 100%;

  .input-extra-text {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    pointer-events: none; /* Impede que o texto interfira no clique do input */
  }
`;

export const Input = styled.input`
  border: 0;
  padding: 0.75rem;

  width: 100%;

  background: ${(props) => props.theme["base-input"]};

  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
