import React from 'react';
import styled from 'styled-components';
import { InlineWidget } from "react-calendly";

const CalendlyWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    gap: var(--flex-gap);
    background: #F3F3F3;
    padding: var(--page-padding);
    padding-top: 3.65625em;
    padding-bottom: 3.65625em;
    margin: var(--sectioning-gap);

    .Text-Flank h3{
        font-family: Montserrat;
        font-size: 50px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -0.02em;
    }

    .Text-Flank p{
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0em;
    }

    .Text-Flank{
        flex: 55%;
    }

    .Calendar-Flank{
        flex: 45%;
    }

    .calendly-inline-widget{
        background: #F3F3F3;
        display: flex;
        justify-content: flex-end;
    }

    iframe{
        border-radius: 17px;
        border: 1px solid #D2D2D2;
        background: #F3F3F3;
        width: 35.9546875em;
    }
`

const Calendly = () => {

    const CALENDLY = process.env.REACT_APP_CALENDLY;

    return (
        <CalendlyWrapper>
            <div className='Text-Flank'>
                <h3>Still not sure? book a demo and see if it’s we’re a fit!</h3>
                <p>By the end of this audit call, you will have a clear understanding of the next steps you can take for your business to build and scale a human-centric product . </p><p>Find a time on Lemon’s (our creative director) calendar to schedule your call today and we look forward to speaking to you soon!</p>
            </div>
            <div className='Calendar-Flank'>
                <InlineWidget url={CALENDLY}/>
            </div>
        </CalendlyWrapper>
    )
}

export default Calendly