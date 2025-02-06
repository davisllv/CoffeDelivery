import { styled } from "styled-components";
const COLOR_ICON = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  text: "base-text",
  purple: "purple",
};

interface IIconGridColumnsProps {
  $columns?: number;
}

interface IIconContainerProps {
  $colorIcon: keyof typeof COLOR_ICON;
}

export const IconsGridColumns = styled.div<IIconGridColumnsProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 2}, 1fr);

  row-gap: 1.25rem;

  .icons-boxes {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    p {
      max-width: 354px;
      color: ${(props) => props.theme["base-text"]};
    }

    .icon-text-aditional {
      font-weight: bold;
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
  background-color: ${(props) => props.theme[COLOR_ICON[props.$colorIcon]]};
  color: ${(props) => props.theme.background};
`;
