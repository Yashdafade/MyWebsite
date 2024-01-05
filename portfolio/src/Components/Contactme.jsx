import React from 'react'
import './PortfolioStyle.css'

const Contactme = () => {
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
                                <form action="mailto:yashdafade93@gmail.com" method="post" enctype="text/plain">
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Name</label>
                                        <div class="control">
                                            <input  data-aos="fade-down" class="input" type="text" placeholder="Your Name" required/>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Email</label>
                                        <div class="control">
                                            <input  data-aos="fade-down" class="input" type="email" placeholder="Your Email" required/>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label  data-aos="fade-down" class="label">Message</label>
                                        <div class="control">
                                            <textarea  data-aos="fade-down" class="textarea" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <button  data-aos="fade-down" class="button is-primary">Submit</button>
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
