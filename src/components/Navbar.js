import React, { Component } from 'react'
import "../index.css"
import "./css/Navbar.css"
import {MenuItems} from "./MenuItems"

class Navbar extends Component {
    state ={
        clicked:false
    }

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
            <h1 className="navbar-logo">Quincy Oghenetejiri</h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((items,index)=>{
                    return (
                        <li key={index}>
                            <a className={items.cName} href={items.url}>
                                {items.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Navbar
