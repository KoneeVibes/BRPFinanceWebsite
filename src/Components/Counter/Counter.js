import React, { useEffect } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.section`
    background: #FFFFFF;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.16);
    transform: translate(0%, -50%);
    display: flex;
    justify-content: space-between;
    padding: var(--card-padding);
    margin: var(--page-padding);
    
    .container{
        padding: 0 3em;
    }

    h5{
        font-family: Montserrat;
        font-size: 60px;
        font-weight: 500;
        line-height: 57.5px;
        margin: 0;
    }

    p{
        font-family: Montserrat;
        font-size: 25px;
        font-weight: 600;
        line-height: 57.5px;
        color: #A6A6A6;
        margin: 0;
    }

    @media screen and (max-width: 1728px){
        h5{
            font-size: 50px;
            line-height: 50px;
        }

        p{
            font-size: 20px;
            line-height: 50px;
        }
    }

    @media screen and (max-width: 1440px){
        h5{
            font-size: 40px;
            line-height: 40px;
        }

        p{
            line-height: 40px;
        }
    }

    @media screen and (max-width: 1280px){
        h5 {
            font-size: 35px;
        }

        p{
            font-size: 15px;
        }
    }

    @media screen and (max-width: 1024px){ 
        .container{
            padding: 0 0.5em;
        }

        h5{
            font-size: 20px;
            line-height: 27.5px;
        }

        p{
            font-size: 14px;
            line-height: 27.5px;   
        }
    }

    @media screen and (max-width: 768px){
        padding: 1em;

        p{
            font-size: 12px;
        }
    }

    @media screen and (max-width: 500px){
        h5{
            font-size: 15px;
            line-height: 20px;
        }

        p{
            font-size: 8px;
            line-height: 20px;   
        }
    }

    @media screen and (max-width: 360px){
        padding: .5em;

        h5{
            font-size: 12px;
        }
    }

    @media screen and (max-width: 289px){
        // padding: 0;
        .container{
            // padding: 0em;
        }

        h5{
            font-size: 10px;
            line-height: 10px;
        }

        p{
            font-size: 5px;
            line-height: 10px;
        }
    }

    @media screen and (max-width: 217px){
        h5{
            font-size: 5px;
            font-weight: 700;
            line-height: 10px;
        }

        p{
            font-size: 2px;
            line-height: 10px;
            letter-spacing: -0.02em;
        }
    }

    @media screen and (max-width: 143px){
        padding: 0.2em;

        .container {
            padding: 0px 2px;
        }

        h5{
            word-break: break-all
        }

        p{
            line-height: 5px;
            word-break: break-all;
        }
    }
`

const Counter = () => {

    useEffect(() => {

        let valueDisplays = document.querySelectorAll('.num');
        let interval = 0.001;

        valueDisplays.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                if (startValue > 999) {
                    valueDisplay.textContent = `${Math.round(startValue / 1000)}K+`;
                } else {
                    valueDisplay.textContent = `${startValue}`;
                }
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration)
        })

    }, [])


    return (
        <CounterWrapper className='CounterContainer' >
            <div className='container'>
                <h5 data-val='20' className='num'>0</h5>
                <p>Awards</p>
            </div>
            <div className='container'>
                <h5 data-val='7000' className='num'>0</h5>
                <p>Sold Houses </p>
            </div>
            <div className='container'>
                <h5 data-val='19000' className='num'>0</h5>
                <p>Loans given</p>
            </div>
            <div className='container'>
                <h5 data-val='50000' className='num'>0</h5>
                <p>Trusted Clients</p>
            </div>
        </CounterWrapper>
    )
}

export default Counter