import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        // Si no hay token, redirige a login
        return <Navigate to="/login" />;
    }
    try {
        const decodedToken = jwtDecode(token);
        console.log("Exp:", decodedToken.exp);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
            console.log("El token ha expirado");
            // Redirige a login si el token ha expirado
            return <Navigate to="/login" />;
        }
    } catch (error) {
        console.error("Error al decodificar el token", error);
        // Si hay error al decodificar el token, redirige a login
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
