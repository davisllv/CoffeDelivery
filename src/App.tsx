import { defaultTheme } from "./ui/styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./ui/styles/globalStyles";
import { CoffeContextProvider } from "./data/contexts/CoffeShopContextProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}
