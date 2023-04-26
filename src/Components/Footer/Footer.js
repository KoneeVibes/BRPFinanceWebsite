import React from 'react';
import styled from 'styled-components';
import FooterCard from './FooterCard';
import Newsletter from './Newsletter';

const FooterWrapper = styled.footer`

  padding: var(--page-padding);
  margin-top: 7em;

  .Upper-Section{
    display: flex;
    align-items: flex-start;
    gap: 2em;
    justify-content: space-between;
    border-bottom:  2.54px solid #E5E5EA;
  }

  .Lower-Section{
    padding: var(--sectioning-gap);
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  a{
    text-decoration: none;
    color: #000000;
  }

  @media screen and (min-width: 1440px) and (max-width: 1728px){
    .Upper-Section{
      gap: 6em;
    }
  }

  @media screen and (max-width: 1024px){
    .Upper-Section{
        flex-direction: column-reverse;
    } 
  }

  @media screen and (max-width: 550px){
    .Lower-Section{
      font-size: 12px;
      line-height: 26px;
    }
  }

  @media screen and (max-width: 200px){
    .Lower-Section{
      font-size: 8px;
      line-height: 15px;
      word-break: break-all;
    }
  }
`

const Footer = () => {

  return (
    <FooterWrapper id='Footer'>
      <div className='Upper-Section'>
        <FooterCard HeadText={'HOW WE CAN HELP'}
          TextOne={'Becoming a first home buyer'}
          TextTwo={'Buying a Home'}
          TextThree={'Investing in Property'}
          TextFour={'Refinancing your home loan'}
          urlOne={'https://www.brpfinance.com.au/home-loans/becoming-a-first-home-buyer/'}
          urlTwo={'https://www.brpfinance.com.au/home-loans/buying-a-home/'}
          urlThree={'https://www.brpfinance.com.au/home-loans/investing-in-property/'}
          urlFour={'https://www.brpfinance.com.au/home-loans/refinancing-your-home-loan/'}
          targetOne={'_blank'}
          targetTwo={'_blank'}
          targetThree={'_blank'}
          targetFour={'_blank'} />
        <FooterCard HeadText={'GUIDES'}
          TextOne={'About Us'}
          TextTwo={'Careers'}
          TextThree={'Tips & Guide'}
          TextFour={'Pricing'}
          urlOne={'/about'}
          urlThree={'https://www.brpfinance.com.au/'}
          targetThree={'_blank'}
          display={'none'} />
        <FooterCard HeadText={'TOOLS'}
          TextOne={'Proposal Template'}
          TextTwo={'Invoice Template'}
          TextThree={'Tutorial'}
          TextFour={'Calculator'}
          urlFour={'https://www.brpfinance.com.au/calculators/'}
          targetFour={'_blank'}
          display={'none'} />
        <Newsletter />
      </div>
      <div className='Lower-Section'>
        <p>Copyright @ <a href='https://lemonhq.xyz/' rel='noopener noreferrer external' target='_blank'>Lemon Designs 2023.</a> All Rights Reserved.</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer