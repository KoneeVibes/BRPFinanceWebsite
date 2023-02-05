import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`
    .Intro-Text{
        margin: 0;
    }

    ul{
        list-style-position: inside;
        padding-inline-start: 0;
        display: none;
    }
`

const TextCard = ({ Icon, HeadText, Body, Button, DisplayIcon, Display, Background, Border, BorderRadius, BoxShadow, Gap, FlexDirection, Utility, Intro, one, two, three, four }) => {

    return (
        <TextCardWrapper className='Text-Card' style={{ display: Display, flexDirection: FlexDirection, gap: Gap, background: Background, border: Border, borderRadius: BorderRadius, boxShadow: BoxShadow }}>
            <div className='Icon-Container'>
                <img src={Icon} alt='relevant icon' style={{ display: DisplayIcon }}></img>
            </div>
            <div className='Text-Container'>
                <p className='Intro-Text'>{Intro}</p>
                <h6>{HeadText}</h6>
                <p className='Body-Text'>{Body}</p>
                <ul>
                    <li>{one}</li>
                    <li>{two}</li>
                    <li>{three}</li>
                    <li>{four}</li>
                </ul>
                <div>{Button}</div>
            </div>
            <div className='Utility'>
                {Utility}
            </div>
        </TextCardWrapper>
    )
}

export default TextCard