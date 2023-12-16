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
                                <p data-aos="fade-up">An aspiring Web-Developer seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
                                <br />
                                <div data-aos="fade-up" class="text">Why Work With Me?</div>
                                <p data-aos="fade-up">My goal is to always deliver pixel perfect, responsive and interactive websites. I am a team player and always ready to learn new things. I am a hardworking person and always ready to face challenges.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    export default Aboutme
