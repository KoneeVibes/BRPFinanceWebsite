import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import NavBar from '../../../Components/NavBar/NavBar';
import HeaderBg from '../Refinancing/Assets/HeaderBg.svg';
import './Research.css';
import ImageTextBox from '../../../Components/ImageTextBox/ImageTextBox';
import HeaderPhoto from './Assets/HeaderPhoto.svg';
import ImageBoxPhoto from './Assets/ImageBoxPhoto.svg';
import TextCard from '../../../Components/TextCard/TextCard';
import DepreciationIcon from './Assets/DepreciationIcon.svg';
import EmotionIcon from './Assets/EmotionIcon.svg';
import ExtraIcon from './Assets/ExtraIcon.svg';
import HouseIcon from './Assets/HouseIcon.svg';
import InvestmentIcon from './Assets/InvestmentIcon.svg';
import LocationIcon from './Assets/LocationIcon.svg';
import OwnershipIcon from './Assets/OwnershipIcon.svg';
import TopTips from './Assets/TopTips.svg';
import Calendly from '../../../Components/Calendly/Calendly';
import SendMail from '../../../Components/SendMail/SendMail';

const Research = () => {
    return (
        <div id='Research'>
            <NavBar />
            <Header
                background={`url(${HeaderBg})`}
                src={`url(${HeaderPhoto})`}
                srcPosition={(window.screen.availWidth <= 1024) && 'center bottom'}
                widthLF={(window.screen.availWidth >= 1024) && '60%'}
                widthRF={(window.screen.availWidth >= 1024) && '40%'}
                height={'49.75em'}
                DisplayBtn={'none'}
                DisplayReview={'none'}
                HeaderTextI={'Research and having the right people to help you are the keys when investing in property.'}
                Body={'It definitely pays to do your homework on the property market before you dive in, and we’re thrilled to be on board to help you when it comes to financing your decision.'} />
            <div className='ImageBox-Container'>
                <ImageTextBox
                    BodyI={"It definitely pays to do your homework on the property market before you dive in, and we’re thrilled to be on board to help you when it comes to financing your decision. Recent share market slides, tight rental markets in most capital cities and a whiff of increase in property prices are seeing many mum and dad investors retreat to bricks and mortar.Generally, property in Australia is still considered to be a sound investment due to steady and consistent increases over time. But it’s not a quick win. Property usually has a seven to ten year cycle, with highs, lows and steady stints in between.Fortunately, an ongoing housing shortage in Australia and a tax system that allows negative gearing on property (where any investment losses can be claimed as tax deductions) continue to favour housing as a solid, long-term investment. But credit has tightened in the wake of the Global Financial Crisis so lenders are more cautious about who borrows and for what. We are here to help find the right lender and loan for your circumstances in this new environment. We can also wade through the many investment loan options on offer, leaving you more time to find the ideal property."}
                    DisplayCardII={'none'}
                    DisplayCardIII={'none'}
                    DisplayI={'none'}
                    src={ImageBoxPhoto}
                    flexDirection={(window.screen.availWidth >= 1024) ? 'row-reverse' : 'column'}
                    gap={"var(--flex-gap)"}
                    widthIB={'50%'}
                    widthTCB={'50%'} />
            </div>
            <div className='TextCards'>
                <div className='Left-Flank'>
                    <TextCard
                        Icon={HouseIcon}
                        HeadText={'Unit or house?'}
                        Body={'House prices often increase in bigger strides than units, offering more potential for capital gain over time. But a rental home also comes with added responsibilities, including gardens and lawns (and sometimes a pool) to maintain. A unit or townhouse may not increase in value as quickly, but they are generally easier to maintain and may even be easier to rent for that very reason, depending on location, condition and size.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={LocationIcon}
                        HeadText={'Location'}
                        Body={'Of course, you’ve heard this before. But location can mean different things when it comes to rental properties. Renters are often looking for maximum convenience so consider properties near schools, major shopping centers and public transport. Spend plenty of time researching target areas, including recent property price movements and future predictions, rental vacancy rates and any proposed infrastructure improvements. You should also do some scouting as if you were a renter to get a first-hand look at the local market.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={InvestmentIcon}
                        HeadText={'Cover your investment'}
                        Body={'Make sure you take out landlord’s insurance. This will cover you for damage caused by a tenant and unpaid rent if a tenant skips out, in addition to other standard risks, such as a house fire or a storm. If you invest in a strata title property, make sure the body corporate has sufficient building insurance to cover the cost of rebuilding the complex in today’s prices. It’s often hard to work out what you need to cover versus what the body corporate covers. A good rule of thumb is everything from the wall paint inward is yours and everything outside of that is covered by the body corporate.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={InvestmentIcon}
                        HeadText={'Manage your investment'}
                        Body={'Managing a property takes time and energy. If you don’t have much to spare of either, you should get a professional property manager to advertise the rental, screen and select tenants, collect and pay the rent, co-ordinate repairs and maintenance, provide condition reports and manage any disputes. Ask other local landlords for referrals for reputable managers. You should also conduct twice-yearly inspections yourself. Any associated costs, including travel and accommodation, are tax deductible. If you decide to self-manage, you will need to be well-versed on tenancy laws and prepared to organise repairs, including those that arise after hours. We understand every borrower has unique circumstances – and that some are more complex than others. We know from vast experience which lenders will work with investment customers who have more complicated requirements, and will negotiate on your behalf.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={OwnershipIcon}
                        HeadText={'Taking ownership'}
                        Body={'If you need both incomes to be considered in the lending equation, speak with us to get the right advice on the best ownership equation for your circumstances'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                </div>
                <div className='Right-Flank'>
                    <TextCard
                        Icon={EmotionIcon}
                        HeadText={'Remove the emotion'}
                        Body={'One of the worst mistakes you can make with any investment is to buy with your heart instead of your head. Remember, your rental property is not your ‘home sweet home’. A well-presented property is desirable, but think sensible, not swank. Ideally, you want a neutral interior color scheme, serviceable and resilient flooring and window coverings, a low-maintenance yard and good storage. And if buying an older style unit, look for one with an internal laundry, a garage or car space and few stairs (unless there’s a great view to be had higher up, which can add to the property value).'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={ExtraIcon}
                        HeadText={'Don’t forget the extras'}
                        Body={'An investment property requires regular financial commitment beyond the loan repayments. Make sure you have the capacity to cover land and water rates and any maintenance and repair costs. Tenants are entitled to repairs or replacements as quickly as possible under their rental agreement, so you will need to have the means to pay. Apartments or units also come with body corporate fees, which can run to thousands in some modern complexes with professional landscaping and shared amenities, such as swimming pools.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={InvestmentIcon}
                        HeadText={'Any interest?'}
                        Body={'Many property investors take advantage of interest-only loans because interest payments are tax deductible. That means you’re taking a punt that the property’s value will increase over time, leaving you with a financial gain in the long run. This is a good strategy for high income earners who are taking advantage of negative gearing. If you choose to positive gear your investment (i.e. generate a profit from the rental income after costs), you might want to consider a principal and interest loan and use the profit to shave off the principal. Just remember, you will pay tax on any income from your investment. Talk to your accountant about your tax situation so your broker can find the right loan.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />
                    <TextCard
                        Icon={DepreciationIcon}
                        HeadText={'Appreciate depreciation'}
                        Body={'The ATO will give you a discount off your tax bill for wear and tear on property. It’s known as depreciation, and can be a very handy windfall for investors, especially if you buy a new property. The formula is quite complex and depends on the age of your property, building materials and the various fittings. That’s where a professional quantity surveyor comes in. For a fee (often around $600), they’ll assess the property and complete a Tax Depreciation Schedule, which your accountant will incorporate in your tax return.'}
                        Background={'#F6F6F6'}
                        BorderRadius={'20px'}
                        Border={'1px solid #DBE4E9'} />

                </div>
            </div>
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
                    displayTen={'none'} />
            </div>
            <Calendly />
            <SendMail />
            <Footer />
        </div>
    )
}

export default Research