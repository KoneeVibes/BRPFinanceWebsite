import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import NavBar from '../../../Components/NavBar/NavBar';
import './Refinancing.css';
import HeaderBg from '../Lets Buy Together/Assets/HeaderBg.svg';
import ImageBoxPhoto from './Assets/ImageBoxPhoto.svg';
import ImageTextBox from '../../../Components/ImageTextBox/ImageTextBox';
import TextCard from '../../../Components/TextCard/TextCard';
import Calendly from '../../../Components/Calendly/Calendly';
import SendMail from '../../../Components/SendMail/SendMail';

const Refinancing = () => {
    return (
        <div id='Refinancing'>
            <NavBar />
            <Header
                background={`url(${HeaderBg})`}
                height={"48.375em"}
                DisplayBtn={'none'}
                DisplayReview={'none'}
                widthLF={'40%'}
                widthRF={'60%'}
                HeaderTextI={"Refinancing your home loan."}
                Body={"But where to start? We can help you weigh it all up."} />
            <div className='ImageBox-Container'>
                <ImageTextBox
                    BodyI={"As time marches on, situations change. Perhaps you’ve changed jobs? Or there’s a new addition to the family? Maybe you would just like a better rate? Maybe it’s the advent of school fees, or perhaps the kids have flown the coop? Or maybe that leaking shower or tired kitchen has just reached the end of its life. A shift in circumstances may mean it is time to revisit your home finances. For many, the idea of refinancing a mortgage can be daunting. Fees and fixed versus variable interest rates need to be considered. The right refinanced loan might help you to pay off your mortgage faster and for less, clear unhealthy debt or upgrade and add value your home, all of which are steps in the right direction."}
                    DisplayCardII={'none'}
                    DisplayCardIII={'none'}
                    DisplayI={'none'}
                    src={ImageBoxPhoto}
                    flexDirection={'row-reverse'}
                    gap={"var(--flex-gap)"}
                    widthIB={'50%'}
                    widthTCB={'50%'} />
            </div>
            <div className='TextCards'>
                <h6>Common questions for those thinking of refinancing</h6>
                <TextCard
                    HeadText={'Can I get a mortgage where I pay less than I’m paying now?'}
                    Body={'Now is always a great time to shop around or check that you have the right loan for your needs. We’re a great starting point. It will depend what interest rate you’re currently paying, what type of home loan you have (e.g. fixed, variable, interest only, line of credit) and what features you want in your loan. We can quickly explain your options.'}
                    DisplayIcon={'none'} />
                <TextCard
                    HeadText={'Can I consolidate credit card or other debts into a home loan?'}
                    Body={'This is one of the reasons some people refinance. The advantage is that you pay a much lower interest rate on a mortgage than for most other forms of debt – e.g. credit cards, overdraft facilities, personal loans etc. Providing you have sufficient equity in your property, you may be able to consolidate all your debt on a home loan. If you take this option though it is important to make sure you maintain your repayments of the debt that you consolidate at their current level, or you could easily end up paying more over a longer period of time. Speak with us today to discuss your personal needs.'}
                    DisplayIcon={'none'} />
                <TextCard
                    HeadText={'How much money can I borrow?'}
                    Body={'We’re all unique when it comes to our finances and borrowing needs. Get an estimate on how much you may be able to borrow (subject to satisfying legal and lender requirements) with our clever loan options tool. Chat to us when you’re ready, we can help with calculations based on your circumstances.'}
                    DisplayIcon={'none'} />
                <TextCard
                    HeadText={'How do I choose a loan that’s right for me?'}
                    Body={'Our guides to loan types and features (links) will help you learn about the main options available. There are hundreds of different home loans available so talk to us today.'}
                    DisplayIcon={'none'} />
                <TextCard
                    HeadText={'How often do I make home loan repayments — weekly, fortnightly or monthly?'}
                    Body={'Most lenders offer flexible repayment options to suit your pay cycle. Aim for weekly or fortnightly repayments, instead of monthly, as you will make more payments in a year, which will shave dollars and time off your loan.'}
                    DisplayIcon={'none'} />
                <TextCard
                    HeadText={'What fees/costs are involved in switching mortgages?'}
                    Body={'Depending on your loan, penalty fees could apply if you’re paying off your current mortgage early. But these may be offset by repayment savings when you switch home loans. We’ll walk you through any fees that could apply in your circumstances.'}
                    DisplayIcon={'none'} />
            </div>
            <div className='Calendly-Box'>
                <Calendly />
            </div>
            <SendMail />
            <Footer />
        </div>
    )
}

export default Refinancing