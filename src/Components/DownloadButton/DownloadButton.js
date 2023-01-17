import React from 'react';
import styled from 'styled-components';
import DownloadIcon from './Assets/DownloadIcon.svg';
import ArrowRight from './Assets/ArrowRight.svg'

const DownloadButtonWrapper = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    background: #023555;
    border-radius: 16px;
    border: none;
    padding: 1em;

    p{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0em;
        color: #FFFFFF;
    }

    img{
        width: 5%;
    }

    @media screen and (max-width: 693px){
        p{
            font-size: 9px;
            line-height: 14px;
        }
    }
`

const DownloadButton = ({ ButtonText, Direction, Background }) => {
    return (
        <DownloadButtonWrapper style={{ flexDirection: Direction, background: Background }}>
            <img src={DownloadIcon} alt='Download Icon'></img>
            <p>{ButtonText}</p>
            <img src={ArrowRight} alt='Arrow right Icon'></img>
        </DownloadButtonWrapper>
    )
}

export default DownloadButton