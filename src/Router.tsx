import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./ui/layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
};
