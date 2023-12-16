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

                <div class="contact-content" data-aos="fade-up">
                    <h3 >Email Me At </h3>
                    <a  href="mailto:yashdafade93@gmail.com"><p>yashdafade93@gmail.com</p></a>
                    <h3 >Find Me On </h3>
                    <div class="contact-links">
                        <a data-aos-delay="70" target='_blank' href="https://github.com/Yashdafade"><i class='bx bxl-github'></i></a>
                        <a data-aos-delay="90" target='_blank' href="https://www.linkedin.com/in/yash-dafade-992ab2209/"><i class='bx bxl-linkedin'></i></a>
                        <a data-aos-delay="110" target='_blank' href="https://www.instagram.com/yashdafade/"><i class='bx bxl-instagram' ></i></a>
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
