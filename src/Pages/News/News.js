import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import './News.css';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import NewsTab from '../../Components/NewsTab/NewsTab';
import ThumbNailOne from './Assets/ThumbnailOne.svg';
import ThumbNailTwo from './Assets/ThumbnailTwo.svg';
import ThumbNailThree from './Assets/ThumbnailThree.svg';
import ThumbNailFour from './Assets/ThumbnailFour.svg';
import { DailyNews } from '../../Utils/DailyNews';

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
        <div className='NewsTabs'>
          <DailyNews/>
          <NewsTab
            src={ThumbNailOne}
            NewsTitle={'A Hamptons-style home that ticks every box'}
            DateStamp={'24 NOV 2022'}
            IntroText={'This gorgeous home has something to discover around every corner, and often these details will not be found anywhere else.'}
            link={'/news/pawleena church proving popular with buyers'} />
          <NewsTab
            src={ThumbNailTwo}
            NewsTitle={'Pawleena church proving popular with buyers'}
            DateStamp={'24 NOV 2022'}
            IntroText={'This gorgeous home has something to discover around every corner, and often these details will not be found anywhere else.'} />
          <NewsTab
            src={ThumbNailThree}
            NewsTitle={'A Hamptons-style home that ticks every box'}
            DateStamp={'24 NOV 2022'}
            IntroText={'This gorgeous home has something to discover around every corner, and often these details will not be found anywhere else.'} />
          <NewsTab
            src={ThumbNailFour}
            NewsTitle={'A Hamptons-style home that ticks every box'}
            DateStamp={'24 NOV 2022'}
            IntroText={'This gorgeous home has something to discover around every corner, and often these details will not be found anywhere else.'} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News