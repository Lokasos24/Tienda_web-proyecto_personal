import Button from "./button";
import { useState } from "react";

export function RegisterModal({ onClose }) {

    const handleRegister = () => {

    }

    return (
        <div className="">
            <h1>Registrarse</h1>
            <form action="" id="register">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" placeholder="ej: Juan" />
                </div>
                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" id="lastName" placeholder="ej: Perez" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="ej: juan@gmail.com" />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" id="phone" placeholder="ej: 123456789" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="ej: 123" />
                </div>
            </form>
            <Button name="Registrarse" onClick={handleRegister} />
            <Button name="Cancelar" onClick={() => onClose(false)} />
        </div>
    )
}