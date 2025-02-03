import { Route, Routes } from "react-router-dom"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
    )
}