import { defaultTheme } from "./ui/styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./ui/styles/globalStyles";
import { CoffeContextProvider } from "./data/contexts/CoffeShop/CoffeShopContextProvider";
import { LoadingProvider } from "./data/contexts/LoaderBackdrop/LoaderBackdropContextProvider";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LoadingProvider>
          <CoffeContextProvider>
            <Router />
          </CoffeContextProvider>
        </LoadingProvider>
      </BrowserRouter>

      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  );
}
