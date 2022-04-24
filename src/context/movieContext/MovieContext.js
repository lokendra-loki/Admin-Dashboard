import MovieReducer from "./MovieReducer";
import { createContext, useReducer } from "react";


//initial state
const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
}

//create AuthContext
export const MovieContext = createContext(INITIAL_STATE);


//create AuthContextProvider
export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)


    return (
        <MovieContext.Provider value={{ movies: state.movies, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </MovieContext.Provider>
    )

}
