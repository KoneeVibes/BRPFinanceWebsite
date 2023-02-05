import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LinkedIn from './Assets/LinkedInIcon.svg';
import Messenger from './Assets/MessengerIcon.svg';
import Twitter from './Assets/TwitterIcon.svg';
import Instagram from './Assets/UnknownIcon.svg';

const FooterCardWrapper = styled.section`
    a{
        text-decoration: none;
    }

    h5{
        color: #181433;
        font-family: Manrope;
        font-size: 21px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
    }

    p{
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        color: #2E2E2E;
    }
    
    .SM-Icons{
        display: flex;
        align-items: center;
        gap: 1em;
        padding: var(--sectioning-gap);
    }

    @media screen and (min-width: 1280px) and (max-width: 1543px){
        h5{
            font-size: 18px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px){
        h5{
            font-size: 16px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 280px){
        h5{
            font-size: 16px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }

        .SM-Icons img{
            width: 50%;
        }

        .SM-Icons{
            gap: 0;
        }
    }

    @media screen and (max-width: 170px){
        h5{
            font-size: 12px;
            word-break: break-all;
        }

        p{
            font-size: 8px;
            line-height: 15px;
            word-brek: break-all;
        }

        .SM-Icons{
            flex-direction: column;
            align-items: stretch;
        }

        .SM-Icons img{
            width: 10%;
        }
    }

    @media screen and (max-width: 100px){
        h5{
            font-size: 4px;
        }

        p{
            font-size: 3px;
            line-height: 7px;
        }
    }
`

const FooterCard = ({ HeadText, TextOne, TextTwo, TextThree, TextFour, display }) => {
    return (
        <FooterCardWrapper>
            <h5>{HeadText}</h5>
            <Link><p>{TextOne}</p></Link>
            <Link><p>{TextTwo}</p></Link>
            <Link><p>{TextThree}</p></Link>
            <Link><p>{TextFour}</p></Link>
            <div className='SM-Icons' style={{ display: display }}>
                <Link><img src={LinkedIn} alt='LinkedIn Icon'></img></Link>
                <Link><img src={Messenger} alt='Messenger Icon'></img></Link>
                <Link><img src={Twitter} alt='Twitter Icon'></img></Link>
                <Link><img src={Instagram} alt='Instagram Icon'></img></Link>
            </div>
        </FooterCardWrapper>
    )
}

export default FooterCard