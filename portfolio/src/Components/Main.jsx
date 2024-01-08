import React from 'react'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import './PortfolioStyle.css'


const Main = () => {


    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Yash Dafade','Front-End Web Developer', 'Web Designer', 'Freelancer','Java Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            showCursor: false
        });
    })
    return (
        <>
            <section className="home" id="home">
                
                <div className="intro">
                    <div className="content">
                        <h3 data-aos="fade-up">Hello, I'm</h3>
                        <div data-aos="fade-up" data-aos-delay="50" className="typed">
                        <h1><span ref={el}></span></h1>
                        </div>
                        
                        <p data-aos="fade-up" data-aos-delay="70">
                            A dynamic web developer and tech enthusiast
                        </p>
                        <div data-aos="fade-up" data-aos-delay="50" className="links">
                        <a href="https://drive.google.com/file/d/1UuTrUM0YUgB9sVvEPFfld0CtvHW71s4c/view?usp=sharing" target='_blank' className="btn">
                            View CV
                        </a>
                        <a href="#contact" className="btn">
                            Hire Me
                        </a>
                        </div>
                    </div>
                    <div className="image">
                        <img data-aos="fade-up" data-aos-delay="90" src="./Assets/Myavatar2.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main
