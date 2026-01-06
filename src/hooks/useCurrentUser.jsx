import { userLogged, usersState } from "../consts/persons"

export function useCurrentUser(){
    const currentUser = userLogged(state => state.isLogged)
    const user = usersState(state => state.users.find(user => user.id === currentUser) || null)
    return user
}