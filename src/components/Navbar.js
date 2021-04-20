import "../index.css"
import "./css/navbar.css"
import "../script"

function Navbar() {
    return (
        <div>
            <header className="hero">
                <nav className="navbar">
                    <h1 className="logo">
                    <a href="#">QUINCY OGHENETEJIRI</a>
                    </h1>
                    <div>
                        <ul className="nav-menu">
                            <li className="nav-item"><a href="" class="nav-link">Home</a></li>
                            <li className="nav-item"><a href="" class="nav-link">About</a></li>
                            <li className="nav-item"><a href="" class="nav-link">Contact</a></li>
                            <li className="nav-item"><a href="" class="nav-link">Services</a></li>
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
