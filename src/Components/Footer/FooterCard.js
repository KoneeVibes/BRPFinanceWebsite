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