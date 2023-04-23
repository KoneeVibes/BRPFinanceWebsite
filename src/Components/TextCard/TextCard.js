import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`
    .Intro-Text{
        margin: 0;
    }

    ul{
        list-style-position: inside;
        padding-inline-start: 0;
    }

    .Text-Container ul h6{
        font-family: Montserrat;
        font-size: 20px !important;
        font-weight: 600;
        line-height: 27px !important;
        letter-spacing: 0em;
        text-align: left;
        color: #000000 !important;
    }

    @media screen and (max-width: 1728px){
        .Text-Container ul h6{
            font-size: 16px !important;
            line-height: 22px !important;
        }
    }

    @media screen and (max-width: 150px){
        .Text-Container ul h6{
            font-size: 5px !important;
            line-height: 12px !important;
            word-break: break-all;
        }
    }
`

const TextCard = ({ Icon, HeadText, Body, Button, DisplayIcon, Display, Background, Border, BorderRadius, BoxShadow, Gap, FlexDirection, Utility, Intro, one, two, three, four, five, six, seven, eight, nine, ten, displayHeadText, HeadTextI, displayUl, displayOne, displayTwo, displayThree, displayFour, displayFive, displaySix, displaySeven, displayEight, displayNine, displayTen, displaySubH6, UtiityI, UtilityII }) => {

    return (
        <TextCardWrapper className='Text-Card' style={{ display: Display, flexDirection: FlexDirection, gap: Gap, background: Background, border: Border, borderRadius: BorderRadius, boxShadow: BoxShadow }}>
            <div className='Icon-Container'>
                <img src={Icon} alt='relevant icon' style={{ display: DisplayIcon }}></img>
                <h6 style={{ display: displayHeadText ? displayHeadText : "none" }}>{HeadTextI}</h6>
            </div>
            <div className='Text-Container'>
                <p className='Intro-Text'>{Intro}</p>
                <h6>{HeadText}</h6>
                <p className='Body-Text'>{Body}</p>
                <ul style={{ display: displayUl ? displayUl : "none" }}>
                    <li id='one' style={{ display: !displayOne ? "list-item" : displayOne }}>{one}</li>
                    <li id='two' style={{ display: !displayTwo ? "list-item" : displayTwo }}>{two}</li>
                    <h6 style={{ display: displaySubH6 ? displaySubH6 : 'none' }} >{UtiityI}</h6>
                    <li id='three' style={{ display: !displayThree ? "list-item" : displayThree }}>{three}</li>
                    <li id='four' style={{ display: !displayFour ? "list-item" : displayFour }}>{four}</li>
                    <h6 style={{ display: displaySubH6 ? displaySubH6 : 'none' }} >{UtilityII}</h6>
                    <li id='five' style={{ display: !displayFive ? "list-item" : displayFive }}>{five}</li>
                    <li id='six' style={{ display: !displaySix ? "list-item" : displaySix }}>{six}</li>
                    <li id='seven' style={{ display: !displaySeven ? "list-item" : displaySeven }}>{seven}</li>
                    <li id='eight' style={{ display: !displayEight ? "list-item" : displayEight }}>{eight}</li>
                    <li id='nine' style={{ display: !displayNine ? "list-item" : displayNine }}>{nine}</li>
                    <li id='ten' style={{ display: !displayTen ? "list-item" : displayTen }}>{ten}</li>
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