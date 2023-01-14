import React from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import './HomeLoan.css';
import HeaderPhoto from './Assets/HeaderPhoto.svg';

const HomeLoan = () => {
    return (
        <div id='HomeLoan'>
            <NavBar />
            <Header background={`url(${HeaderPhoto})`}
                height={'51.8125em'}
                widthLF={'55%'}
                widthRF={'45%'}
                HeaderTextI={'Buying a property is a time to be excited. '}
                Body={'Don’t waste it looking for a loan.'}
                DisplayBtn={'none'}
            />
        </div>
    )
}

export default HomeLoan