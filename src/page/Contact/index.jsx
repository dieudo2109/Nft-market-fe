import React from 'react'
import UI from '../UI'
import './Contact.css'
function Contact() {
    return (
        <div>
            <UI title="Contact Us" />
            <div className="container text-white mt-4">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className='contact-img' src='https://html.dreamitsolution.net/nftpro/assets/images/resource/contact.gif' alt='err' />
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <div className="contact-form">
                                <h2 className='text-align-center'>Write us you Message</h2>
                                <input type="text" placeholder='Full Name' />
                                <input type="email" placeholder='Enter Email' />
                                <input type="text" placeholder='Enter Subject' />
                                <textarea rows="7" placeholder='Write Message' />
                            </div>
                            <button className='button-form'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact