import AuthReducer from "./AuthReducer";
import { createContext, useReducer, useEffect } from "react";


//initial state
const INITIAL_STATE = {
    // user: null,
    //in initial state instead of user null now we will take user from local storage
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}


//create AuthContext
export const AuthContext = createContext(INITIAL_STATE);


//create AuthContextProvider
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)


    //saving user information in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user)) //JSON.stringify change json object to string
    }, [state.user])



    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )


}
