import React from 'react';
import styled from 'styled-components';
import ConvertKitForm from 'convertkit-react';

const NewsletterWrapper = styled.section`
    --form-padding: 1em 0;

    #ck-first-name {
        display:none;
    }

    h5{
        font-family: Manrope;
        font-size: 21px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        color: #181433;
    }

    p{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #181433;
        width: 70%;
        margin: var(--sectioning-gap);
    }

    #ck-email{
        width: 19.068125em;
        padding: var(--form-padding);
        padding-left: 1em;
        background: #F0F7FA;
        border: none;
        outline: none;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #181433;
        opacity: 0.2;
    }

    form{
        display: flex;
        align-items: center;
    }

    form button{
        padding: var(--form-padding);
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
        text-align: left;
        padding-left: 3em;
        padding-right: 3em;
        background: #007CB4;
        border: none;
    }

`

const Newsletter = () => {

    const FORM_ID = parseFloat(`${process.env.REACT_APP_CONVERTKIT}`);

    const config = {
        formId: FORM_ID,
        emailPlaceholder: 'Enter your email address',
    }

    return (
        <NewsletterWrapper>
            <h5>Join Our Newsletter</h5>
            <ConvertKitForm formId={FORM_ID} className='form' {...config} />
            <p>*  Will send you weekly updates for your better
                finance management.</p>
        </NewsletterWrapper>
    )
}

export default Newsletter