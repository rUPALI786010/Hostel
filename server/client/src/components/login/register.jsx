import React from 'react'
import '../../CSS/components/login/register.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Register() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [password, setpassword] = useState('')

    async function registerUser(event) {
        // event.preventDefault()

        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                lastname,
                mobilenumber,
                email,
                password

            })
        })
        const data = await response.json()
        if (data.status === "ok") {
            window.location.href = "/";
            console.log(data.user);
            sessionStorage.setItem('user', data.username)
            sessionStorage.setItem('firstname', data.firstname)
            sessionStorage.setItem('lastname', data.lastname)
        }
        else {
            console.log("Something is not right, try again later...")
        }
    }

    function matchPassword(e) {
        let inpBox1 = document.getElementById('passInput1').value
        let inpBox2 = document.getElementById('passInput2').value
        if ((inpBox1.length >= 8) && (inpBox1 === inpBox2)) {
            document.getElementById('registerSubmitBtn').disabled = false
            setpassword(e.target.value)
        }
        else {
            document.getElementById('registerSubmitBtn').disabled = true

        }
    }

    return (
        <>
            <Navbar />
            <div class="containerwrapper flex justify-center">
                <div className="container-box-register">
                    <h2 class="title">Registration</h2>
                    <p id='errorMessages' className='color-red'></p>
                    <div class="content">
                        <form onSubmit={registerUser()}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">First Name</span>
                                    <input type="text" onChange={(e => setFirstname(e.target.value))} placeholder="Enter your name" name='firstname' required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Last Name</span>
                                    <input type="text" onChange={(e => setLastname(e.target.value))} placeholder="Enter your name" name='lastname' required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <input type="email" onChange={(e => setEmail(e.target.value))} placeholder="Enter your email" name='email' required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Phone Number</span>
                                    <input type="text" onChange={(e => setMobilenumber(e.target.value))} placeholder="Enter your number" name='mobile' required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Password</span>
                                    <input type="password" onChange={e => matchPassword(e)} id="passInput1" placeholder="Enter your password" name='password' required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Confirm Password</span>
                                    <input type="password" onChange={e => matchPassword(e)} id="passInput2" placeholder="Confirm your password" required />
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" id="registerSubmitBtn" value="Register" />
                            </div>
                            <div className='flex justify-center'>
                                <p>Already have an Account? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Register