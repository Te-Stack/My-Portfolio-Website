import React, { Component } from 'react'
import "./css/Project.css"

class Project extends Component {
    render() {
        return (
            <div className="Projects">
                <div className="container1">
                        <div className=" cards">
                            <h5>Balance Sheet App</h5>
                        </div>
                        <div className=" cards">
                            <h5>Smoothie-E-Commerce Website</h5>
                        </div>
                        <div className=" cards">
                            <h5>Overwood Website Redesign</h5>
                        </div>
                </div>
                <div className="container2 mt-2">
                    <div className=" cards">
                        <h5>Remita Sign-up page</h5>
                    </div>
                    <div className=" cards">
                        <h5>A Bidding App</h5>
                    </div>
                    <div className="cards">
                        <h5>Sign-Up API</h5>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Project
