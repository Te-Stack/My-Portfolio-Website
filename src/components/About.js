import React, { Component } from 'react'
import "./css/About.css"

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-6 col-xl-6">
                            <img className="img" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1619389551/20200830_104248_emf6t0.jpg" alt="Quincy-Oghentejiri;s pics " loading="lazy"/>
                            <button>Download CV</button>
                        </div>
                        <div className="col-sm-6 col-sm-6 col-xl-6">
                            <h2 className="about-border">About me & What I do </h2>
                            <p>i'm Ukumakube Quincy Oghenetejiri, a full stack developer and a UI/UX Designer wiyh over one year experience. I design and develop web applications and microservices using figma for design and mostly Javascript and Python for development . My most notable stacks include :
                                
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default About