import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import Experience from "./homepage-comps/Experience"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
import certificateImgs from './../../utils/constants'

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience/>
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificateImgs} />
            <Contact />
        </>
    )
}

export default HomePage