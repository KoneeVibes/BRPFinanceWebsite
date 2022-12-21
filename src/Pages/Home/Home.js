import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ImageTextBox from '../../Components/ImageTextBox/ImageTextBox';
import NavBar from '../../Components/NavBar/NavBar';
import HeaderBg from './Assets/HeaderBg.svg';
import './Home.css';
import HeroPhoto from './Assets/HeroPhoto.png';
import DownloadButton from '../../Components/DownloadButton/DownloadButton';
import IconI from './Assets/IconI.svg';
import IconII from './Assets/IconII.svg';
import ContactUs from './Assets/ContactUs.svg';
import ContactButton from '../../Components/DownloadButton/ContactButton';
import TextCard from '../../Components/TextCard/TextCard';
import HomeIcon from './Assets/Home.svg';
import LoanIcon from './Assets/Loan.svg';
import MortgageIcon from './Assets/Mortgage.svg';
import IconIII from './Assets/SquaredIconI.svg';
import IconIV from './Assets/SquaredIconII.svg';
import IconV from './Assets/SquaredIconIII.svg';
import SendMail from '../../Components/SendMail/SendMail';
import Calendly from '../../Components/Calendly/Calendly';


const Home = () => {
    return (
        <div id='Home'>
            <NavBar />
            <Header background={`url(${HeaderBg})`}
                height={'47.75em'}
                widthLF={'45%'}
                widthRF={'55%'}
                HeaderTextI={'Looking for a home loan? BRP Finance is here to help.'}
                Body={"If it's your first home, or if it's time to renovate, refinance or invest, we're here to help make it happen."}
                BtnTxt={'Download your free guide to using a mortgage broker'} />
            <div className='Hero-Tab'>
                <ImageTextBox src={HeroPhoto}
                    IconI={IconI}
                    IconII={IconII}
                    HeadTextI={'If you’re looking for a home loan, BRP Finance is here to help.'}
                    HeadTextII={'We streamline the process.'}
                    BodyI={'There are lots of good reasons why more than half of Australians now use a broker to secure a home loan. Probably the most important one that is we work for you, not the banks. We speak to you first to find out what you need, and then we use our knowledge of the market to better negotiate with the lenders. Then we get a range of options before we work out which one is right for you, not what’s right for the lenders.'}
                    BodyII={'The first step is we discuss what your financial needs and goals are. Then we research the many different products from a range of lenders to ensure we find the right solution. And just to make things even easier, we’ll do the paperwork, manage the application process and then take it through to settlement.Best of all, because this is what we specialise in, we get the process moving quickly. We use our relationships with lenders to secure your finance as fast as possible.'}
                    Button={<DownloadButton ButtonText={'Download Our Guide'} />}
                    widthIB={'55%'}
                    widthTCB={'45%'}
                    gap={'3em'} />
            </div>
            <div className='Contact-Us'>
                <ImageTextBox src={ContactUs}
                    HeadTextI={'Speak to a Mortgage Broker '}
                    BodyI={'when it comes to buying your first home, it’s a great idea to speak to a mortgage broker first! Heath Brunn is the Managing Director and Founder of BRP finance . He won the VIC/TAS best broker insurance sales  2021/2022 at the AFG Broker Awards. '}
                    flexDirection={'row-reverse'}
                    widthIB={'50%'}
                    widthTCB={'50%'}
                    DisplayI={'none'}
                    DisplayII={'none'}
                    DisplayCardII={'none'}
                    Button={<ContactButton ButtonText={'Contact a Mortage Broker'}
                        Background={'#F6F6F6'} />}
                    alignItems={'center'} />
            </div>
            <div className='Getting-Started'>
                <h4>Get started with our free guides.</h4>
                <div className='Text-Cards'>
                    <TextCard Icon={HomeIcon}
                        HeadText={'Investing in property'}
                        Body={'Having the right people to help you is key when investing in property. Do your homework on the property market before you dive in, and we’ll be thrilled to help you when it comes to financing your decision.'}
                        Button={<DownloadButton ButtonText={'Download your free guide'}
                            Direction={'row-reverse'}
                            Display={'none'}
                            Background={'none'} />}
                        Background={'#F7F7F7'}
                        Border={'1px solid #DBE4E9'}
                        BorderRadius={'20px'} />
                    <TextCard Icon={LoanIcon}
                        HeadText={'Refinancing your home loan'}
                        Body={'As time marches on, situations change. Perhaps you’ve changed jobs? Or there’s a new addition to the family? Maybe you would just like a better rate or maybe you want to start that renovation project.'}
                        Button={<DownloadButton ButtonText={'Download your free guide'}
                            Direction={'row-reverse'}
                            Display={'none'}
                            Background={'none'} />}
                        Background={'#F7F7F7'}
                        Border={'1px solid #DBE4E9'}
                        BorderRadius={'20px'} />
                    <TextCard Icon={MortgageIcon}
                        HeadText={'Becoming a first home buyer'}
                        Body={'Buying your first home is an exciting, but big step to take and one that comes with many questions and decisions. The two big questions are how much you can borrow and what are your likely repayments to be.'}
                        Button={<DownloadButton ButtonText={'Download your free guide'}
                            Direction={'row-reverse'}
                            Display={'none'}
                            Background={'none'} />}
                        Background={'#F7F7F7'}
                        Border={'1px solid #DBE4E9'}
                        BorderRadius={'20px'} />
                </div>
            </div>
            <div className='Info-Container'>
                <h3>We work fast, and we work
                    hard for our clients.</h3>
                <div className='Text-Cards'>
                    <TextCard Icon={IconIII}
                        HeadText={'Find out about the advantages of using a broker.'}
                        Body={'Find out about the advantages of using a broker.Having a broker negotiate finance on your behalf is the smart way to go as they look to save you time, stress and money. You might still be saving for your first home, wishing to use the equity in your current one, or wondering if you’re getting the right possible deal with your existing lender.'}
                        BorderRadius={'19px'}
                        BoxShadow={'0px 4px 17px rgba(147, 147, 147, 0.24)'} />
                    <TextCard Icon={IconIV}
                        HeadText={'Crunch the numbers with our suite of calculators.'}
                        Body={'Take advantage of our 20 clever calculators including our borrowing power calculator, our loan comparison calculator and our extra repayment calculator. The range of calculators will help give you an idea of the amount you may be able to borrow and what the likely repayments may be.'}
                        BorderRadius={'19px'}
                        BoxShadow={'0px 4px 17px rgba(147, 147, 147, 0.24)'} />
                    <TextCard Icon={IconV}
                        HeadText={'Let’s catch up and get started.'}
                        Body={'The first thing we do is catch up to understand what it is you want. We are, after all, your finance professional, so the better we get to know you, your financial circumstances and long term goals, the better we can help you.Once we agree on the right loan, we take care of the application, managing the process on your behalf.'}
                        BorderRadius={'19px'}
                        BoxShadow={'0px 4px 17px rgba(147, 147, 147, 0.24)'} />
                </div>
            </div>
            <Calendly />
            <div className='Mail-Box-Container'>
                <SendMail />
            </div>
            <Footer />
        </div>
    )
}

export default Home