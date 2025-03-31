import React from 'react';
import { useState } from 'react';
import { login } from '../service/authService';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(form);
            alert('Login correcto');
        } catch (error) {
            alert('Error al iniciar sesión');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;
