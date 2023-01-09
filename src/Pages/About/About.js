import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import SendMail from '../../Components/SendMail/SendMail';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import './About.css';
import AnimatedHero from '../../Components/AnimatedHero/AnimatedHero';
import ImageTextBox from '../../Components/ImageTextBox/ImageTextBox';
import ImageBoxPhoto from './Assets/ImageTextBoxPhoto.svg';
import TextCard from '../../Components/TextCard/TextCard';
import ImageI from './Assets/ImageI.svg';
import ImageII from './Assets/ImageII.svg';
import ImageIII from './Assets/ImageIII.svg';
import ImageIV from './Assets/ImageIV.svg';
import Testimony from './Assets/TestimonyPhoto.svg';
import Calendly from '../../Components/Calendly/Calendly';
import ContactButton from '../../Components/DownloadButton/ContactButton';

const About = () => {
    return (
        <div id='About'>
            <NavBar />
            <Header background={`url(${HeaderPhoto})`}
                height={'49.875em'}
                HeaderTextI={"Who are we?"}
                HeaderTextII={"We're mortgage brokers."}
                Body={"We'll help navigate you through the competitive and ever-changing mortgage landscape to find the right loan for you."}
                BtnTxt={'Download your free guide to using a mortgage broker'}
                widthLF={'55%'}
                widthRF={'45%'} />
            <div className='Animated-Hero'>
                <AnimatedHero />
            </div>
            <div className='Hero-Tab'>
                <ImageTextBox src={ImageBoxPhoto}
                    flexDirection={'row-reverse'}
                    DisplayII={'none'}
                    DisplayI={'none'}
                    gap={`var(--flex-gap)`}
                    widthIB={'40%'}
                    widthTCB={'60%'}
                    HeadTextI={'When should you see us and what can you expect?'}
                    BodyI={"You can see us at any stage in your financial journey. You might still be saving for your first home, wishing to use the equity in your current one, or wondering if you're still getting the right deal with your existing lender. You can make an obligation-free appointment with us at a time and place that suits you."}
                    BodyII={"We will ask about your financial circumstances and objectives to find out what's important to you in a home loan. For example, flexibility might be important because you plan to start a family or you may want ready access to equity for a rental property or renovations. Whatever your plans, we will research the market and recommend the right home loan to suit your needs. We always look for the right loan for you, not the lender."} />
            </div>
            <div className='Profile-Section'>
                <TextCard Icon={ImageI}
                    HeadText={'Heath Brunn'}
                    Body={"Managing Director and Founder of BRP finance. Senior Mortgage Broker "}
                    Display={'flex'}
                    FlexDirection={'column'}
                    Gap={`var(--flex-gap)`} />
                <TextCard Icon={ImageII}
                    HeadText={'Sarah Christopher'}
                    Body={'Mortgage and Finance Broker'}
                    Display={'flex'}
                    FlexDirection={'column'}
                    Gap={`var(--flex-gap)`} />
                <TextCard Icon={ImageIII}
                    HeadText={'Adam Shugg'}
                    Body={'Mortgage and Finance Broker'}
                    Display={'flex'}
                    FlexDirection={'column'}
                    Gap={`var(--flex-gap)`} />
                <TextCard Icon={ImageIV}
                    HeadText={'Leah & Tara'}
                    Body={'Admin Team'}
                    Display={'flex'}
                    FlexDirection={'column'}
                    Gap={`var(--flex-gap)`} />
            </div>
            <div className='Testimony-Section'>
                <ImageTextBox src={Testimony}
                    flexDirection={'row-reverse'}
                    DisplayCardII={'none'}
                    DisplayI={'none'}
                    widthIB={'57%'}
                    widthTCB={'43%'}
                    gap={`var(--flex-gap)`}
                    HeadTextI={'Our customers love what we do'}
                    BodyI={"Over 50,000 people use BRP finance to buy homes, get loans and many more."}
                    UtilityI={<ContactButton Display={'none'}
                        ButtonText={'work with us'}
                        Background={'#FFF5F5'}
                        BorderRadius={'7px'}
                        BoxShadow={'0px 4px 3px rgba(0, 0, 0, 0.25)'}
                        Padding={`0 var(--card-padding)`} />} />
            </div>
            <div className='Calendly-Box'>
                <Calendly />
            </div>
            <SendMail />
            <Footer />
        </div>
    )
}

export default About