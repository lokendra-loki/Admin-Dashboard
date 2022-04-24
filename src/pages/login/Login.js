import React, { useContext } from 'react'
import "./login.scss"
import { useState } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/apiCalls'




function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //apiCalls
    const { isFetching, dispatch } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()
        //calling apiCalls
        login({ email, password }, dispatch)

    }



    return (
        <div className='loginCon'>
            <form className="loginWrapper"  >

                <input className='usernameInput' type="email" placeholder="Email " onChange={(e) => setEmail(e.target.value)} />
                <input className='usernameInput' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />


                <button className='loginBut' onClick={handleLogin} disabled={isFetching} >Login</button>

                <div className="createAccAndForgotRow">
                    <span className='dontHaveAcc'>Dont have an Account ? Create !</span>
                    <span className='forgotPassword'>Forgot Password ?</span>
                </div>

                <button className='loginBut'>Register</button>

            </form>
        </div>
    )
}

export default Login