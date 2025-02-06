import { styled } from "styled-components";
import { MainContainerDefault } from "../../ui/styles/themes/default";

export const MainContainer = styled(MainContainerDefault)`
  gap: 6.375rem;
  margin-top: 5rem;
  align-items: flex-end;

  .confirmed-order-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .title-container {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      h1 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        font-weight: bolder;
        color: ${(props) => props.theme["yellow-dark"]};
      }

      p {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }

    .confirmed-order-icons-container {
      position: relative;
      min-width: 32.875rem;
      padding: 2.5rem;
      background: white; /* Fundo branco */
      border-radius: 6px;
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      z-index: 999; /* Garante que o conteúdo fique acima da borda */
    }

    /* Criando a borda gradiente */
    .confirmed-order-icons-container::before {
      content: "";
      position: absolute;
      inset: 0; /* Faz o elemento ocupar toda a área */
      background: linear-gradient(45deg, yellow, purple); /* Gradiente */
      border-radius: 6px;
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      padding: 2px; /* Ajusta a espessura da borda */
      mask:
        linear-gradient(white 0 0) content-box,
        linear-gradient(white 0 0);
      mask-composite: exclude;
      -webkit-mask:
        linear-gradient(white 0 0) content-box,
        linear-gradient(white 0 0);
      -webkit-mask-composite: destination-out;
      z-index: -1; /* Coloca a borda atrás do conteúdo */
    }

    .confirmed-order-icons-container div {
      row-gap: 2rem;
    }
  }

  .confirmed-order-image-container {
    width: 492px;
    height: 293px;
  }
`;
