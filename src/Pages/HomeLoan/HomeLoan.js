import React from 'react';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import './HomeLoan.css';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import ImageTextBox from '../../Components/ImageTextBox/ImageTextBox';
import ImageBoxPhoto from './Assets/ImageBoxPhoto.svg';
import TextCard from '../../Components/TextCard/TextCard';
import WorkIcon from './Assets/WorkIcon.svg';
import ProcessIcon from './Assets/ProcessIcon.svg';
import Calendly from '../../Components/Calendly/Calendly';
import SendMail from '../../Components/SendMail/SendMail';
import Footer from '../../Components/Footer/Footer';

const HomeLoan = () => {
    return (
        <div id='HomeLoan'>
            <NavBar />
            <Header background={`url(${HeaderPhoto})`}
                height={'51.8125em'}
                widthLF={'60%'}
                widthRF={'40%'}
                HeaderTextI={'Buying a property is a time to be excited. '}
                Body={'Don’t waste it looking for a loan.'}
                DisplayBtn={'none'}
                DisplayReview={'none'}
            />
            <div className='Hero-Tab'>
                <ImageTextBox src={ImageBoxPhoto}
                    DisplayCardII={'none'}
                    DisplayI={'none'}
                    IntroI={'Why Choose Us'}
                    HeadTextI={'We’ll help you find the right loan.'}
                    BodyI={'Because we work for you, a broker will always put in that extra effort.'}
                    gap={`calc(2 * var(--flex-gap))`}
                    widthIB={'50%'}
                    widthTCB={'50%'}
                    flexDirection={'row-reverse'}
                    One={'We’ll meet at a place and time that suits you.'}
                    Two={'We do the legwork.'}
                    Three={'You’ll get a choice of different lenders.'}
                    Four={'You’ll have more options.'}
                    UtilityIII={<TextCard Icon={WorkIcon}
                        HeadText={'We do the hard work.'}
                        Body={'We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow it down to the ones that suit your specific needs. Then we choose together.'} />}
                    UtilityIV={<TextCard Icon={ProcessIcon}
                        HeadText={'And we help with the whole process.'}
                        Body={'We don’t stop at just finding the finance. We’ll help complete the paperwork, manage the application process and follow it through to approval. Leaving you time to get excited about your new home.'} />} 
                    ParentGap={'calc(2 * var(--flex-gap))'}
                    />
            </div>
            <div className='Calendly-Box'>
                <Calendly />
            </div>
            <SendMail />
            <Footer />
        </div>
    )
}

export default HomeLoan