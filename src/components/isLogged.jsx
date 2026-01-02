import { useState } from "react";
import { create } from "zustand";
import Button from "./button";
import { usersState } from "../consts/persons";
import { RegisterModal, LoginModal } from "./modals/modal";

export function IsLogged() {
    // const user
    const [isLogged, setIsLogged] = useState(usersState.userLogged)
    const [modalRegisterShow, setModalRegisterShow] = useState(false)
    const [modalLoginShow, setModalLoginShow] = useState(false)
    const findUser = usersState.users.find(user => user.id === usersState.userLogged) || {}

    return (
        <div className="grid gap-2">
            {isLogged ? findUser.name : (
                <Button name="Iniciar sesion" onClick={() => { setModalLoginShow(true), setModalRegisterShow(false) }} />
            )}
            {isLogged ? (
                <Button name="Cerrar Sesion" onClick={() => setIsLogged(false)} />
            ) : (
                <Button name="Registrarse" onClick={() => { setModalRegisterShow(true), setModalLoginShow(false) }} />
            )}
            {modalRegisterShow ? <RegisterModal onClose={setModalRegisterShow} /> : null}
            {modalLoginShow ? <LoginModal onClose={setModalLoginShow} /> : null}
        </div>
    )
}