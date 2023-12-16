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
                                <p data-aos="fade-up">Enthusiastic about launching a career in web development, I am actively seeking entry-level opportunities with renowned organizations. Motivated to not only apply my existing skills but also to delve into mastering cutting-edge technologies within the dynamic realm of web development. Ready to contribute, learn, and thrive in a collaborative and innovative environment.</p>
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
