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
        color: #FFFFFF;
    }

    @media screen and (min-width: 1280px) and (max-width: 1543px){
        h5{
            font-size: 18px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px){
        h5{
            font-size: 16px;
        }
        
        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px){
        #ck-email{
            width: auto;
        }
    }

    @media screen and (max-width: 768px){
         #ck-email{
            width: auto;
        }

        p{
            margin: revert;
        }
    }

    @media screen and (max-width: 550px){
        #ck-email, form button{
            font-size: 14px;
        }

        form button{
            padding-left: 1.5em;
            padding-right: 1.5em;
        }
    }

    @media screen and (max-width: 300px){
        form{
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media screen and (max-width: 280px){
        h5{
            font-size: 16px;
        }

        p{
            font-size: 12px;
            line-height: 20px;
        }

        #ck-email, form button{
            font-size: 10px;
        }
    }

    @media screen and (max-width: 170px){
        h5{
            font-size: 12px;
            word-break: break-all;
        }

        p{
            font-size: 8px;
            line-height: 15px;
            word-brek: break-all;
        }

        #ck-email, form button{
            font-size: 3px;
            padding: 0;
        }
    }

    @media screen and (max-width: 100px){
        h5{
            font-size: 4px;
        }

        p{
            font-size: 3px;
            line-height: 7px;
        }
    }
`

const Newsletter = () => {

    const FORM_ID = parseFloat(`${process.env.REACT_APP_CONVERTKIT}`);

    const config = {
        formId: FORM_ID,
        emailPlaceholder: 'Your email address',
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