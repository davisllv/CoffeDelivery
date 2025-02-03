import styled from "styled-components";

const COLOR_ICON = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  text: "base-text",
  purple: "purple",
};

interface IIconContainerProps {
  colorIcon: keyof typeof COLOR_ICON;
}

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

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;

  row-gap: 1.25rem;

  p {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const IconContainer = styled.div<IIconContainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: ${(props) => props.theme[COLOR_ICON[props.colorIcon]]};
  color: ${(props) => props.theme.background};
`;

export const ImageContainer = styled(DefaultThemeBackground)`
  position: relative;
`;
