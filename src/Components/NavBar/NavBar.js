import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Assets/Logo.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Twitter from '../Footer/Assets/TwitterIcon.svg';
import LinkedIn from '../Footer/Assets/LinkedInIcon.svg';
import Messenger from '../Footer/Assets/MessengerIcon.svg';
import Instagram from '../Footer/Assets/UnknownIcon.svg';


const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: var(--nav-height);
    padding: var(--page-padding);

    ul{
        display: flex;
        gap: 1em;
        align-items: center;
        list-style-type: none;
        cursor: pointer;
        padding: 0;
    }

    li{
        font-family: Montserrat;
        font-size: 25px;
        font-weight: 500;
        line-height: 36px;
        padding: 0 1em;
    }

    a{
        text-decoration: none;
        color: #000000;
    }

    .logo{
        width: 100%;
    }

    .hamburger{
        display: none;
        cursor: pointer;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #000000;
    }

    .Nav-Footer{
        display: none;
    }

    .Nav-Footer p{
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.02em;
    }

    .Nav-Footer{
        display: flex;
        flex-direction: column;
        align-items: start;
        position: fixed;
        bottom: 0;
    }

    .Nav-Footer .SM-Icons{
        display: flex;
        align-items: center;
        gap: 1em;
        margin: auto;
    }

    @media screen and (max-width: 1200px){
        .logo{
            width: 70%;
        }
    }

    @media screen and (max-width: 1727px){
        li{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1240px){
        li{
            font-size: 16px;
        }
    }

    @media screen and (min-width: 1025px) and (max-width: 1090px){
        li{
            padding: 0 .75em;
        }
    }

    @media screen and (min-width: 1025px){
        li:last-child{
            padding-right: 0;
        }
    }

    @media screen and (max-width: 1024px){
        .hamburger{
            display: block;     
        }

        .hamburger.active .bar:nth-child(2){
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }

        ul{
            position: fixed;
            left: -150%;
            top: var(--nav-height);
            gap: 50px;
            width: 100%;
            height: 100%;
            margin: 0;
            background: #FFFFFF;
            flex-direction: column;
            text-align: center;
            transition: 0.3;
            color: #000000;
            padding-top: 3em;
        }

        ul.active{
            left: 0;
        }

        li{
            font-family: Montserrat;
            font-size: 21px;
            font-weight: 600;
            line-height: 22px;
        }
    }

    @media screen and (max-width: 500px){
        ul{
            align-items: stretch;
            text-align: left;
            padding: var(--page-padding);
            padding-top: 3em;
        }

        li{
            padding: 0;
        }

        .Nav-Footer .SM-Icons{
            margin: 0;
        }
    }

    @media screen and (max-width: 360px){
        li{
            font-size: 16px;
        }

        .SM-Icons img {
            width: 70%;
        }

        .Nav-Footer .SM-Icons{
            gap: .2em;
        }
    }

    @media screen and (max-width: 150px){
        li{
            font-size: 12px;
            word-wrap: break-word;
        }

        ul{
            gap: 1em;
            padding-top: 0;
        }

        .Nav-Footer .SM-Icons{
            gap: 0em;
            flex-wrap: wrap;
        }

        .Nav-Footer p{
            word-break: break-all;
        }
    }

`

const Navbar = () => {

    const [isActive, setisActive] = useState(false);

    const toggleClass = () => {
        setisActive(!isActive);
        if (isActive) {
            document.body.style.overflowY = 'visible';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    useEffect(() => {

        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('ul');

        function resetToDefault() {
            if (window.screen.availWidth >= 1024) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflowY = 'visible';
            }
        }

        window.addEventListener('resize', resetToDefault);
    }, [isActive])


    return (
        <NavbarWrapper>
            <Link href='/'>
                <img src={Logo} className='logo' alt=
                    {'Logo'}></img>
            </Link>
            <ul className={isActive ? "active" : null}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/homeloan'}
                    >Home Loan</Link>
                </li>
                <li id='Drop-Down-Li'>
                    <Link>Tips & Guide</Link>
                </li>
                <li>
                    <Link to={'/news'}>News</Link>
                </li>
                <li>
                    <HashLink to='#Footer' smooth>Contact</HashLink>
                </li>
                <div className='Nav-Footer'>
                    <div className='SM-Icons'>
                        <Link><img src={LinkedIn} alt='LinkedIn Icon'></img></Link>
                        <Link><img src={Messenger} alt='Messenger Icon'></img></Link>
                        <Link><img src={Twitter} alt='Twitter Icon'></img></Link>
                        <Link><img src={Instagram} alt='Instagram Icon'></img></Link>
                    </div>
                    <p>Copyright @ Lemon Designs 2023. All Rights Reserved.</p>
                </div>
            </ul>
            <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar