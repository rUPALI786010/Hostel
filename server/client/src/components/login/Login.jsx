import React from 'react'
import '../../CSS/components/login/login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log(email, password);


    async function loginValidation() {

        // event.preventDefault()

        const response = fetch("",{
            method : "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (data.user){
            console.log(data)
            // sessionStorage.setItem('username', res.data.user)
        }

    }
    // const response = fetch("http://localhost:5000/api/login"),

    // fetch.get("http://localhost:5000/api/login", { responseType: "json", params: payload })
    //     .then((res) => {
    //         console.log(res.data.status)
    //         console.log(res.data.message)
    //         if (res.data.status === "ok") {
    //             sessionStorage.setItem('username', res.data.user)
    //             sessionStorage.setItem('firstname', res.data.firstname)
    //             sessionStorage.setItem('lastname', res.data.lastname)
    //             window.location.href = "/"
    //         }
    //         else {
    //             document.querySelector("#messsage").textContent = res.data.message
    //             // toast.error(res.data.message)
    //             // console.log(res.data.message)
    //         }
    //     })
    // }

    return (
        <>
            <Navbar />
            <div className="mainLoginDiv flex justify-center">
                <div className="loginCenterDiv">
                    <h1>Login</h1>
                    <form onSubmit={loginValidation()}>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                        <input type="submit" className="loginButton button" />
                        <h3>or</h3>
                        <Link to="/register" className="regButton button flex justify-center">
                            Register
                        </Link>
                        <h3 id="message"></h3>
                    </form>

                </div>
            </div>
        </>

    )
}

