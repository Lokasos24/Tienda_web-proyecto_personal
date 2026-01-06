import { create } from "zustand"

export const userLogged = create((set) => ({
    isLogged: null,
    logged: (userId) => set({isLogged: userId}),
    closeSession: () => set({isLogged: null}),
}))

export const usersState = create((set) => ({
    users: [],
    register: (newUser) => set(state => ({users: [...state.users, {newUser}]})),
    addCar: (userActive, product) => set(state => ({
        users: state.users.map(user => {
            return user.id === userActive.id 
            ? {...user, car: [...user.car, product]} 
            : user
        })
    })),
}))