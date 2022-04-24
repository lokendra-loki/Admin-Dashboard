import axios from "axios"
import { loginStart, loginSuccess, loginFailure } from "./AuthActions"


export const login = async (userCredentials, dispatch) => {
    //first when we click the login button dispatch this action
    dispatch(loginStart())

    //sending credentials to api for verification
    try {

        const res = await axios.post("auth/login", userCredentials)
        //if the response is successful then we dispatch the loginSuccess action


        //everyone can login to Admin Dashboard
        dispatch(loginSuccess(res.data)) //payload ma hami lai res send gaar vanya thiyeu so here res.data

        //if we admin only access Admin Dashboard
        // res.data.isAdmin && dispatch(loginSuccess(res.data)) 


    } catch (error) {
        //if error dispatch this loginFailure action
        dispatch(loginFailure())
    }


}