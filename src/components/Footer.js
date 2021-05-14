import React, { Component } from 'react'
import "./css/Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="pane">
                        <div>
                        <h1 className="footer-logo">Quincy Oghenetejiri</h1>
                        </div>
                        <div className="con">
                            <a href=" https://wa.me/+2349027499683" rel="_blank"><i className="fab fa-whatsapp mx-2"></i></a>
                            <a href="https://www.linkedin.com/in/quincy-oghenetejiri"><i className="fab fa-linkedin mx-2" rel="_blank"></i></a>
                            <a href="https://www.github.com/Te-Stack" rel="_blank"><i className="fab fa-github mx-2"></i></a>
                            <a href="https://www.twitter.com/Quincyoghenex" rel="_blank"><i className="fab fa-twitter mx-2"></i></a>
                        </div>
                        <div>
                            <p>&copy; Copyright 2021, All right reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
