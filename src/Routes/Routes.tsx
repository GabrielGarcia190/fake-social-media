import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Posts } from "../Pages/Posts";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
} 