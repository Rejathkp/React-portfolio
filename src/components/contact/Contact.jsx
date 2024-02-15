import React, { useRef } from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub } from "react-icons/fa6";


import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('email being sent');

    emailjs.sendForm('service_3u5xmva', 'template_shenukr', form.current, 'CgJNlvBZ1lUOGz9RF')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your email' name='your_email'/>
                <textarea className='msg' name="message" rows="05" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://github.com/Rejathkp">
                        <FaGithub className='link'/>
                    </a>
                    <a href="https://www.linkedin.com/in/rejath-kp/">
                        <FaLinkedin className='link'/> 
                    </a>

                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact