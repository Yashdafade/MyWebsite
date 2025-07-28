import React from 'react';
import './PortfolioStyle.css'
// import Myavatar3 from 'Assets/Myavatar3.png'


const Aboutme = () => {


    return (
        <>
            <section class="about" id="about-me" data-aos="fade">
                <div data-aos="fade-up" class="about-div">
                    <h2 data-aos="fade-up" class="title">About Me</h2>
                    <div class="about-content">
                        <div class="column left">
                            <img data-aos="fade-up" src="./Assets/Myavatar3.png" alt="MyImage" />
                        </div>
                        <div class="column right">
                            <div data-aos="fade-up" class="text">I'm Yash Dafade</div>
                            <p data-aos="fade-up">I’m a passionate full-stack developer who thrives on building impactful and efficient digital solutions. With a strong command over the MERN stack and a growing expertise in DevOps and AI integrations, I specialize in developing scalable applications from concept to deployment.</p>
                            <br />
                            <div data-aos="fade-up" class="text">Why Work With Me?</div>
                            <p data-aos="fade-up">I bring hands-on experience in <b>React.js, Node.js, Express, and MySQL</b>, coupled with a keen interest in DevOps practices and intelligent automation. My portfolio includes <b>live production-grade apps, JWT-secured APIs, and full-scale deployments using Git & VPS</b>. I believe in continuous learning, clean architecture, and collaborative execution. Let’s transform your ideas into high-performance digital platforms.</p>
                        </div>
                    </div>
                </div>

                <div class="wrapper">
                    <h1 data-aos="fade-up" className='SkillsHead'>My Skills</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="skillbar" data-percent="55%">
                                    <div data-aos="fade-up" class="skillbar-title">ReactJS</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">90%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '90%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="70%">
                                    <div data-aos="fade-up" class="skillbar-title">Git Version Control & Github</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">85%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '85%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="70%">
                                    <div data-aos="fade-up" class="skillbar-title">Database Management(MYSQL)</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">85%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '85%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="70%">
                                    <div data-aos="fade-up" class="skillbar-title">ExpressJS and NodeJS</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">85%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '85%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="80%">
                                    <div data-aos="fade-up" class="skillbar-title">Docker & CI/CD Pipelines</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">70%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '70%' }}></div>
                                </div>

                                 <div class="skillbar" data-percent="80%">
                                    <div data-aos="fade-up" class="skillbar-title">FastAPI + Python AI Integration</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">65%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme
