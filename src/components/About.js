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
                            <button className="btn mt-1 mb-3 mx-0">Download CV</button>
                        </div>
                        <div className="col-sm-6 col-sm-6 col-xl-6">
                            <h2 className="about-border">About me & What I do </h2>
                            <p>i'm Ukumakube Quincy Oghenetejiri, a full stack developer with over one year experience. I design and develop web applications and microservices using figma for design and mostly Javascript and Python for development . My most notable stacks include :
                                <img alt="Skills" className="desktop" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1619606984/All_Skills_1_ndpkfm.png" />
                                <img alt="Skills" className="mobile" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1619606996/All_Skills_2_pp7yxs.png" />
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default About