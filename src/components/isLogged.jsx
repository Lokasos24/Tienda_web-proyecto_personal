import { useState } from "react";
import Button from "./button";
import { usersState } from "../consts/persons";
import { RegisterModal } from "./modal";

export function IsLogged() {
    const [isLogged, setIsLogged] = useState(usersState.userLogged)
    const [users, setUsers] = useState(usersState.users)
    const [modalShow, setModalShow] = useState(false)

    return (
        <div>
            <h1>{isLogged ? "logueado" : "no Logueado"}</h1>
            {isLogged ? (
                <Button name="Cerrar Sesion" onClick={() => setIsLogged(false)} />
            ) : (
                <Button name="Registrarse" onClick={() => { setModalShow(true) }} />
            )
            }
            {modalShow ? <RegisterModal onClose={setModalShow} /> : null}
        </div>
    )
}