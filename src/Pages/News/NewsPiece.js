import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import HeaderPhoto from './Assets/NewsPieceHeaderPhoto.svg';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import NewsContainer from '../../Components/NewsContainer/NewsContainer';

const NewsPiece = () => {

  const { id } = useParams();
  const [newsItem, setnewsItem] = useState([]);
  const article = newsItem.articles;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=australia&apiKey=14e351c3a94343bd916bbc36bc8560ed'
      );
      const data = await response.json();
      setnewsItem(data);
    };
    fetchNews();
  }, []);

  return (
    <div id='NewsI'>
      <NavBar />
      <Header
        background={`url(${HeaderPhoto})`}
        height="35.9375em"
        HeaderTextI={"Stay Updated on Real Estate News"}
        DisplayBtn={'none'}
        DisplayReview={'none'}
        widthLF={'40%'}
        widthRF={'60%'} />
      <NewsContainer
        Title={article && article[id].title}
        DateStamp={article && article[id].publishedAt}
        Thumbnail={article && article[id].urlToImage}
        NewsContent={article && article[id].content}
        url={article && article[id].url} />
      <Footer />
    </div>
  )
}

export default NewsPiece