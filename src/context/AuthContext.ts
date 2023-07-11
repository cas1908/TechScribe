import { createContext } from "react"
import { UserDetails } from "../types/user";


export const initialState: UserDetails = {
    user: {
        displayName: { first: "", last: "" },
        password: "",
        username: "",
        email: "",
        topics: [""],
        photoURL: "",
        uid: "",
        emailVerified: false,
        isAuth: false,
    },
    isLoading: true
}

export const AuthContext = createContext({state: initialState, dispatch: (action: {type: string, payload?: any})=> {} })