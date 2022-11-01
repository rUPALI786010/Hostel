import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import '../../CSS/components/navbar/navbar.css';

function navbar() {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className='nav-link  text-success mx-2' to="/"><h4>ENotes</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">HOME</Link>
                            </li>
                            {
                                sessionStorage.getItem('user') === null ?
                                    <>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="/login">LOGIN</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="/register">REGISTER</Link>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="/profile">PROFILE</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="/upload">UPLOAD</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="/search">SEARCH</Link>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={
                                                (e) => {
                                                    sessionStorage.removeItem('user');
                                                    window.location.href = "/"
                                                }
                                            } className='nav-button'>LOGOUT</button>
                                        </li>
                                    </>
                            }
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn  btn-outline-success" type="submit">Search</button>
                        </form> 
                    </div>
                </div>
            </nav> */}
            <div>
                <div className="mainNavContainer grid12">
                    <div className="logoDiv flex justify-center">
                        <Link className='logo flex justify-center' to="/">H.M.S</Link>
                    </div>
                    <div className="optionsContainer flex justify-center">
                        <NavLink className='navLink flex justify-center' to="/">Home</NavLink>
                        {
                            sessionStorage.getItem('user') === null ?
                                <>
                                    <NavLink className='navLink flex justify-center' to="/login">Login</NavLink>
                                    <NavLink className='navLink flex justify-center' to="/register">Register</NavLink>
                                </>
                                :   
                                <>
                                    <NavLink className='navLink flex justify-center' to="/profile">Profile</NavLink>
                                    <NavLink className='navLink flex justify-center' to="/upload">Upload</NavLink>
                                    <NavLink className='navLink flex justify-center' to="/search">Search</NavLink>
                                </>
                        }
                    </div>
                    <div className="logoutDiv flex justify-center">
                        {
                            sessionStorage.getItem('user') === null ?
                                <>
                                </> : <>
                                    <button onClick={
                                        (e) => {
                                            sessionStorage.removeItem('user');
                                            window.location.href = "/"
                                        }
                                    } className='logoutButton'>Logout</button>
                                </>}
                    </div>
                </div>
                <Outlet />
            </div>
            <Outlet />
        </div>
    )
}

export default navbar