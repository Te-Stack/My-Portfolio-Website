import React from 'react'
import "./css/Contact.css"

function Contact() {
        return (
            <div className="Contact">
                <h2 className="contact-border">Contact Me</h2>
                <p className="Think">Thinking of ways of converting your ideas into reality through designs and development. Reach out to me</p>
                <div className ="container">
                    <div className="row">
                    <div className="col-sm-6 col-md-6 col-xl-6">
                        <p className="reach"><a href="https://mailto:ukumakubequincy@gmail.com"><i className="fas fa-envelope alt"></i>ukumakubequincy@gmail.com</a></p>
                        <p className="reach"><a href="https://google.com"><i className="fas fa-phone-alt alt"></i>+2349027499683</a></p>
                        <p className="reach"><a href="https://google.com"><i className="fas fa-map-marker-alt alt"></i>Benin,Nigeria</a></p>
                    </div>
                    <div className="col-sm-6 col-sm-6 col-xl-6">
                        <h6 className="send-border">Send me a message</h6>
                        <form>
                            <input type="text" placeholder="Name" name="Name" className="text-center" />
                            <input type="email" placeholder="Email" name="email" className="text-center" />
                            <input type="text" placeholder="Phone Number" name="Phone Number" className="m-2 mx-0 text-center" />
                            <textarea placeholder="Enter Your Message" name="Message" className="text-center" >
                            </textarea>
                            <button type="submit" className="btn">Submit</button>

                        </form>

                    </div>
                        
                    </div>
                </div>   
            </div>
        )
}

export default Contact