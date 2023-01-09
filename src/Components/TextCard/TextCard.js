import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`

`

const TextCard = ({ Icon, HeadText, Body, Button, DisplayIcon, Display, Background, Border, BorderRadius, BoxShadow, Gap, FlexDirection, Utility }) => {
    return (
        <TextCardWrapper className='Text-Card' style={{ display: Display, flexDirection: FlexDirection, gap: Gap, background: Background, border: Border, borderRadius: BorderRadius, boxShadow: BoxShadow }}>
            <div className='Icon-Container'>
                <img src={Icon} alt='relevant icon' style={{ display: DisplayIcon }}></img>
            </div>
            <div className='Text-Container'>
                <h6>{HeadText}</h6>
                <p className='Body-Text'>{Body}</p>
                <div>{Button}</div>
            </div>
            <div className='Utility'>
                {Utility}
            </div>
        </TextCardWrapper>
    )
}

export default TextCard