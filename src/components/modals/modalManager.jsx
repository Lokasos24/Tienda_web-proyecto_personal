import { useState } from "react";

export default function ModalManager() {
    const [modalShow, setModalShow] = useState({
        modalShowing: false,
        allModals: {
            registerModal: false,
            loginModal: false
        }
    })

    return (
        <>
            <h1>Hola mundo</h1>
        </>
    )
}