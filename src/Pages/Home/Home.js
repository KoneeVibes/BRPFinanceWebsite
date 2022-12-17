import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import HeaderBg from './Assets/HeaderBg.svg';
import './Home.css';

const Home = () => {
    return (
        <div id='Home'>
            <NavBar />
            <Header background={`url(${HeaderBg})`}
                height={'47.75em'}
                widthLF={'50%'}
                widthRF={'50%'}
                HeaderTextI={'Looking for a home loan? BRP Finance is here to help.'}
                Body={"If it's your first home, or if it's time to renovate, refinance or invest, we're here to help make it happen."}
                BtnTxt={'Download your free guide to using a mortgage broker'} />
            <Footer/>
        </div>
    )
}

export default Home