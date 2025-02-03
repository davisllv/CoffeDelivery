import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./ui/layout/DefaultLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}> 
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/cart" element={<h1>Cart</h1>} />
            </Route>
        </Routes>
    )
}