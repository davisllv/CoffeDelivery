import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    padding: 0.5rem;
    color: ${(props) => props.theme["purple-dark"]};
    background: ${(props) => props.theme["purple-light"]};
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-size: 0.875rem;
  }

  a {
    display: flex;
    justify-content: center;

    align-items: center;

    width: 3rem;
    height: 3rem;

    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};

    border-radius: 6px;
  }
`;
