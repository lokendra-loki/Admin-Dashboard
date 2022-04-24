//Reducer takes our actions and according to the action type it will update our context state

const AuthReducer = (state, action) => {
    switch (action.type) {

        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,//authAction ma if success send the user object to me vanya xau tyo user lai yeta just update garya ho
                isFetching: false,
                error: false
            }

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            }

        //Logout
        case "LOGOUT":
            return {
                user: null,//null again
                isFetching: false,
                error: false,
            }

        default:
            return { ...state }
    }
}

export default AuthReducer;

