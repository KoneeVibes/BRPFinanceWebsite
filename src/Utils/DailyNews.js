import React, { useEffect, useState } from 'react'

export const DailyNews = () => {

    const [News, setNews] = useState([]);
    const articles = News.articles;

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(
                'https://newsapi.org/v2/top-headlines?country=us&apiKey=14e351c3a94343bd916bbc36bc8560ed'
            );
            const data = await response.json();
            setNews(data);
        };
        fetchNews();
    }, [])

    // console.log(News);
    console.log(articles);

    return (
        <div>
            {articles?.map((article) => {
                return (
                    <div>
                        <p>{article.title}</p>
                        <img src={article.urlToImage} alt='thumbnail'></img>
                    </div>
                )
            }
            )}
        </div>
    )
}
