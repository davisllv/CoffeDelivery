import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 10rem;

  background: ${(props) => props.theme};

  height: 100vh;
`;
