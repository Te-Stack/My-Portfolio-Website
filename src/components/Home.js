import React, { Component} from 'react'
import Example from '../Example'
import "../index.css"
import About from './About'
import Contact from './Contact'
import "./css/Home.css"
import Footer from './Footer'
import Project from './Project'





class Home extends Component {
    render() {
        return (
            <div>
                <Example/>
                <div className="Home m-2">
                    <h4><strong>Design. Build. Improve</strong></h4>
                    <h1>I create beautiful website your users will love</h1>
                    <a href="https://wa.me/+2349027499683"><button className="btn">Make it happen</button></a>
                </div>

                <About/>
                <Project/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}



Example()

export default Home
