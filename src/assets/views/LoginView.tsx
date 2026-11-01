import { useState, type FormEvent } from "react";
import { Link } from "react-router";

export default function LoginView(): React.JSX.Element {
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        setMessage("El formulario está listo, pero la autenticación aún no está conectada.");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-900">
            <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
                <header className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">SENATI</p>
                    <h1 className="text-3xl font-bold tracking-tight">Iniciar sesión</h1>
                    <p className="mt-2 text-sm text-slate-600">Ingresa tus datos para acceder a tu cuenta.</p>
                </header>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="email">Correo electrónico</label>
                        <input
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="nombre@correo.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="password">Contraseña</label>
                        <input
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>

                    <button
                        className="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>

                    <p className="min-h-5 text-sm text-slate-600" aria-live="polite">{message}</p>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/api/auth/register" className="font-semibold text-blue-700 hover:text-blue-900">Regístrate</Link>
                </p>
            </section>
        </main>
    );
}