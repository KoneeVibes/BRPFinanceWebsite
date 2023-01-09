import React from 'react';
import styled from 'styled-components';
import TextCard from '../TextCard/TextCard';

const ImageTextBoxWrapper = styled.section`
    padding: var(--sectioning-gap);
    margin: var(--page-padding);

    .Flex-Box{
        display: flex;
        justify-content: space-between;
    }

    .Text-Card-Box{
        display: flex;
        flex-direction: column;
        gap: 6em;
    }

    .Image-Box img{
        width: 100%;
    }
`

const ImageTextBox = ({ src, IconI, IconII, UtilityI, UtilityII, HeadTextI, HeadTextII, BodyI, BodyII, Button, widthIB, widthTCB, gap, flexDirection, DisplayI, DisplayII, DisplayCardI, DisplayCardII, alignItems, UtilityIII, UtilityIV }) => {
    return (
        <ImageTextBoxWrapper id='Image-Text-Box'>
            <div className='Flex-Box' style={{ gap: gap, flexDirection: flexDirection, alignItems: alignItems }}>
                <div className='Image-Box' style={{ flex: widthIB }}>
                    <img src={src} alt='relevant illustration'></img>
                </div>
                <div className='Text-Card-Box' style={{ flex: widthTCB }}>
                    <TextCard Icon={IconI}
                        HeadText={HeadTextI}
                        Body={BodyI}
                        Button={Button}
                        DisplayIcon={DisplayI}
                        Display={DisplayCardI}
                        Utility = {UtilityI} />
                    <TextCard Icon={IconII}
                        HeadText={HeadTextII}
                        Body={BodyII}
                        DisplayIcon={DisplayII}
                        Display={DisplayCardII}
                        Utility = {UtilityII} />
                </div>
            </div>
            <div>
                {UtilityIII}
                {UtilityIV}
            </div>
        </ImageTextBoxWrapper>
    )
}

export default ImageTextBox