//Reducer takes our actions and according to the action type it will update our context state

const AuthReducer = (state, action) => {
    switch (action.type) {

        case "lOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }

        case "lOGIN_SUCCESS":
            return {
                user: action.payload,//authAction ma if success send the user object to me vanya xau tyo user lai yeta just update garya ho
                isFetching: false,
                error: false
            }

        case "lOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            }

        default:
            return { ...state }
    }
}

export default AuthReducer;

