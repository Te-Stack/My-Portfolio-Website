import React from 'react'
import "./css/Footer.css"

function Footer() {
        return (
            <div>
                <footer>
                    <div className="pane">
                        <div>
                            <small>Designed and Developed By:</small>
                        <h1 className="footer-logo">Quincy Oghenetejiri</h1>
                        </div>
                        <div className="con">
                            <a href="https://wa.link/6yvpoe" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp mx-2"></i></a>
                            <a href="https://www.linkedin.com/in/quincy-oghenetejiri"><i className="fab fa-linkedin mx-2" target="_blank" rel="noreferrer"></i></a>
                            <a href="https://www.github.com/Te-Stack" target="_blank" rel="noreferrer"><i className="fab fa-github mx-2"></i></a>
                            <a href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"><i className="fab fa-twitter mx-2"></i></a>
                        </div>
                        <div>
                            <p>&copy; Copyright 2021, All right reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
}

export default Footer
