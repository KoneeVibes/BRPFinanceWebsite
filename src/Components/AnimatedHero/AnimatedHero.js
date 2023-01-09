import React from 'react';
import styled from 'styled-components';
import LeftUpper from './Assets/TopLeft.svg';
import RightTop from './Assets/TopRight.svg';
import LeftBottom from './Assets/BottomLeft.svg';
import RightBottom from './Assets/BottomRight.svg';


const AnimatedHeroWrapper = styled.section`
    padding: var( --sectioning-gap);
    display: flex;
    justify-content: center;

    .Animated-Hero-Container{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--flex-gap);
    }

    .Left, .Right, .Middle{
        display: flex;
        flex-direction: column;
        gap: var(--flex-gap);
        justify-content: space-between;
        height: 100%;
    }

    .Left, .Right{
        flex: 10%;
    }

    .Middle{
        flex: 80%;
        align-items: center;
    }

    .Left img, .Right img{
        width: 100%;
    }

    h2{
        font-family: Montserrat;
        font-size: 96px;
        font-weight: 700;
        line-height: 130px;
        letter-spacing: 0em;
        margin: 0;
        text-align: center;
    }

    p{
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        width: 60%;
        margin: 0;
    }

    span{
        color: #007CB4;
        padding: 0;
    }
`

const AnimatedHero = () => {
    return (
        <AnimatedHeroWrapper>
            <div className='Animated-Hero-Container'>
                <div className='Left'>
                    <img src={LeftUpper} alt='animatable icon'></img>
                    <img src={LeftBottom} alt='animatable-icon'></img>
                </div>

                <div className='Middle'>
                    <h2>Trusted by more
                        than <span>50K users</span></h2>
                    <p>We make sure you get the right home
                        loan for your circumstances and will
                        manage the process from start to finish.
                    </p>
                </div>

                <div className='Right'>
                    <img src={RightTop} alt='animatable-icon'></img>
                    <img src={RightBottom} alt='animatable-icon'></img>
                </div>
            </div>
        </AnimatedHeroWrapper>
    )
}

export default AnimatedHero