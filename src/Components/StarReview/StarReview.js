import React from 'react';
import styled from 'styled-components';
import FullStar from './Assets/FullStar.svg';
import HalfStar from './Assets/HalfStar.svg';

const StarReviewWrapper = styled.section`
    padding: var(--sectioning-gap);

    .Star-Box{
      display: flex;
      align-items: center;
    }

    .Text-Box p{
      font-family: Montserrat;
      font-size: 22px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: 0em;
      color: #FFFFFF;
    }

    @media screen and (max-width: 426px){
      .Text-Box p{
        font-size: 14px;
        line-height: 20px;
      }
    }
    
`

const StarReview = () => {
  return (
    <StarReviewWrapper>
      <div className='Star-Box'>
        <img src={FullStar} alt='Star Icon'></img>
        <img src={FullStar} alt='Star Icon'></img>
        <img src={FullStar} alt='Star Icon'></img>
        <img src={FullStar} alt='Star Icon'></img>
        <img src={HalfStar} alt='Star Icon'></img>
      </div>
      <div className='Text-Box'>
        <p>4.8/5 -From 600 reviews</p>
      </div>
    </StarReviewWrapper>
  )
}

export default StarReview