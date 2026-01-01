import Button from "./button";
import { useState } from "react";
import "../styles/modalAnimations.css";

export function RegisterModal({ onClose }) {

    const handleRegister = () => {

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white w-[90%] max-w-[450px] p-10 rounded-3xl shadow-2xl relative flex flex-col gap-6 animate-slideUp">
                <h1 className="text-3xl font-bold text-gray-900 text-center tracking-tight">Registrarse</h1>
                <form action="" id="register" className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-600 ml-1">Nombre</label>
                        <input type="text" id="name" placeholder="ej: Juan" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm font-semibold text-gray-600 ml-1">Apellido</label>
                        <input type="text" id="lastName" placeholder="ej: Perez" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-600 ml-1">Email</label>
                        <input type="email" id="email" placeholder="ej: juan@gmail.com" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-600 ml-1">Telefono</label>
                        <input type="tel" id="phone" placeholder="ej: 123456789" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-600 ml-1">Password</label>
                        <input type="password" id="password" placeholder="ej: 123" className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                </form>
                <div className="flex flex-col gap-3 mt-2">
                    <Button name="Registrarse" onClick={handleRegister} className="w-full py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform" />
                    <Button name="Cancelar" onClick={() => onClose(false)} className="w-full py-3.5 rounded-xl font-bold text-lg !bg-transparent border-2 border-gray-200 !text-gray-500 hover:!bg-gray-50 hover:!text-gray-700 active:scale-95 transition-transform shadow-none" />
                </div>
            </div>
        </div>
    )
}