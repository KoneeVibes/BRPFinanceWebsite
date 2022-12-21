import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`

`

const TextCard = ({Icon, HeadText, Body, Button, DisplayIcon, Display, Background, Border, BorderRadius, BoxShadow}) => {
    return (
        <TextCardWrapper className='Text-Card' style={{display: Display, background: Background, border: Border, borderRadius: BorderRadius, boxShadow: BoxShadow}}>
            <img src={Icon} alt='relevant icon' style={{display: DisplayIcon}}></img>
            <h6>{HeadText}</h6>
            <p className='Body-Text'>{Body}</p>
            <div>{Button}</div>
        </TextCardWrapper>
    )
}

export default TextCard