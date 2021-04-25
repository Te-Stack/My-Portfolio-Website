import React, { Component } from 'react'
import "../index.css"
import About from './About'
import Contact from './Contact'
import "./css/Home.css"
import Project from './Project'




class Home extends Component {
    render() {
        return (
            <div>
                <div className="Home">
                    

                </div>
                


                <About/>
                <Project/>
                <Contact/>
            </div>
        )
    }
}


export default Home
