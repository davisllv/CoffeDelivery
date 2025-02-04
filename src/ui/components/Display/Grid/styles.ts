import { styled } from "styled-components";

export const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      6,
      1fr
    ); /* Reduz para 6 colunas em telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Reduz para 3 colunas em telas ainda menores */
  }
`;
