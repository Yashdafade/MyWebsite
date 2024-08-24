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
                            <p data-aos="fade-up">Driven by a passion for web development, I am eager to launch my career by seeking entry-level opportunities with forward-thinking organizations. I'm motivated to apply my growing skill set in full-stack development while continuously mastering the latest technologies in this ever-evolving field. Ready to contribute, learn, and thrive in a collaborative and innovative environment.</p>
                            <br />
                            <div data-aos="fade-up" class="text">Why Work With Me?</div>
                            <p data-aos="fade-up">I'm a proficient full-stack web developer skilled in <b>ReactJS, Node.js, Express.js, and MySQL</b>. My experience includes <b>developing and deploying complex web applications, implementing JWT-based authentication, and managing version control using Git and GitHub</b>. Committed to delivering high-quality, efficient solutions, I stay current with industry trends and continuously expand my knowledge. As a dedicated team player, I aim to create impactful digital experiences that not only meet but exceed expectations. Let's collaborate to bring your vision to life!</p>
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
                                    <div data-aos="fade-up" class="skill-bar-percent">80%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '80%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="70%">
                                    <div data-aos="fade-up" class="skillbar-title">ExpressJS and NodeJS</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">80%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '80%' }}></div>
                                </div>

                                <div class="skillbar" data-percent="80%">
                                    <div data-aos="fade-up" class="skillbar-title">Java</div>
                                    <div data-aos="fade-up" class="skill-bar-percent">70%</div>
                                    <div data-aos="fade-up" class="skillbar-bar" style={{ width: '70%' }}></div>
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
