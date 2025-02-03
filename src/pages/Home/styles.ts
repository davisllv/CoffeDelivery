import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;

  gap: 3.5rem;
  padding: 5.75rem 10rem;
`;

const DefaultThemeBackground = styled.div`
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    opacity: 0.2;
    background: linear-gradient(
      45deg,
      rgba(209, 155, 6, 0.85),
      rgba(155, 103, 60, 0.2)
    ); /* Degradê com opacidade */
    filter: blur(50px); /* Efeito de desfoque para suavizar */
  }

  &::before {
    top: -50px;
    left: -50px;
  }

  &::after {
    bottom: -50px;
    right: -50px;
  }
`;

export const MainContainerHome = styled(DefaultThemeBackground)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4.125rem;

  max-width: 36.75rem;
`;

export const TextsContainer = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bolder;

    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ImageContainer = styled(DefaultThemeBackground)`
  position: relative;
`;

export const CardSectionContainer = styled.section`
  padding: 2rem 10rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: bolder;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const CardContainer = styled.div`
  padding: 1.25rem;
  margin-top: 3.5rem;

  max-width: 16rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: -3rem;
  span {
    border-radius: 100px;
    background: ${(props) => props.theme["yellow-light"]};

    font-size: 0.625rem;
    font-weight: bold;

    color: ${(props) => props.theme["yellow-dark"]};

    padding: 0.25rem 0.5rem;
  }
`;

export const CardTextsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
  }
  span {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
  }
`;

export const CardButtonContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;

  padding: 0.25rem 0;

  gap: 1.375rem;
  color: ${(props) => props.theme["base-text"]};
  p {
    span {
      font-size: 0.875rem;
      font-weight: 400;
    }
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
  }
`;

export const CardInputGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme["base-card"]};
    background: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ButtonCountDownElements = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme["base-button"]};

  button {
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
