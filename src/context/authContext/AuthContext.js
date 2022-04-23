import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react";


//initial state
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}


//create AuthContext
export const AuthContext = createContext(INITIAL_STATE);


//create AuthContextProvider
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )


}
