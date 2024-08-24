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
                                <h3>Full-Stack Development</h3>
                                <p>Develop end-to-end web applications using ReactJS, Node.js, Express.js, and MySQL with a focus on scalability and performance.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="60">
                            <div class="service_box">
                                <div class="service_icon">
                                    <i class='bx bxl-react' ></i>
                                </div>
                                <h3>React.js & Redux</h3>
                                <p>Build optimized and reusable single-page applications with React.js and Redux, ensuring state management and efficiency.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="70">
                            <div class="service_box">
                                <div class="service_icon">
                                    <i class='bx bx-key'></i>
                                </div>
                                <h3>API Development & Integration</h3>
                                <p>Design and implement secure REST APIs with JWT-based authentication, integrating third-party services seamlessly.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="80">
                            <div class="service_box">
                                <div class="service_icon">
                                    <i class='bx bx-git-branch'></i>
                                </div>
                                <h3>CI/CD & Git Version Control</h3>
                                <p>Implement Continuous Integration/Continuous Deployment pipelines and manage codebases with Git for streamlined development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Services
