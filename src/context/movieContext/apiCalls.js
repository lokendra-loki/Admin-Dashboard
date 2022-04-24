import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMoviesFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"



export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())

    try {
        const res = await axios.get("/movies", {
            headers: {

                //NOTE WHY THIS IS NOT WORKING
                // "token": "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken  //local storage bata token leko


                "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDgxMTk2MSwiZXhwIjoxNjUxNjc1OTYxfQ.EFPLQuS_hUhzNbppMOqjNm3O4RuVEOjD2-DvADBNY10"

            }
        })
        dispatch(getMoviesSuccess(res.data))

    } catch (error) {
        dispatch(getMoviesFailure())


    }

}


//=====CREATE MOVIE  API CALLS===============================================>

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())

    try {
        const res = await axios.post("/movies", movie, {
            headers: {

                //NOTE WHY THIS IS NOT WORKING
                // "token": "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken  //local storage bata token leko


                "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDgxMTk2MSwiZXhwIjoxNjUxNjc1OTYxfQ.EFPLQuS_hUhzNbppMOqjNm3O4RuVEOjD2-DvADBNY10  "
            }
        })
        dispatch(createMovieSuccess(res.data))

    } catch (error) {
        dispatch(createMovieFailure())


    }

}







//API CALLS FOR DELETE  MOVIE========================================================>
//we will take movie id and remove/dispatch that movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                //NOTE WHY THIS IS NOT WORKING
                // "token": "Bearer" + JSON.parse(localStorage.getItem('user')).accessToken  //local storage bata token leko
                "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDc2OTQ4OSwiZXhwIjoxNjUxNjMzNDg5fQ.sBCj84zlWoBkQQqv7QvGY9X7ntfXMF-0C9a0BkkGz8A  "
            }
        })
        dispatch(deleteMovieSuccess(id))

    } catch (error) {
        dispatch(deleteMoviesFailure())
    }
}

