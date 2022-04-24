//Reducer takes our actions and according to the action type it will update our context state

const MovieReducer = (state, action) => {
    switch (action.type) {

        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            }

        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }

        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true,
            }

        //DELETE MOVIE------------>
        case "DELETE_MOVIES_START":
            return {
                ...state,//At beginning we are not gonna change anything inside our movies array so current state will be the same
                isFetching: true,
                error: false
            }

        case "DELETE_MOVIES_SUCCESS":
            return {
                movies: state.movies.filter((movie) => MovieReducer._id !== action.payload),
                //it gonna look at state.movies array and filter out the movie that has the same id as the one we are deleting and if movie id is not equal to the id we are deleting it will return that movie
                isFetching: false,
                error: false,
            }

        case "DELETE_MOVIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        //--------------------------->


        default:
            return { ...state }
    }
}

export default MovieReducer;

