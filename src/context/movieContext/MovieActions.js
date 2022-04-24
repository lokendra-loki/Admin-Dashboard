export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"

})


export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,

})


export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE"

})



//DELETE MOVIE========================================================>
//we will take movie id and remove that movie
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIES_START"

})

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,

})

export const deleteMoviesFailure = () => ({
    type: "DELETE_MOVIES_FAILURE"

})
//======================================================================>