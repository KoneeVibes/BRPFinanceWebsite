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
  const article = newsItem.results;
  const NEWS = process.env.REACT_APP_NEWS;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/realestate.json?api-key=${NEWS}`
      );
      const data = await response.json();
      setnewsItem(data);
    };
    fetchNews();
  }, [NEWS]);

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
        DateStamp={article && article[id].published_date}
        Thumbnail={article && article[id].multimedia[0].url}
        NewsContent={article && article[id].abstract}
        url={article && article[id].url} />
      <Footer />
    </div>
  )
}

export default NewsPiece