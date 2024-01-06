import React, { useState } from 'react'
import axios from 'axios';
import './PortfolioStyle.css'

const Contactme = () => {
    const [Name, setName] =  useState('');
    const [message, setMessage] =  useState('');
    const [email, setEmail] =  useState('');

    const handlesubmit = () => {
        if (Name.length === 0 && email.length === 0 && message.length === 0) {
            alert('All fields are empty!')
        }
        else   if (Name.length === 0) {
            alert('Name has left blank!')
        }
        else   if (email.length === 0) {
            alert('Email has left blank!')
        }   
        else   if (message.length === 0) {
            alert('Message has left blank!')
        }   
        else{
            // const url = 'http://localhost/test/contact.php';
            // let fData = new FormData();
            // fData.append('Name', Name);
            // fData.append('message', message);
            // fData.append('email', email);
            // axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
            alert('Your message has been sent successfully!')
        }

    }
    return (
        <>
            <div class="contact" id='contact' data-aos="fade">
                <div class="contact-header">
                    <h3 data-aos="fade-up" id="co-title">Contact Me</h3>
                    <h1 data-aos="fade-up" data-aos-delay="50" id="co-text">Reach out for a new project or to say hello</h1>
                </div>

                <div className="inner">
                    <div class="contact-content" >
                        <h3 data-aos="fade-down">Email Me At </h3>
                        <a data-aos="fade-down" href="mailto:yashdafade93@gmail.com"><p>yashdafade93@gmail.com</p></a>
                        <h3 data-aos="fade-down">Find Me On </h3>
                        <div class="contact-links">
                            <a data-aos="fade-down" target='_blank' href="https://github.com/Yashdafade"><i class='bx bxl-github'></i></a>
                            <a data-aos="fade-down" target='_blank' href="https://www.linkedin.com/in/yash-dafade-992ab2209/"><i class='bx bxl-linkedin'></i></a>
                            <a data-aos="fade-down" target='_blank' href="https://www.instagram.com/yashdafade/"><i class='bx bxl-instagram' ></i></a>
                        </div>
                    </div>
                    <div class="container">
                        <div class="columns">
                            <div class="column is-half">
                                <h2 className='msg'  data-aos="fade-down">Send A Message</h2>
                                <form action="mailto:yashdafade93@gmail.com" method="post">
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Name</label>
                                        <div class="control">
                                            <input  data-aos="fade-down" name='Name' class="input" type="text" placeholder="Your Name" value={Name} onChange={(e) =>setName(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Email</label>
                                        <div class="control">
                                            <input  data-aos="fade-down" name='email' class="input" type="email" placeholder="Your Email" value={email} onChange={(e) =>setEmail(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Message</label>
                                        <div class="control">
                                            <textarea  data-aos="fade-down" name='message' class="textarea" placeholder="Your Message" value={message} onChange={(e) =>setMessage(e.target.value)} required></textarea>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <button  data-aos="fade-down" class="button is-primary" onClick={handlesubmit} >Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>© 2023 Yash Dafade | All rights reserved.</p>
                </footer>
            </div>

        </>
    )
}
export default Contactme
