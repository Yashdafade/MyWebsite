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
                                <p data-aos="fade-up">Aspiring web developer seeking entry-level opportunities with esteemed organizations. Eager to apply and enhance my skills while mastering new technologies in the dynamic field of web development.</p>
                                <br />
                                <div data-aos="fade-up" class="text">Why Work With Me?</div>
                                <p data-aos="fade-up"> I'm a skilled web developer proficient in <b>HTML, CSS, and JavaScript</b>, with expertise in frameworks like <b>Bootstrap and React.js</b>. My strong grasp of version control using <b>Git and GitHub</b> ensures efficient collaboration. Committed to staying current with industry trends, I bring a passion for continuous learning. As a dedicated team player, I deliver <b>pixel-perfect</b> websites that exceed expectations. Let's transform your ideas into exceptional digital experiences!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    export default Aboutme
