import React from 'react';
import styled from 'styled-components';
import DownloadButton from '../DownloadButton/DownloadButton';
import StarReview from '../StarReview/StarReview';

const HeaderWrapper = styled.section`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    padding-top: 4em;
    align-items: center;
    justify-content: 'flex-start';

    .Header-LF{
        padding: var(--page-padding);
    }

    .Header-RF{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: contain;
    }
`

const Header = ({ background, height, widthLF, widthRF, HeaderTextI, HeaderTextII, Body, gap, BtnTxt, DisplayBtn, DisplayReview, src, srcPosition, handleClick }) => {

    return (
        <HeaderWrapper className='Header' style={{ backgroundImage: background, height: height, gap: gap }}>
            <div className='Header-LF' style={{ flex: widthLF }}>
                <h1>{HeaderTextI}</h1>
                <h2>{HeaderTextII}</h2>
                <p id='Body'>{Body}</p>
                <div className='Btn-Container' style={{ display: DisplayBtn }}>
                    <DownloadButton ButtonText={BtnTxt} handleClick={handleClick} />
                </div>
                <div className='Review-Container' style={{ display: DisplayReview }}>
                    <StarReview />
                </div>
            </div>
            <div className='Header-RF' style={{ flex: widthRF, backgroundImage: src, backgroundPosition: srcPosition }}>
            </div>
        </HeaderWrapper>
    )
}

export default Header