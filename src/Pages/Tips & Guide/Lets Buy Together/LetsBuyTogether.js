import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
// import ImageTextBox from './Assets/ImageTextPhoto.svg';
import NavBar from '../../../Components/NavBar/NavBar';
import TextCard from '../../../Components/TextCard/TextCard';
import HeaderBg from './Assets/HeaderBg.svg';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import './LetsBuyTogether.css';
import ImageTextPhoto from './Assets/ImageTextPhoto.svg';
import HomeIcon from './Assets/HomeIcon.svg';
import InvestmentIcon from './Assets/InvestmentIcon.svg';
import HomeIconII from './Assets/HomeIconII.svg';
import TimeIcon from './Assets/TimeIcon.svg';
import ImageTextBox from '../../../Components/ImageTextBox/ImageTextBox';
import TopTips from './Assets/TopTips.svg';
import Calendly from '../../../Components/Calendly/Calendly';
import SendMail from '../../../Components/SendMail/SendMail';


const LetsBuyTogether = () => {
    return (
        <div id='BuyTogether'>
            <NavBar />
            <Header
                background={`url(${HeaderBg})`}
                src={`url(${HeaderPhoto})`}
                srcPosition={(window.screen.availWidth <= 1024) && 'center bottom'}
                widthLF={(window.screen.availWidth >= 1024) && '50%'}
                widthRF={(window.screen.availWidth >= 1024) && '50%'}
                HeaderTextI={'Let’s buy a home together.'}
                Body={'It’s a big decision, so it’s good to have someone there to help you make the right one.'}
                DisplayBtn={'none'}
                DisplayReview={'none'}
                height={"48.25em"} />
            <div className='Text-Cards'>
                <TextCard
                    HeadText={'New home, no hassles'}
                    DisplayIcon={'none'}
                    Body={'If you dream of a new home but have nightmares at the thought of building one, an off-the-plan purchase may be the perfect compromise. Although you will not get to design everything as you would with a custom-built home, most off-the-plan developments allow some customization of finishes and fixtures. Make sure your contract outlines what you can tailor and that you are clear on any additional costs.'} />
                <TextCard
                    HeadText={'First-home-buyer advantage'}
                    DisplayIcon={'none'}
                    Body={'Various incentives are still being dangled in front of first-home-buyers, which may add to the appeal of buying off the plan.Concessions vary across Australia and some have been curbed since January 1, so visit your State or Territory web site for the latest information on grants and exemptions. You can also research your eligibility for stamp duty concessions on new properties at www.stampdutycalculator.com.au'} />
                <TextCard
                    HeadText={'Investment incentive'}
                    DisplayIcon={'none'}
                    Body={'Off-the-plan apartments are often pitched heavily at investors due to the tax* benefits that come with depreciation on new properties and rental guarantees. Tax savings will depend on your individual circumstances, but generally the newer the property, the higher the depreciation allowance for the building and fixtures. Investors may also be offered attractive rental guarantees for a limited period. Make sure you do your homework on rental returns on similar properties in the area before accepting the developer’s terms. Be wary of over-inflated rental guarantees. Builders will sometimes promise a high-rent yield to lure investors, build the cost into the property price and then subsidize any gap themselves for a short period. When the rental guarantee expires, you may find the actual market rent falls well short of what you originally pocketed. If investing, make sure you have the option to manage the property yourself or with your chosen property manager from the time you take possession.'} />
                <TextCard
                    HeadText={'Beware a boom'}
                    DisplayIcon={'none'}
                    Body={'Many buyers get swept up on a wave of rising property prices when they hand over their deposit in exchange for a floor plan. Historically, property is a consistent long-term performer, but property prices can plateau and even wane at the mercy of economic factors.Buyers also need to be wary of over-supply, which may devalue their property. Make sure you consider the bigger picture if buying off the plan. Research how many other developments are planned in the area and whether any increase in apartment numbers is justified by new or improved infrastructure, such as transport corridors, business precincts, universities or hospitals.'} />
                <TextCard
                    HeadText={'Be discerning about the developer'}
                    DisplayIcon={'none'}
                    Body={'Make sure you purchase from a reputable builder and take the time to research their previous projects. Do they use quality contractors? Do they deliver projects on time? Make a point of visiting some of their projects so you can assess the finished product first-hand.'} />
            </div>
            <ImageTextBox
                src={ImageTextPhoto}
                DisplayI={'none'}
                IconII={TimeIcon}
                IconIII={HomeIconII}
                gap={(window.screen.availWidth <= 768) ? `var(--flex-gap)` : `calc(2 * var(--flex-gap))`}
                widthIB={'50%'}
                widthTCB={'50%'}
                IntroI={'Why Choose Us'}
                HeadTextI={'Common questions for home buyers'}
                HeadTextII={'Time on your side.'}
                HeadTextIII={'New home, no hassles'}
                BodyII={'One of the biggest advantages of buying off the plan is time. Unlike traditional property purchases with relatively short windows to round up the total finance, you will have at least 12 months, if not longer, to settle. Savvy buyers will take advantage of this extra time to save their pennies and reduce their borrowings.'}
                BodyIII={'If you dream of a new home but have nightmares at the thought of building one, an off-the-plan purchase may be the perfect compromise. Although you will not get to design everything as you would with a custom-built home, most off-the-plan developments allow some customisation of finishes and fixtures. Make sure your contract outlines what you can tailor and that you are clear on any additional costs.'}
                flexDirection={(window.screen.availWidth <= 1024) ? 'column-reverse' : 'row-reverse'}
                UtilityIII={<TextCard Icon={HomeIcon}
                    HeadText={'We do the hard work.'}
                    Body={'We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow it down to the ones that suit your specific needs. Then we choose together.'} />}
                UtilityIV={<TextCard Icon={InvestmentIcon}
                    HeadText={'And we help with the whole process.'}
                    Body={'We don’t stop at just finding the finance. We’ll help complete the paperwork, manage the application process and follow it through to approval. Leaving you time to get excited about your new home.'} />}
                ParentGap={(window.screen.availWidth <= 768) && 'var(--flex-gap)'}
            />
            <div className='Top-Tips'>
                <ImageTextBox
                    src={TopTips}
                    widthIB={'50%'}
                    widthTCB={'50%'}
                    gap={'var(--flex-gap)'}
                    DisplayCardII={'none'}
                    DisplayCardIII={'none'}
                    DisplayI={'none'}
                    HeadTextI={'Top Tips'}
                    displayUl={'block'}
                    One={'Investments like this are big decisions, so investing in the right professionals to have onside before you commit is money well spent. Ensure you get professional legal advice on any contract before you sign it and that you speak with your financial advisor or tax professional to make sure you’ve got the right advice from day one.'}
                    Two={'Make sure your deposit will be refunded if the project doesn’t go ahead by a certain date.'}
                    Three={'Make sure the contract contains as much detail as possible about the finished product.'}
                    Four={'Be clear on what finishes and fixtures you can customise.'}
                    Five={'Find out if you can on-sell during construction in case your circumstances change.'}
                    Six={'Ask if you can inspect the site during construction.'}
                    Seven={'Talk to your mortgage broker about'}
                    displayEight={'none'}
                    displayNine={'none'}
                    displayTen={'none'}
                />
            </div>
            <Calendly />
            <div className='SendMail-Box'>
                <SendMail />
            </div>
            <Footer />
        </div>
    )
}

export default LetsBuyTogether