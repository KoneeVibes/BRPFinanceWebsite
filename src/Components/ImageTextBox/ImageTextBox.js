import React from 'react';
import styled from 'styled-components';
import TextCard from '../TextCard/TextCard';

const ImageTextBoxWrapper = styled.section`
    padding: var(--sectioning-gap);
    margin: var(--page-padding);
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--flex-gap));

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

    .Utility-Box{
        display: flex;
        justify-content: space-between;
        gap: calc(2 * var(--flex-gap));
    }

    @media screen and (min-width: 1440px) and (max-width: 1536px){
        .Text-Card-Box{
            gap: 4em;
        }
    }
`

const ImageTextBox = ({ src, IconI, IconII, UtilityI, UtilityII, HeadTextI, HeadTextII, BodyI, BodyII, Button, widthIB, widthTCB, gap, flexDirection, DisplayI, DisplayII, DisplayCardI, DisplayCardII, alignItems, UtilityIII, UtilityIV, IntroI, IntroII, One, Two, Three, Four }) => {
    return (
        <ImageTextBoxWrapper id='Image-Text-Box'>
            <div className='Flex-Box' style={{ gap: gap, flexDirection: flexDirection, alignItems: alignItems }}>
                <div className='Image-Box' style={{ flex: widthIB }}>
                    <img src={src} alt='relevant illustration'></img>
                </div>
                <div className='Text-Card-Box' style={{ flex: widthTCB }}>
                    <TextCard Icon={IconI}
                        Intro={IntroI}
                        HeadText={HeadTextI}
                        Body={BodyI}
                        Button={Button}
                        DisplayIcon={DisplayI}
                        Display={DisplayCardI}
                        Utility={UtilityI}
                        one={One}
                        two={Two}
                        three={Three}
                        four={Four} />
                    <TextCard Icon={IconII}
                        Intro={IntroII}
                        HeadText={HeadTextII}
                        Body={BodyII}
                        DisplayIcon={DisplayII}
                        Display={DisplayCardII}
                        Utility={UtilityII} />
                </div>
            </div>
            <div className='Utility-Box'>
                {UtilityIII}
                {UtilityIV}
            </div>
        </ImageTextBoxWrapper>
    )
}

export default ImageTextBox