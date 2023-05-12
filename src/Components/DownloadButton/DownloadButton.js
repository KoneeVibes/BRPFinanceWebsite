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

    @media screen and (max-width: 550px){
        p{
            font-size: 9px;
            line-height: 14px;
        }

        img:first-child{
            width: 15%;
        }
    }

    @media screen and (max-width: 300px){
        gap: 5px;
        padding: 5px;

        p{
            font-size: 5px;
            line-height: 10px;
        }
    }

    @media screen and (max-width: 160px){
        img{
            display: none;
        }

        p{
            word-break: break-all;
        }
    }
`

const DownloadButton = ({ ButtonText, Direction, Background, handleClick }) => {
    return (
        <DownloadButtonWrapper onClick={handleClick} style={{ flexDirection: Direction, background: Background }}>
            <img src={DownloadIcon} alt='Download Icon'></img>
            <p>{ButtonText}</p>
            <img src={ArrowRight} alt='Arrow right Icon'></img>
        </DownloadButtonWrapper>
    )
}

export default DownloadButton