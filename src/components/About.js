import React from 'react'
import "./css/About.css"


function About() {
        return (
            <div className="About">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-xl-6 animate__animated animate__fadeInLeft animate__delay-3s">
                            <img className="img" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1620207698/8D925034-A324-4DA4-BC0D-B138E89AF0C5L0001_ulquax.jpg" alt="Quincy-Oghentejiri;s pics " loading="lazy"/>
                            <button className="btn mt-1 mb-3 mx-0">Download CV</button>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-6 animate__animated animate__fadeInRight animate__delay-3s">
                            <h2 className="about-border">About me & What I do </h2>
                            <p>I'm Ukumakube Quincy Oghenetejiri, a full stack developer with over one year experience. I design and develop web applications and microservices using figma for design and mostly Javascript and Python for development . My most notable stacks include :
                                <img alt="Skills" className="desktop" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1619606984/All_Skills_1_ndpkfm.png" />
                                <img alt="Skills" className="mobile" src="https://res.cloudinary.com/dha7gjz6y/image/upload/v1619606996/All_Skills_2_pp7yxs.png" />
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        )
}

export default About