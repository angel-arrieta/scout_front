import React from 'react';
import { useState } from 'react';
import { register } from '../service/authService';

function Register() {
    const [form, setForm] = useState({ fullName: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form);
            alert('Registrado correctamente');
        } catch (error) {
            alert('Error al registrar');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <input
                type="text"
                placeholder="Nombre completo"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
            />
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
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default Register;

