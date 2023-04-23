import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import ContactButton from '../DownloadButton/ContactButton';

const NewsContainerWrapper = styled.div`
    margin: var(--page-padding);
    padding: var(--sectioning-gap);

    .Header{
        border-bottom: 1.5px solid #DBDBDB;
    }

    img{
        width: 100%;
        border-radius: 15px;
    }

    .Image-Container{
        padding: var(--sectioning-gap);
    }

    .Button-Container{
        padding: var(--sectioning-gap);
    }

    a{
        text-decoration: none;
    }

    h4{
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
    }

    .News-Content{
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: -0.02em;
    }

    #Button-Text{
        color: #FFFFFF;
    }

    @media screen and (max-width: 1024px){
        h4{
            font-size: 25px;
            line-height: 36px;
        }

        .News-Content{
            font-size: 16px;
            line-height: 29px;
        }
    }

    @media screen and (max-width: 280px){
        h4{
            font-size: 14px;
            line-height: 25px;
        }

        .News-Content{
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

        .News-Content{
            font-size: 5px;
            line-height: 10px;
            word-break: break-all;
        }
    }
`


const NewsContainer = ({ Thumbnail, NewsContent, Title, DateStamp, url }) => {
    return (
        <NewsContainerWrapper>
            <div className='Header'>
                <h4>{Title}</h4>
                <h4>{moment(DateStamp).format('DD MMM YYYY')}</h4>
            </div>
            <div>
                <div className='Image-Container'>
                    <img src={Thumbnail} alt="news thumbnail"></img>
                </div>
                <p className='News-Content'>{NewsContent}</p>
                <div className='Button-Container'>
                    <a href={url} target='_blank' rel="noopener noreferrer external" >
                        <ContactButton
                            Type={'button'}
                            Background={'#007CB4'}
                            BorderRadius={'16px'}
                            Display={'none'}
                            ButtonText={'Read More'}
                            Padding={(window.screen.availWidth >= 150) ? '0 var(--card-padding)' : null}
                        />
                    </a>
                </div>
            </div>
        </NewsContainerWrapper>
    )
}

export default NewsContainer