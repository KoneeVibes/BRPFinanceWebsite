import React from 'react';
import styled from 'styled-components';

const NewsContainerWrapper = styled.div`
    margin: var(--page-padding);
    padding: var(--sectioning-gap);

    .Header{
        border-bottom: 1.5px solid #DBDBDB;
    }

    img{
        width: 100%;
    }

    .Image-Container{
        padding: var(--sectioning-gap);
    }

    h4{
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
    }

    p{
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: -0.02em;
    }

    @media screen and (max-width: 1024px){
        h4{
            font-size: 25px;
            line-height: 36px;
        }

        p{
            font-size: 16px;
            line-height: 29px;
        }
    }

    @media screen and (max-width: 280px){
        h4{
            font-size: 14px;
            line-height: 25px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 150px){
        h4{
            font-size: 8px;
            line-height: 14px;
            word-break: break-all;
        }

        p{
            font-size: 5px;
            line-height: 10px;
            word-break: break-all;
        }
    }
`


const NewsContainer = ({ Thumbnail, NewsContent }) => {
    return (
        <NewsContainerWrapper>
            <div className='Header'>
                <h4>Pawleena church proving popular with buyers</h4>
                <h4>24 NOV 2022</h4>
            </div>
            <div>
                <div className='Image-Container'>
                    <img src={Thumbnail} alt="news thumbnail"></img>
                </div>
                <p>{NewsContent}</p>
            </div>
        </NewsContainerWrapper>
    )
}

export default NewsContainer