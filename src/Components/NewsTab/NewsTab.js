import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactButton from '../DownloadButton/ContactButton';

const NewsTabWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: var(--sectioning-gap);
  gap: var(--flex-gap);

  .Image-Flank{
    flex: 40%;
  }

  .Text-Flank{
    flex: 60%;
  }

  h4{
    font-family: 'Montserrat';
    font-size: 22px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    color: #000000;
  }

  a{
    text-decoration: none;
  }

  p{
    font-family: 'Montserrat';
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
  }

  @media screen and (max-width: 1440px){
    .Image-Flank img{
      width: 100%;
    }
  }

  @media screen and (max-width: 1440px){

    h4{
      font-size: 18px;
      line-height: 25px
    }

    p{
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 1024px){
    flex-direction: column;
    align-items: unset;
  }

  @media screen and (max-width: 500px){
    h4{
      font-size: 16px;
      line-height: 22px;
    }

    p{
      font-size: 12px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 280px){
    h4{
      font-size: 12px;
      line-height: 16px;
    }

    p{
      font-size: 8px;
      line-height: 12px;
    }
  }

  @media screen and (max-width: 150px){
    h4{
      font-size: 8px;
      line-height: 12px;
      word-break: break-all;
    }

    p{
      font-size: 5px;
      line-height: 8px;
      word-break: break-all;
    }
  }
`

const NewsTab = ({ src, NewsTitle, DateStamp, IntroText, link }) => {
  return (
    <NewsTabWrapper>
      <div className='Image-Flank'>
        <Link to={link}><img src={src} alt="news thumbnail"></img></Link>
      </div>
      <div className='Text-Flank'>
        <Link to={link}>
          <h4>
            {NewsTitle}
          </h4>
        </Link>
        <h4>
          {DateStamp}
        </h4>
        <p>
          {IntroText}
        </p>
        <Link to={link}>
          <ContactButton
            Background={'none'}
            ButtonText={'Read More '} />
        </Link>
      </div>
    </NewsTabWrapper>
  )
}

export default NewsTab