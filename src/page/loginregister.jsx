import React from "react";
import { useState } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import Login from '../component/login.jsx';
import Register from '../component/register.jsx';

const LoginRegister = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="min-h-screen bg-white text-white flex items-center justify-center">
            <div className="w-full max-w-md bg-purple-600 rounded-xl shadow-lg p-6 relative overflow-hidden">
                <div className="flex justify-center mb-4 space-x-6">
                    <button
                        className={`flex items-center gap-2 text-lg pb-1 border-b-2 transition-all ${
                            showLogin ? "border-white font-bold" : "border-transparent"
                        }`}
                        onClick={() => setShowLogin(true)}
                    >
                        <FaSignInAlt /> Login
                    </button>
                    <button
                        className={`flex items-center gap-2 text-lg pb-1 border-b-2 transition-all ${
                            !showLogin ? "border-white font-bold" : "border-transparent"
                        }`}
                        onClick={() => setShowLogin(false)}
                    >
                        <FaUserPlus /> Registro
                    </button>
                </div>

                <div className="relative h-[320px]">
                    <div
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            showLogin ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        <Login />
                    </div>
                    <div
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            !showLogin ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
