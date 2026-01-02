import Button from "../button";
import { useState } from "react";
import { usersState } from "../../consts/persons";
import { Error } from "../errors";
import "../../styles/modalAnimations.css";

const buttonStyle = "w-full py-3.5 rounded-xl font-bold text-lg bg-transparent! border-2 border-gray-200 text-gray-500! hover:bg-gray-50! hover:text-gray-700! active:scale-95 transition-transform shadow-none"

export function RegisterModal({ onClose }) {
    const [formUser, setFormUser] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
    })
    const [error, setError] = useState('')

    function validateAll() {
        setError('')
        if (formUser.name === '' || formUser.name.length < 3) return setError('El nombre es muy corto')
        if (!/^[a-zA-Z ]+$/.test(formUser.name)) return setError('El nombre no puede contener numeros')

        if (formUser.lastname === '' || formUser.lastname.length < 3) return setError('El apellido es muy corto')
        if (!/^[a-zA-Z ]+$/.test(formUser.lastname)) return setError('El apellido no puede contener numeros')

        if (formUser.email === '') return setError('El email no puede estar vacio')
        if (!/^\S+@\S+\.\S+$/.test(formUser.email)) return setError('El email no tiene su formato')

        if (formUser.phone === '') return setError('El telefono no puede estar vacio')
        if (!/^\d+$/.test(formUser.phone)) return setError('El telefono no puede contener letras')

        if (formUser.password === '') return setError('La contraseña no puede estar vacia')
        if (formUser.password.length < 4) return setError('La contraseña es muy corta')

        return true
    }

    const addUser = () => {
        usersState.users.push(formUser)
    }

    return (
        modalShow.modalShowing === 'ModalRegister' ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn top-96">
                <div className="bg-white w-[90%] max-w-112.5 p-10 rounded-3xl shadow-2xl relative flex flex-col gap-6 animate-slideUp">
                    <h1 className="text-3xl font-bold text-gray-900 text-center tracking-tight">Registrarse</h1>
                    <form action="" id="register" className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-600 ml-1">Nombre</label>
                            <input type="text"
                                id="name"
                                value={formUser.name}
                                onChange={(e) => setFormUser({ ...formUser, name: e.target.value })}
                                placeholder="ej: Juan"
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="text-sm font-semibold text-gray-600 ml-1">Apellido</label>
                            <input
                                type="text"
                                id="lastName"
                                value={formUser.lastname}
                                onChange={(e) => setFormUser({ ...formUser, lastname: e.target.value })}
                                placeholder="ej: Perez"
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-600 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formUser.email}
                                onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
                                placeholder="ej: juan@gmail.com"
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-gray-600 ml-1">Telefono</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formUser.phone}
                                onChange={(e) => setFormUser({ ...formUser, phone: e.target.value })}
                                placeholder="ej: 123456789"
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-600 ml-1">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={formUser.password}
                                onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
                                placeholder="ej: 123"
                                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                        </div>
                    </form>
                    <div className="flex flex-col gap-3 mt-2">
                        <Button name="Registrarse"
                            className="w-full py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
                            onClick={() => {
                                if (!validateAll()) return
                                addUser()
                                onClose(false)
                            }}
                        />
                        <Button name="Cancelar" onClick={() => onClose(false)} className={buttonStyle} />
                        <Error showError={error} />
                    </div>
                </div>
            </div>) : null
    )
}

export function ModalLogin({ onClose }) {
    const [error, setError] = useState('')
    const [formUser, setFormUser] = useState({
        name: '',
        password: ''
    })

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn top-96">
            <div className="bg-white w-[90%] max-w-112.5 p-10 rounded-3xl shadow-2xl relative flex flex-col gap-6 animate-slideUp">
                <h1 className="text-3xl font-bold text-gray-900 text-center tracking-tight">Registrarse</h1>
                <form action="" id="register" className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-600 ml-1">Nombre</label>
                        <input type="text"
                            id="name"
                            value={formUser.name}
                            onChange={(e) => setFormUser({ ...formUser, name: e.target.value })}
                            placeholder="ej: Juan"
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-600 ml-1">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={formUser.password}
                            onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
                            placeholder="ej: 123"
                            className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-gray-800 bg-gray-50 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none placeholder:text-gray-400" />
                    </div>
                </form>
                <div className="flex flex-col gap-3 mt-2">
                    <Button name="Registrarse"
                        className="w-full py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
                        onClick={() => {
                            if (!validateAll()) return
                            addUser()
                            onClose(false)
                        }}
                    />
                    <Button name="Cancelar" onClick={() => onClose(false)} className={buttonStyle} />
                    <Error showError={error} />
                </div>
            </div>
        </div>
    )
}