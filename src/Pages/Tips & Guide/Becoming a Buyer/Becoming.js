import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import NavBar from '../../../Components/NavBar/NavBar';
import TextCard from '../../../Components/TextCard/TextCard';
import HeaderBg from './Assets/HeaderBg.svg';
import './Becoming.css';
import Inquiry from "./Assets/InquiryIcon.svg";
import ImageTextBox from '../../../Components/ImageTextBox/ImageTextBox';
import ImageForBox from './Assets/ImageTextBox.svg';
import WorkIcon from '../../HomeLoan/Assets/WorkIcon.svg';
import ProcessIcon from '../../HomeLoan/Assets/ProcessIcon.svg';
import Calendly from '../../../Components/Calendly/Calendly';
import SendMail from '../../../Components/SendMail/SendMail';
import HeaderPhoto from './Assets/HeaderPhoto.svg';

const Becoming = () => {
    return (
        <div id='Becoming'>
            <NavBar />
            <Header
                background={`url(${HeaderBg})`}
                src={`url(${HeaderPhoto})`}
                srcPosition={(window.screen.availWidth <= 1024) && 'center bottom'}
                widthLF={(window.screen.availWidth >= 1024) && '50%'}
                widthRF={(window.screen.availWidth >= 1024) && '50%'}
                height={"48.25em"}
                DisplayBtn={'none'}
                DisplayReview={'none'}
                HeaderTextI={"Becoming a first home buyer"}
                Body={"Buying your first home is an exciting, but big step to take and one that comes with many questions and decisions. The first big question is how much you can borrow and what your likely repayments will be."} />
            <div className='Text-Cards'>
                <TextCard
                    Icon={Inquiry}
                    displayHeadText={"block"}
                    HeadTextI={"Will i be eligible for a first home buyer grant?"}
                    Body={"Because you’re a first home buyer, you may be eligible for a first home buyer grant. This grant may be available to Australian citizens or permanent residents who wish to buy or build their first home, which will be their principal place of residence within 12 months of settlement. As grant conditions vary from state to state, contact us to find out more about eligibility requirements in your state and how much grant money you could receive. We will also liaise with the lender. It’s our job to do the hard work and you can focus on finding the right home for you. We’ll be there every step of the way to guide you through the entire home loan process – from application to approval"} />
                <TextCard
                    HeadText={"A general First Home Buyer FAQ guide"}
                    DisplayIcon={'none'}
                    one={"How much money can I borrow?"}
                    two={"We’re all unique when it comes to our finances and borrowing needs. Contact us today, we can help with calculations based on your circumstances"}
                    three={"How do I choose a loan that’s right for me?"}
                    four={"Our guides to loan types and features will help you learn about the main options available. There are hundreds of different home loans available, so talk to us today."}
                    five={"How much do I need for a deposit?"}
                    six={"Usually between 5% – 10% of the value of a property, which you pay when signing a Contract of Sale. Speak with us to discuss your options for a deposit. You may be able to borrow against the equity in your existing home or an investment property."}
                    seven={"How much will regular repayments be?"}
                    eight={"Because there so many different loan products, some with lower introductory rates, talk to us today about the deals currently available, we’ll work with you to find a loan set-up that’s right for you."}
                    nine={"What is the First Home Owner Grant and can I get one?"}
                    ten={"This is a grant available to Australian citizens or permanent residents who wish to buy or build their first home, which will be their principal place of residence within 12 months of settlement. Contact us directly to find out more about eligibility requirements in your state and how much grant money you could receive."}
                    displayUl={"block"} />
                <TextCard
                    HeadText={"What fees/costs should I budget for?"}
                    DisplayIcon={'none'}
                    Body={"There are a number of fees and costs involved when buying a property. To help avoid any surprises, the list below sets out many of the usual costs:"}
                    one={"Stamp duty — This is the big one. All other costs are relatively small by comparison. Stamp duty rates vary between state and territory governments and also depend on the value of the property you buy. You may also have to pay stamp duty on the mortgage itself. To estimate your possible stamp duty charge, visit our Stamp Duty Calculator."}
                    two={"Legal/conveyancing fees — Generally around $1,000 – $1500, these fees cover all the legal requirements around your property purchase, including title searches."}
                    three={"Building inspection — This should be carried out by a qualified expert, such as a structural engineer, before you purchase the property. Your Contract of Sale should be subject to the building inspection, so if there are any structural problems you have the option to withdraw from the purchase without any significant financial penalties. A building inspection and report can cost up to $1,000, depending on the size of the property. Your conveyancer will usually arrange this inspection, and you will usually pay for it as part of their total invoice at settlement (in addition to the conveyancing fees)."}
                    four={"Pest inspection — Also to be carried out before purchase to ensure the property is free of problems, such as white ants. Your Contract of Sale should be subject to the pest inspection, so if any unwanted crawlies are found you may have the option to withdraw from the purchase without any significant financial penalties. Allow up to $500 depending on the size of the property. Your real estate agent or conveyancer may arrange this inspection, and you will usually pay for it as part of their total invoice at settlement (in addition to the conveyancing fees)."}
                    five={"Pest inspection — Also to be carried out before purchase to ensure the property is free of problems, such as white ants. Your Contract of Sale should be subject to the pest inspection, so if any unwanted crawlies are found you may have the option to withdraw from the purchase without any significant financial penalties. Allow up to $500 depending on the size of the property. Your real estate agent or conveyancer may arrange this inspection, and you will usually pay for it as part of their total invoice at settlement (in addition to the conveyancing fees)."}
                    six={"Moving costs — Don’t forget to factor in the cost of a removal list if you plan on using one."}
                    seven={"Mortgage Insurance costs — If you borrow more than 80% of the purchase price of the property, you’ll also need to pay Lender Mortgage Insurance. You may also consider whether to take out Mortgage Protection Insurance. If you buy a strata title, regular strata fees are payable."}
                    eight={"Ongoing costs — You will need to include council and water rates along with regular loan repayments. It is important to also consider building insurance and contents insurance. Your lender will probably require a minimum sum insured for the building to cover the loan."}
                    displayUl={"block"}
                    displayNine={"none"}
                    displayTen={"none"} />
            </div>
            <ImageTextBox
                src={ImageForBox}
                DisplayCardII={'none'}
                DisplayI={'none'}
                DisplayCardIII={'none'}
                IntroI={'Why Choose Us'}
                HeadTextI={'We work free of charge for you.'}
                BodyI={'Because we work for you, a broker will always put in that extra effort.'}
                One={'We’ll meet at a place and time that suits you.'}
                Two={'We do the legwork.'}
                Three={'You’ll get a choice of different lenders.'}
                Four={'You’ll have more options.'}
                gap={(window.screen.availWidth <= 768) ? `var(--flex-gap)` : `calc(2 * var(--flex-gap))`}
                widthIB={'50%'}
                widthTCB={'50%'}
                flexDirection={(window.screen.availWidth <= 1024) ? 'column-reverse' : 'row-reverse'}
                UtilityIII={<TextCard Icon={WorkIcon}
                    HeadText={'We do the hard work.'}
                    Body={'We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow it down to the ones that suit your specific needs. Then we choose together.'} />}
                UtilityIV={<TextCard Icon={ProcessIcon}
                    HeadText={'And we help with the whole process.'}
                    Body={'We don’t stop at just finding the finance. We’ll help complete the paperwork, manage the application process and follow it through to approval. Leaving you time to get excited about your new home.'} />}
                ParentGap={(window.screen.availWidth <= 768) ? 'var(--flex-gap)' : 'calc(2 * var(--flex-gap))'}
                displayFive={'none'}
                displaySix={'none'}
                displaySeven={'none'}
                displayEight={'none'}
                displayNine={'none'}
                displayTen={'none'}
                displayUl={'block'}
            />
            <div className='Calendly-Box'>
                <Calendly />
            </div>
            <SendMail />
            <Footer />
        </div>
    )
}

export default Becoming