import React from 'react';
import styled from 'styled-components';
import ArrowRight from './Assets/ArrowRightII.svg'

const ContactButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 2em;
    border: none;

    p{
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0em;
        color: #000000;
    }

    @media screen and (max-width: 1400px){
      p{
        font-size: 20px;
      }
    }

    @media screen and (max-width: 768px){
      p{
        font-size: 14px;
      }
    }

    @media screen and (max-width: 280px){
      gap: 5px;

      p{
        font-size: 10px;
        line-height: 15px;
      }
    }

    @media screen and (max-width: 200px){
      img{
        display: none;
      }

      p{
        font-size: 7px;
        line-height: 13px;
      }
    }
`

const ContactButton = ({ButtonText, Background, Type, Width, Display, BorderRadius, BoxShadow, Padding}) => {
  return (
    <ContactButtonWrapper type={Type} style={{background: Background, width: Width, borderRadius: BorderRadius, boxShadow: BoxShadow, padding: Padding}}>
        <p id='Button-Text'>{ButtonText}</p>
        <img src={ArrowRight} alt='Arrow Right Icon' style={{display: Display}}></img>
    </ContactButtonWrapper>
  )
}

export default ContactButton