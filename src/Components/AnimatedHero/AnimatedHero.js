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

    .slide-right {
        animation: slide-right 10s linear alternate both infinite;
        }

        @keyframes slide-right {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(50%);
            }
        }

        @keyframes slide-right {
            from {
                transform: translateX(50%);
            }
            to {
                transform: translateX(0);
            }
        }
    }

    .slide-left {
        animation: slide-left 10s linear alternate both infinite;
        }

        @keyframes slide-left {
            from {
                transform: translateX(50%);
            }
            to {
                transform: translateX(0);
            }
        }

        @keyframes slide-left {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(50%);
            }
        }
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

    @media screen and (max-width: 1280px){
        h2{
            font-size: 50px;
            line-height: 70px;
        }

        p{
            font-size: 16px;
            line-height: 25px;
        }
    }

    @media screen and (max-width: 1024px){
        p{
            font-size: 14px;
            line-height: 24px;
        }
    }

    @media screen and (max-width: 768px){
        .Animated-Hero-Container{
            width: initial;
            gap: calc(var(--flex-gap) / 2);
        }

        h2{
            font-size: 30px;
            line-height: 41px;
        }
    }

    @media screen and (max-width: 500px){
        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 280px){

        h2{
            font-size: 10px;
            line-height: 18px;
            word-break: break-all;
        }

        p{
            font-size: 5px;
            line-height: 7px;
            word-break: break-all;
        }

        .Animated-Hero-Container{
            gap: calc(var(--flex-gap) / 4);
        }
    }

    @media screen and (max-width: 150px){
        h2{
            font-size: 8px;
            line-height: 14px;
        }

        .Animated-Hero-Container{
            gap: initial;
        }
    }
`

const AnimatedHero = () => {
    return (
        <AnimatedHeroWrapper>
            <div className='Animated-Hero-Container'>
                <div className='Left'>
                    <img src={LeftUpper} className='slide-right' alt='animatable icon'></img>
                    <img src={LeftBottom} alt='animatable-icon' className='slide-left'></img>
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
                    <img src={RightTop} alt='animatable-icon' className='slide-right'></img>
                    <img src={RightBottom} alt='animatable-icon' className='slide-left'></img>
                </div>
            </div>
        </AnimatedHeroWrapper>
    )
}

export default AnimatedHero