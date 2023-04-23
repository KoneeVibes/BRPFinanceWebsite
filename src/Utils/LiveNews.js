import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContactButton from '../Components/DownloadButton/ContactButton';
import moment from 'moment';

const LiveNewsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--flex-gap);

    .Thumbnail-Section{
        flex: .4;
    }

    .Thumbnail-Section img{
        width: 100%;
        border-radius: 36px;
    }

    .Text-Section{
        flex: .6;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .Text-Section button{
        padding: 0;
    }

    h4{
        font-family: 'Montserrat';
        font-size: 22px;
        font-weight: 700;
        line-height: 36px;
        margin: 0;
    }

    .description{
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        margin: 0;
        color: #939393;
    }

    @media screen and (min-width: 1728px){
        align-items: flex-start;
    }

    @media screen and (max-width: 1440px){
        h4:first-child{
            font-size: 20px;
            line-height: 30px
        }

        h4:nth-child(2){
            font-size: 16px;
            line-height: 25px;
        }

        .description{
            font-size: 14px;
            line-height: 25px;
        }

        .Text-Section{
            gap: .5em;
        }
    }

    @media screen and (max-width: 1280px){
        .Thumbnail-Section img{
            border-radius: 15px;
        }
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }

    @media screen and (max-width: 500px){
        h4:first-child{
            font-size: 16px;
            line-height: 22px;
        }

        h4:nth-child(2){
            font-size: 14px;
            line-height: 25px;
        }

        .description{
            font-size: 12px;
            line-height: 18px;
        }
    }

    @media screen and (max-width: 280px){
        h4:first-child{
            font-size: 12px;
            line-height: 16px;
        }

        h4:nth-child(2){
            font-size: 10px;
            line-height: 14px;
        }

        .description{
        font-size: 8px;
        line-height: 12px;
        }
    }

    @media screen and (max-width: 150px){
        h4:first-child{
        font-size: 8px;
        line-height: 12px;
        word-break: break-all;
        }

        h4:nth-child(2){
            font-size: 7px;
            line-height: 10px;
            word-break: break-all;
        }

        p{
        font-size: 5px;
        line-height: 8px;
        word-break: break-all;
        }
    }
`

export const LiveNews = () => {

    const navigate = useNavigate();
    const [News, setNews] = useState([]);
    const articles = News.articles;

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(
                'https://newsapi.org/v2/everything?q=australia&apiKey=14e351c3a94343bd916bbc36bc8560ed'
            );
            const data = await response.json();
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <div className='NewsTabs' style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sectioning-gap)' }}>
            {articles?.map((article, index) => {
                if (!article.urlToImage){
                    return null
                }
                return (
                    <LiveNewsWrapper key={index} className='NewsTab' >
                        <div className='Thumbnail-Section'>
                            <img src={article.urlToImage} alt='thumbnail' onClick={() => {
                                navigate(`/news/${index}`)
                            }} ></img>
                        </div>
                        <div className='Text-Section'>
                            <h4>{article.title}</h4>
                            <h4>{moment(article.publishedAt).format('DD MMM YYYY')}</h4>
                            <p className='description'>{article.description}</p>
                            <ContactButton
                                Background={'none'}
                                ButtonText={'Read More '}
                                url={`/news/${index}`}
                            />
                        </div>
                    </LiveNewsWrapper>
                )
            }
            )}
        </div>
    )
}
