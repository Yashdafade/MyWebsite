import React, { useState } from 'react'
import './PortfolioStyle.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        setIsMenuOpen(isMenuOpen ? 'bx bx-menu-alt-right' : 'bx bx-x');
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <>
            <header data-aos="fade"> 
                <a href="https://yashdafade.github.io/MyWebsite/"><h1 data-aos="fade-up" className="logo">Portfolio</h1></a>

                <i
                    className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'}`}
                    id="menu-icon"
                    onClick={isMenuOpen ? closeMenu : toggleMenu}
                ></i>


                <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                    <a data-aos="fade-up"  href="#home"><i className='bx bx-home-alt-2'></i>Home</a>
                    <a data-aos="fade-up"  data-aos-delay="50" href="#about-me"><i className='bx bx-user'></i>About Me</a>
                    <a data-aos="fade-up"  data-aos-delay="50" href="#services"><i className='bx bx-briefcase'></i>Services</a>
                    <a data-aos="fade-up"  data-aos-delay="50" href="#projects"><i className='bx bx-code-alt'></i>My Projects</a>
                    <a data-aos="fade-up"  data-aos-delay="50" href="#contact"><i className='bx bx-envelope'></i>Contact Me</a>
                </nav>
            </header>
        </>
    )
}

export default Navbar
