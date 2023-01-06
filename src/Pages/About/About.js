import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import SendMail from '../../Components/SendMail/SendMail';
import HeaderPhoto from './Assets/HeaderPhoto.png'

const About = () => {
    return (
        <div>
            <NavBar />
            <Header background={HeaderPhoto}
                height={'51.6875em'}/>
            <SendMail/>
            <Footer/>
        </div>
    )
}

export default About