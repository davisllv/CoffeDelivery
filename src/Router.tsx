import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./ui/layout/DefaultLayout";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Route>
    </Routes>
  );
};
