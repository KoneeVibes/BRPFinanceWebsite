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
                    HeadTextI={'We’ll help you find the right loan.'}
                    BodyI={'Because we work for you, a broker will always put in that extra effort.'}
                    gap={`var(--flex-gap)`}
                    widthIB={'40%'}
                    widthTCB={'60%'}
                    UtilityI={<TextCard Icon={WorkIcon}
                        HeadText={'We do the hard work.'}
                        Body={'We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow it down to the ones that suit your specific needs. Then we choose together.'} />}
                    UtilityII={<TextCard Icon={ProcessIcon}
                        HeadText={'And we help with the whole process.'}
                        Body={'We don’t stop at just finding the finance. We’ll help complete the paperwork, manage the application process and follow it through to approval. Leaving you time to get excited about your new home.'} />} />
            </div>
        </div>
    )
}

export default HomeLoan