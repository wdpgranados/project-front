import { useState, type FormEvent } from "react";
import { Link } from "react-router";

export default function RegisterView(): React.JSX.Element {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            return;
        }

        setMessage("Datos validados. El servicio de registro aún no está conectado.");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-900">
            <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
                <header className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">SENATI</p>
                    <h1 className="text-3xl font-bold tracking-tight">Crear cuenta</h1>
                    <p className="mt-2 text-sm text-slate-600">Completa tus datos para registrarte.</p>
                </header>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="name">Nombre completo</label>
                        <input
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="email">Correo electrónico</label>
                        <input
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="tucorreo@ejemplo.com"
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
                            autoComplete="new-password"
                            placeholder="Crea una contraseña"
                            minLength={8}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium" htmlFor="confirm-password">Confirmar contraseña</label>
                        <input
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Repite tu contraseña"
                            minLength={8}
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Crear cuenta
                    </button>

                    <p className="min-h-5 text-sm text-slate-600" aria-live="polite">{message}</p>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/api/auth/login" className="font-semibold text-blue-700 hover:text-blue-900">Inicia sesión</Link>
                </p>
            </section>
        </main>
    );
}