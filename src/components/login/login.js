import React, { useState } from "react";
import { useAuth } from "../../Auth";
import { useNavigate, redirect } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const {onLogin} = useAuth()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const onButtonClick = async () => {
        setPasswordError("")
        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }
        //TODO: AUTH STUFF
        await onLogin()
        navigate('/makePoll')
    }


    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <h1>Login</h1>
        </div>
        <br />
        <div className={"inputContainer"}>
            Username:
            <input
                value={username}
                placeholder="Enter your username here"
                onChange={ev => setUsername(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            Password:
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
        <br />
        <a href="signup">Don't have an account?</a>
    </div>
}


export default Login