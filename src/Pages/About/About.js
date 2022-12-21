import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import SendMail from '../../Components/SendMail/SendMail'

const About = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <SendMail/>
            <Footer/>
        </div>
    )
}

export default About