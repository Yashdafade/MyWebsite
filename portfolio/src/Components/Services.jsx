import React from 'react'
import './PortfolioStyle.css'

const Services = () => {
    return (
        <>
            {/* <section class="pb-5 pt-5" id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="center-heading">
                                <h2 class="section-title">My Services</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <a href="#contact" class="services-small-item">
                                <div class="icon">
                                    <i class='bx bx-code-curly'></i>
                                </div>
                                <h5 class="services-title">Front-End Development</h5>
                                <p>Craft responsive and engaging websites with HTML, CSS, Bootstrap, and JavaScript, including dynamic features using React.js.</p>
                                <div class="button">
                                    <i class="fa fa-chevron-right"></i>
                                </div>
                            </a>
                            <div class="item-bg"></div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="#contact" class="services-small-item">
                                <div class="icon">
                                    <i class='bx bxl-react' ></i>
                                </div>
                                <h5 class="services-title">React.js Development</h5>
                                <p>Specialize in building optimized single-page applications with reusable components and efficient state management using React.js and Redux.</p>
                                <div class="button">
                                    <i class="fa fa-chevron-right"></i>
                                </div>
                            </a>
                            <div class="item-bg"></div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="#contact" class="services-small-item">
                                <div class="icon">
                                    <i class='bx bx-git-branch' ></i>
                                </div>
                                <h5 class="services-title">Git Version Control</h5>
                                <p>Provide expertise in Git version control, ensuring seamless collaboration and efficient project history management on GitHub.</p>
                                <div class="button">
                                    <i class="fa fa-chevron-right"></i>
                                </div>
                            </a>
                            <div class="item-bg"></div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <a href="#contact" class="services-small-item">
                                <div class="icon">
                                    <i class='bx bxl-figma'></i>
                                </div>
                                <h5 class="services-title">UI/UX Integration</h5>
                                <p>Seamlessly translate Figma designs into pixel-perfect, responsive web interfaces, collaborating closely with designers for flawless integration.</p>
                                <div class="button">
                                    <i class="fa fa-chevron-right"></i>
                                </div>
                            </a>
                            <div class="item-bg"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="services" id='services'>
                <div class="container2">
                    <h1 data-aos="fade-up">My Services</h1>
                    <div class="row" data-aos="fade-up" data-aos-delay="50">
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="50">
                            <div class="service_box" >
                                <div class="service_icon">
                                <i class='bx bx-code-alt'></i>
                                </div>
                                <h3>Front-End Developer</h3>
                                <p>Craft responsive and engaging websites with HTML, CSS, Bootstrap, and JavaScript, including dynamic frameworks.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="60">
                            <div class="service_box">
                                <div class="service_icon">
                                <i class='bx bxl-react' ></i>
                                </div>
                                <h3>React.js Development</h3>
                                <p>Specialize in building optimized single-page applications with reusable components using React.js & Redux.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="70">
                            <div class="service_box">
                                <div class="service_icon">
                                <i class='bx bx-git-branch' ></i>
                                </div>
                                <h3>Git Version Control</h3>
                                <p>Provide expertise in Git version control, ensuring seamless collaboration and management on GitHub.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="80">
                            <div class="service_box">
                                <div class="service_icon">
                                <i class='bx bxl-figma'></i>
                                </div>
                                <h3>UI/UX Integration</h3>
                                <p>Seamlessly translate Figma designs into web interfaces, collaborating closely with designers for flawless integration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services
