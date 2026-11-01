import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./assets/views/LoginView.tsx";
import RegisterView from "./assets/views/RegisterView.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1 className="text-6xl font-black underline">Welcome SENATI</h1>}></Route>
                <Route path="/api/auth/login" element={<LoginView/>}></Route>
                <Route path="/api/auth/register" element={<RegisterView/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}