//loginStart action ma LOGIN_START dispatch hunxa
export const loginStart = () => ({
    type: "LOGIN_START"

})


export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,   //if success just send the user object to me

})


export const loginFailure = () => ({
    type: "LOGIN_FAILURE"

})



//For LogOut----------------------------------------------->
//we are just gonnna remove/ the user from the state so the user will be null again
export const logout = () => ({
    type: "LOGOUT"

})


