import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.background};
}

:focus {
    outline: 0;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
}
`;
