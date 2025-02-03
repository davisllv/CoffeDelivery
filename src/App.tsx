import { defaultTheme } from "./ui/styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./ui/styles/globalStyles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}
