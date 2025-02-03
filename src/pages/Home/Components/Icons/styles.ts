import { styled } from "styled-components";
const COLOR_ICON = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  text: "base-text",
  purple: "purple",
};

interface IIconContainerProps {
  colorIcon: keyof typeof COLOR_ICON;
}

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
