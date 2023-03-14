import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import NavBar from '../../../Components/NavBar/NavBar';
import './Checklist.css';
import HeaderBg from './Assets/HeaderBg.svg';
import ContactButton from '../../../Components/DownloadButton/ContactButton';
import TextCard from '../../../Components/TextCard/TextCard';
import PassportIcon from './Assets/PassportIcon.svg';
import DriverLicenseIcon from './Assets/DriverLicenseIcon.svg';
import OthersIcon from './Assets/OthersIcon.svg';
import Calendly from '../../../Components/Calendly/Calendly';

const Checklist = () => {
    return (
        <div id='Checklist'>
            <NavBar />
            <Header
                background={`url(${HeaderBg})`}
                height={'65.3125em'}
                DisplayBtn={'none'}
                DisplayReview={'none'}
                widthLF={'70%'}
                HeaderTextI={'Here’s a checklist of required documents'}
                Body={'This is a general checklist and you may not need some of them. We can help show you which ones you need.'} />
            <div className='Hero-Tab'>
                <div className='Left-Flank'>
                    <h4>Personal identification</h4>
                    <ContactButton
                        Display={'none'}
                        ButtonText={'Contact Us'}
                        Background={'#D2EFFD'}
                        BorderRadius={'53px'}
                        BoxShadow={'0px 4px 3px rgba(0, 0, 0, 0.25)'}
                        Width={'fit-content'}
                        Padding={(window.screen.availWidth >= 150) ? `0 var(--card-padding)` : '0'} />
                </div>
                <div className='Right-Flank'>
                    <TextCard
                        Icon={PassportIcon}
                        Body={'current Passport or Birth Certificate'}
                        Background={'rgba(255, 255, 255, 0.16)'} />
                    <TextCard
                        Icon={DriverLicenseIcon}
                        Body={'Driver’s Licence. (Please note if these documents are in your maiden name, you will also need to provide a copy of your Marriage Certificate.)'}
                        Background={'rgba(255, 255, 255, 0.16)'} />
                    <TextCard
                        Icon={OthersIcon}
                        Body={'Other documents, A Medicare card, Credit card, ATM/Debit card, Council Rates Notice, Pensioner Concession card, Health Care card, Tertiary Student ID card.'}
                        Background={'rgba(255, 255, 255, 0.16)'} />
                </div>
            </div>
            <div className='Text-Cards'>
                <div className='Upper-Section'>
                    <div className='Row-1'>
                        <TextCard
                            HeadText={'Income details'}
                            DisplayIcon={'none'}
                            displayUl={'block'}
                            displaySubH6={'block'}
                            one={'The two most recent payslips from your employer. (Ideally these will show the company name, number of payslip and year-to-date income figure).'}
                            two={'The most recent Group Certificate from your employer.'}
                            UtiityI={'If self employed:'}
                            three={'The last two year’s personal and business tax returns and ATO assessments.'}
                            four={'Other income details'}
                            UtilityII={'You may also need:'}
                            five={'Rental income statements or bank accounts showing rental income for any investment properties'}
                            six={'Proof of share dividends or interest earned'}
                            seven={'Centrelink letter confirming family tax benefits'}
                            eight={'Centrelink letter confirming permanent government pensions'}
                            nine={'Private pension group certificate or statement'}
                            ten={'Proof of any other regular, ongoing income.'}
                        />
                        <TextCard
                            HeadText={'Additional documents for refinancing'}
                            displayUl={'block'}
                            DisplayIcon={'none'}
                            one={'Documentation on your existing loan including the date the loan commenced, loan period and any financial penalty payable if you exit the loan early'}
                            two={'Statements for the last six months for any existing home loans and personal loans'}
                            three={'The most recent Council Rates Notice and building insurance policy on the property or properties being offered as security.'}
                            four={'Credit cards'}
                            five={'If you have credit card debt, statements for the last six months.'}
                            six={'If you don’t owe anything on your credit card, the most recent statement.'}
                            displaySeven={'none'}
                            displayEight={'none'}
                            displayNine={'none'}
                            displayTen={'none'} />
                    </div>
                    <div className='Row-2'>
                        <TextCard
                            HeadText={'Additional documents for First Home Buyers'}
                            DisplayIcon={'none'}
                            displayUl={'block'}
                            one={'Statement for your First Home Saver Account, if you have one.'}
                            two={'Statements for the last six months to show your savings/investment history. This could include share certificates, term deposit statements, etc.'}
                            three={'If other funds are being used for the purchase, evidence showing where the funds are held.'}
                            four={'If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money.'}
                            five={'Your most recent credit card statement.'}
                            six={'Copy of the Contract of Sale for the property being purchased.'}
                            displaySeven={'none'}
                            displayEight={'none'}
                            displayNine={'none'}
                            displayTen={'none'} />
                        <TextCard
                            HeadText={'Additional documents if you already own a home'}
                            DisplayIcon={'none'}
                            displayUl={'block'}
                            one={'Statements for the last six months for any existing home loans or personal loans'}
                            two={'Your most recent credit card statement'}
                            three={'Copy of the Contract of Sale for the property you’re buying'}
                            four={'Statements for the last six months to show your savings/investment history.  (This could include share certificates, savings account statements, term deposit statements, etc.)'}
                            five={'If other funds are being used for the purchase, evidence showing where the funds are held.'}
                            six={'If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money.'}
                            displaySeven={'none'}
                            displayEight={'none'}
                            displayNine={'none'}
                            displayTen={'none'} />
                    </div>
                    <div className='Row-3'>
                        <TextCard
                            HeadText={'Additional documents for borrowers seeking a construction loan'}
                            DisplayIcon={'none'}
                            displayUl={'block'}
                            one={'A copy of a valid builder’s fixed price tender, including all specifications.'}
                            two={'A copy of Council approved plans.'}
                            three={'Statements for the last six months to show your savings/investment history. This could include share certificates, term deposit statements, etc.'}
                            four={'If other funds are being used for the purchase, evidence showing where the funds are held.'}
                            five={'If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money.'}
                            six={'Your most recent credit card statement.'}
                            seven={'Copy of the Contract of Sale for the property being purchased.'}
                            displayEight={'none'}
                            displayNine={'none'}
                            displayTen={'none'} />

                        <TextCard
                            HeadTextI={'Additional documents for investors'}
                            displayHeadText={'block'}
                            DisplayIcon={'none'}
                            displayUl={'block'}
                            Intro={'If you already have investment property/ies:'}
                            one={'Evidence of income such as rental statements.'}
                            two={'A copy of the tenancy lease.'}
                            three={'A Council Rates Notice.'}
                            four={'A letter from a property manager indicating likely rent for the new property.'}
                            five={'Statements for the last six months to show your savings/investment history. This could include share certificates, term deposit statements, etc.'}
                            six={'If other funds are being used for the purchase, evidence showing where the funds are held.'}
                            seven={'If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money.'}
                            eight={'Your most recent credit card statement.'}
                            nine={'Copy of the Contract of Sale for the property being purchased.'}
                            displayTen={'none'} />
                    </div>
                </div>
                <div className='Lower-Section'>
                    <h4>Got some questions about the loan process?</h4>
                    <h6>How does the process work?</h6>
                    <div className='Cards'>
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Arrange a pre-approved loan'}
                            Body={'If you haven’t started your property search, or are still looking, a pre-approved loan can be useful. It gives you a clear picture of what your spending limits are and gives you peace of mind that if you find a property you’re really interested in you can move quickly to make an offer. And it may put you in a stronger negotiating position than other potential buyers who don’t have pre-approval. Of course, even with a pre-approval, a subject to finance clause is an important protection in any sale contract.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Find your property'}
                            Body={'Make sure you do plenty of homework when you’re on the hunt for a new property. Research property prices in the area, potential capital growth and existing and planned infrastructure, such as roads, public transport, schools and shops. If you’re unfamiliar with property values in the area, consider a full valuation carried out by a registered valuer before making a final decision.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Make an offer and sign a Contract of Sale'}
                            Body={'Whether you buy property at auction or make an offer on a listing you’ll be asked to sign a Contract of Sale. This contract will confirm the selling price as well as any terms and conditions. You will need to include appropriate conditions such as subject to lender approval, a building inspection report and a pest inspection.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Appoint a conveyancer'}
                            Body={'You will need a conveyancer or solicitor to act for you to complete the sale. Your conveyancer should also check all rates and taxes have been paid, check land use or building approvals for the property and order any relevant searches. They may also help sort out any inspections.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Pay a deposit'}
                            Body={'A deposit is required once a Contract of Sale has been signed by both parties. You won’t yet have access to your home loan, so your deposit will need to come from savings or elsewhere. You may also be able to arrange a deposit bond until settlement.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Cooling off period'}
                            Body={'If you didn’t buy your property at auction, you may have a cooling off period when you can cancel the contract, although there may be a small penalty. Cooling off periods don’t necessarily apply in every state so check with your relevant state authority to find out what your rights may be.'} />
                        <TextCard
                            BorderRadius={'20px'}
                            Background={'#F6F6F6'}
                            Border={'1px solid #DBE4E9'}
                            displayHeadText={'block'}
                            Icon={OthersIcon}
                            HeadTextI={'Unconditional contracts'}
                            Body={'A deposit is required once a Contract of Sale has been signed by both very cautious about signing an unconditional contract or bidding at an auction especially if you’re not certain about whether you’ll be able to obtain finance or about buying the home. You should also consider obtaining legal advice before signing a sale contract or bidding at an auction. arties. You won’t yet have access to your home loan, so your deposit will need to come from savings or elsewhere. You may also be able to arrange a deposit bond until settlement. '} />
                        <TextCard
                            DisplayIcon={'none'} />
                    </div>
                </div>
            </div>
            <Calendly />
            <Footer />
        </div >
    )
}

export default Checklist