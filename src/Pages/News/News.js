import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import './News.css';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import { LiveNews } from '../../Utils/LiveNews';

const News = () => {
  return (
    <div id='News'>
      <NavBar />
      <Header
        background={`url(${HeaderPhoto})`}
        height="35.9375em"
        HeaderTextI={'Stay Updated on Real Estate news'}
        DisplayBtn={'none'}
        DisplayReview={'none'}
        widthLF={'40%'}
        widthRF={'60%'} />
      <div className='News-Section'>
        <h3>News</h3>
        <LiveNews />
      </div>
      <Footer />
    </div>
  )
}

export default News