import React from 'react'
import "../index.css"
import About from './About'
import Contact from './Contact'
import "./css/Home.css"
import Footer from './Footer'
import Project from './Project'
import TypeWriter from "./typewriter"
import {data} from "../mockdata"

 

function Home() {
    return (
            <div>
                <div className="Home">
                    <h4><strong><TypeWriter texts={data} /> </strong></h4>
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


export default Home
