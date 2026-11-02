import { Outlet } from "react-router";
import type { ReactElement } from "react";

export default function AuthLayout(): ReactElement {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4 py-8">
            {/* Controlamos la altura (h-24) y el ajuste (object-contain) para que encaje perfectamente */}
            <img src="/logo.svg" alt="Logo" className="h-24 w-auto object-contain mb-2" />
            <h1 className="text-4xl font-bold text-center text-slate-900">Welcome to SENATI</h1>
            <p className="text-xl font-medium text-slate-600 mb-8 text-center">
                Your gateway to learning and innovation
            </p>

            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </div>
    );
}