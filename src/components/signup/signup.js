import React, { useState } from "react";

function SignUp() {

    const [username, setUsername] = useState("")

    const [firstname, setFname] = useState("")

    const [lastname, setLname] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [nationality, setNation] = useState("")

    const [birthdate, setBirthdate] = useState("")

    const [address, setAddress] = useState("")

    const [phone, setPhone] = useState("")
    //TODO: set phone error function


    const onButtonClick = () => {
        //TODO: AUTH STUFF

    }

    return (
        <>
            <div>Sign Up</div>

            <div className={"inputContainer"}>
                Username:
                <input
                    value={username}
                    placeholder="Enter your username here"
                    onChange={ev => setUsername(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                First Name:
                <input
                    value={firstname}
                    placeholder="Enter your first name here"
                    onChange={ev => setFname(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                Last Name:
                <input
                    value={lastname}
                    placeholder="Enter your last name here"
                    onChange={ev => setLname(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                Nationality:
                <input
                    value={nationality}
                    placeholder="Enter your nationality here"
                    onChange={ev => setNation(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                Birthdate:
                <input
                    value={birthdate}
                    placeholder="Enter your birth date here"
                    onChange={ev => setBirthdate(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                Address:
                <input
                    value={address}
                    placeholder="Enter your address here"
                    onChange={ev => setAddress(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
                Phone number:
                <input
                    value={email}
                    placeholder="Enter your phone number here"
                    onChange={ev => setPhone(ev.target.value)}
                    className={"inputBox"} />
            </div>

            <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Sign Up"} />
        </div>
        </>

    );
}

export default SignUp