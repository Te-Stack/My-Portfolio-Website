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
                        <div>
                            <a><i className="fab fa-whatsapp"></i></a>
                            <a><i className="fab fa-linkedin"></i></a>
                            <a><i className="fab fa-github"></i></a>
                            <a><i className="fab fa-twitter"></i></a>
                        </div>
                        <div>
                            <p> &copy; Copyright 2021, All right reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
