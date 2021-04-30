import React, { Component } from 'react'
import "./css/Project.css"

class Project extends Component {
    render() {
        return (
            <div className="Projects">
                <div className="container1 ">
                        <div className="cards">
                            <h5>Balance Sheet App</h5>
                            <p>HTML + CSS + EXPRESS</p>
                            <p>
                                Balance Sheet app that saves income and expenses which is connected to MongoDB database
                            </p>
                            <div className="Icon">
                                <div>
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
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
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <h5>Overwood Website Redesign</h5>
                            <p>HTML + CSS</p>
                            <p>
                                This is the redesign of <a href="https://www.overwood.com">Overwood official website</a>
                            </p>
                            <div className="Icon">
                                <div>
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
                                </div>
                            </div>
                        </div>
                </div>
                <div className="container2">
                    <div className=" cards">
                        <h5>Remita Sign-up page</h5>
                        <p>HTML + CSS + JAVASCRIPT</p>
                        <p>
                            This is clone of the Remita Sign up page with validation done with vanilla javascript 
                        </p>
                        <div className="Icon">
                                <div>
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
                                </div>
                        </div>
                    </div>
                    <div className=" cards">
                        <h5>A Bidding App</h5>
                        <p>HTML + CSS + JAVASCRIPT</p>
                        <p>
                            This is an App that enable you bid commodity at your own price 
                        </p>
                        <div className="Icon">
                                <div>
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
                                </div>
                        </div>
                    </div>
                    <div className="cards">
                        <h5>Sign-Up API</h5>
                        <p>REACT EXPRESS</p>
                        <p>
                            This is a Sign-Up Application Programming Interface that sign ups users and saves their data in the Mongodb(No Sql) database
                        </p>
                        <div className="Icon">
                                <div>
                                <p>Live<i className="fas fa-eye"></i></p> 
                                </div>
                                <div>
                                <p>Code<i className="fas fa-code-branch"></i></p> 
                                </div>
                        </div>
                    </div>
                </div>
                <button className="btn">See More Projects </button>
            </div>
        )
    }
}

export default Project
