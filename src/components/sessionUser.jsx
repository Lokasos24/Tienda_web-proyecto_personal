import { useState } from "react";
import Button from "./button";
import { RegisterModal, LoginModal } from "./modals/modal";
import { userLogged } from "../consts/persons";
import { useCurrentUser } from "../hooks/useCurrentUser";

export function SessionUser() {
    const [modalRegisterShow, setModalRegisterShow] = useState(false)
    const [modalLoginShow, setModalLoginShow] = useState(false)
    
    const userId = userLogged(state => state.isLogged)
    const currentUser = useCurrentUser()

    return (
        <div className="grid gap-2">
            {userId ? currentUser.newUser.name : (
                <Button name="Iniciar sesion" 
                onClick={() => { 
                    setModalLoginShow(true),  
                    setModalRegisterShow(false) 
                }} 
                />
            )}
            {userId ? (
                <Button name="Cerrar Sesion" 
                onClick={() => userLogged.getState().closeSession()} 
                />
            ) : (
                <Button name="Registrarse"
                onClick={() => { 
                    setModalRegisterShow(true), 
                    setModalLoginShow(false) 
                }} 
                />
            )}
            {modalRegisterShow ? <RegisterModal onClose={setModalRegisterShow} /> : null}
            {modalLoginShow ? <LoginModal onClose={setModalLoginShow} /> : null}
        </div>
    )
}