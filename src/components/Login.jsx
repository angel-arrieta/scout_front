import React, {useState} from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError("Por favor, completa todos los campos.");
            return;
        }
        setError("");
        console.log("Login enviado", form);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold mb-2">Iniciar sesión</h2>

            <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                <FaEnvelope className="mr-2 text-gray-500" />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full outline-none"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
            </div>

            <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                <FaLock className="mr-2 text-gray-500" />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full outline-none"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
            </div>

            {error && <p className="text-sm text-red-300">{error}</p>}

            <button
                type="submit"
                className="bg-white text-purple-700 font-bold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
                Entrar
            </button>
        </form>
    );
};

export default Login;