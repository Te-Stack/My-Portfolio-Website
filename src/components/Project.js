import React, { Component } from 'react'
import "./css/Project.css"
import Footer from './Footer'

class Project extends Component {
    render() {
        return (
            <div className="Projects">
                <h2 className="project-border">Projects</h2>
                <div className="container1">
                        <div className="cards">
                            <h5>Balance Sheet App</h5>
                            <p>HTML + CSS + EXPRESS</p>
                            <p>
                                Balance Sheet app that saves income and expenses which is connected to MongoDB database.
                            </p>
                            <div className="Icon">
                                <div>
                                <a href="https://balance-sheet-app.herokuapp.com/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Balance-Sheet-App" target="_blank"rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <h5>Smoothie-E-Commerce Website</h5>
                            <p>EJS + EXPRESS</p>
                            <p>
                                An E-commerce Website that uses jwt(json web token) to authenticate its users and then allow only authenticated users to be able to shop in the website.
                            </p>
                            <div className="Icon">
                                <div>
                                <a href="https://smoothie-e-commerce.herokuapp.com/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Smoothie-E-Commerce-Website-" target="_blank" rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <h5>Overwood Website Redesign</h5>
                            <p>HTML + CSS</p>
                            <p>
                                This is the redesign of <a href="https://www.overwood.com">Overwood official website.</a>
                            </p>
                            <div className="Icon">
                                <div>
                                <a href="https://overwood-redesign.netlify.app/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Overwood-Redesign-Challenge" target="_blank" rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                            </div>
                        </div>
                </div>
                <div className="container2">
                    <div className=" cards">
                        <h5>Remita Sign-up page</h5>
                        <p>HTML + CSS + JAVASCRIPT</p>
                        <p>
                            This is clone of the Remita Sign up page with validation done with vanilla javascript.
                        </p>
                        <div className="Icon">
                                <div>
                                <a href="https://remita-validate.netlify.app/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Remita-Form-Validation" target="_blank" rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                        </div>
                    </div>
                    <div className=" cards">
                        <h5>A Bidding App</h5>
                        <p>HTML + CSS + JAVASCRIPT</p>
                        <p>
                            This is an App that enable you bid commodity at your own price .
                        </p>
                        <div className="Icon">
                                <div>
                                <a href="https://bidding-app.netlify.app/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Bidding-App" target="_blank" rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                        </div>
                    </div>
                    <div className="cards">
                        <h5>Sign-Up API</h5>
                        <p>REACT EXPRESS</p>
                        <p>
                            This is a Sign-Up Application Programming Interface that sign ups users and saves their data in the Mongodb(No Sql) database.
                        </p>
                        <div className="Icon">
                                <div>
                                <a href="https://sign-up-app123544.herokuapp.com/" target="_blank" rel="noreferrer">Live<i className="fas fa-eye"></i></a> 
                                </div>
                                <div>
                                <a href="https://github.com/Te-Stack/Sign-Up-API" target="_blank" rel="noreferrer">Code<i className="fas fa-code-branch"></i></a> 
                                </div>
                        </div>
                    </div>
                </div>
                <div className="mid mt-5">
                    <a href="https://github.com/Te-Stack?tab=repositories" target="_blank" rel="noreferrer"><button className="btn">See More Projects </button></a>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Project
