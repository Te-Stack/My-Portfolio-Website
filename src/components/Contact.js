import React, { Component } from 'react'
import "./css/Contact.css"

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h2 className="contact-border">Contact Me</h2>
                <p className="Think">Thinking of ways of converting your ideas into reality through designs and development. Reach out to me</p>
                <div className ="container">
                    <div className="row">
                    <div className="col-sm-6 col-sm-6 col-xl-6">
                        <p><a><i class="fas fa-envelope"></i>ukumakubequincy@gmail.com</a></p>
                        <p><a><i class="fas fa-phone-alt"></i>+2349027499683</a></p>
                        <p><a><i class="fas fa-map-marker-alt"></i>Benin,Nigeria</a></p>
                    </div>
                    <div className="col-sm-6 col-sm-6 col-xl-6">
                        <h6 className="send-border">Send me a message</h6>
                        <form>
                            <input type="text" placeholder="Name" name="Name" className="text-center" />
                            <input type="email" placeholder="Email" name="email" className="mx-2 text-center" />
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
}

export default Contact