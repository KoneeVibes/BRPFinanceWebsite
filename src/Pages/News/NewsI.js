import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import HeaderPhoto from '../../Pages/Home/Assets/HeaderBg.svg';
import NewsContainer from '../../Components/NewsContainer/NewsContainer';
import Thumbnail from './Assets/NewsIThumbnail.svg';

const NewsI = () => {
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
        Thumbnail={Thumbnail}
        NewsContent={"Today, we are pleased to roll out “Build With Anchorage,” a new full-stack infrastructure offering that facilitates crypto payment gateways, financial products, and market participation. All of these services come with the added benefit of our operational national bank charter and world-class security solution, and today we reveal what we’ve been quietly building with a variety of early partners to illustrate the many ways fintechs to registered investment advisors are building with Anchorage. As more institutions realize the power of Anchorage’s APIs, we see today as the beginning of much larger crypto services expansion for companies outside the crypto industry itself. APIs for Every Business Build With Anchorage fuels partner product and service development through a combination of flexible Anchorage APIs — which partners can connect to programmatically, including trading, settlement, staking, and custody APIs — and a dedicated team of industry-leading solution architects, integration engineers, and deployment strategists. With the offering, Anchorage fully embeds every part of the crypto product life cycle, from idea to implementation to meet clients’ goals. The hands-on partnership with Anchorage allows clients to design and test their own bespoke crypto solutions, bring them to market, and plan for their long-term compliance needs post-rollout. Anchorage has been building with major partners in banking, fintech, and financial services to power their crypto businesses. “Five years ago, Anchorage was forged by the demand for secure crypto custody by institutional clients. Security is in our DNA, and we’ve built that layer into every use case we’re announcing today. Today’s financial services institutions not only want to custody their own crypto balance sheets with us, they want to offer crypto products to their customers or use crypto in novel ways. ‘Build With Anchorage’ enables them to tap into the crypto economy. They see what we see: Every business will be a crypto business.” — Diogo Mónica, Co-Founder and President of Anchorage Digital"} />
      <Footer />
    </div>
  )
}

export default NewsI