import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const NewsIWrapper = styled.div`

`

const NewsI = () => {
  return (
    <NewsIWrapper>
        <NavBar/>
        <Header/>
        
        <Footer/>
    </NewsIWrapper>
  )
}

export default NewsI