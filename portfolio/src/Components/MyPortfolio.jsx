import React from 'react'
import './PortfolioStyle.css'
import Navbar from './Navbar'
import Main from './Main'
import Aboutme from './Aboutme'
import Services from './Services'
import Contactme from './Contactme'
import Projects from './Projects'
import Skills from './Skills'

const MyPortfolio = () => {

    return (
        <>
        <Navbar/>
        <Main/>
        <Aboutme/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contactme/>
        </>
    )
}

export default MyPortfolio
