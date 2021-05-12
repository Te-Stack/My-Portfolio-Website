import React from 'react'
import "../index.css"
import About from './About'
import Contact from './Contact'
import "./css/Home.css"
import Footer from './Footer'
import Project from './Project'
// import { Button,useColorMode} from "@chakra-ui/react"

function Home() {
    // const  { colorMode, toggleColorMode } = useColorMode();
    return (
            <div>
                <div className="Home m-2">
                   <h2><strong>Design. Build. Improve</strong></h2>
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
