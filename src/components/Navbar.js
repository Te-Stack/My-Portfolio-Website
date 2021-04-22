import React from 'react'
import "../index.css"
import "./css/navbar.css"
import {Link} from "react-router-dom"


function Navbar() {
    return (
        <div>
            <header className="hero">
                <nav className="navbar">
                    <h1 className="logo">
                        <Link to="/">QUINCY OGHENETEJIRI</Link>
                    </h1>
                    <div>
                        <ul className="nav-menu">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Services</Link></li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </nav>
        </header> 
        </div>
    )
}

export default Navbar
