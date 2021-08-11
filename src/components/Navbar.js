import React, { Component } from 'react'
import "../index.css"
import "./css/Navbar.css"
import {MenuItems} from "./MenuItems"
import {Link} from "react-router-dom"
import {
    Link as ScrollLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
  } from "react-scroll"
 
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
            <Link to="/"><h1 className="navbar-logo">Quincy Oghenetejiri</h1></Link>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((items,index)=>{
                    return (
                        <li key={index}>
                            <ScrollLink
                             className={items.cName}
                              to={items.url}
                              spy={true}
                              smooth={true}
                              offset={50}
                            duration={500}  
                              >
                                {items.title}
                            </ScrollLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
    }
}

export default Navbar
