import React from 'react';
import styled from 'styled-components';
import DownloadIcon from './Assets/DownloadIcon.svg';
import ArrowRight from './Assets/ArrowRight.svg'

const DownloadButtonWrapper = styled.button`
    display: flex;
    align-items: center;
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
`

const DownloadButton = ({ ButtonText, Direction, Display, Background }) => {
    return (
        <DownloadButtonWrapper style={{ flexDirection: Direction, background: Background }}>
            <img src={DownloadIcon} alt='Download Icon'></img>
            <p>{ButtonText}</p>
            <img src={ArrowRight} alt='Arrow right Icon'></img>
        </DownloadButtonWrapper>
    )
}

export default DownloadButton