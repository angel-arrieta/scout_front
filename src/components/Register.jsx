import React, {useState} from 'react';
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        setError("");
        console.log("Registro enviado", form);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold mb-2">Registrarse</h2>

            <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                <FaUser className="mr-2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full outline-none"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
            </div>

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
                Crear cuenta
            </button>
        </form>
    );
};

export default Register;