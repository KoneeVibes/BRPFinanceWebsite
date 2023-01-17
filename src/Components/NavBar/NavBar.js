import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Assets/Logo.svg'

const NavBarWrapper = styled.nav`
    --nav-height: 4em;

    display: flex;
    padding: var(--page-padding);
    min-height: var(--nav-height);
    align-items: center;

    .Logo-Container{
        flex: 30%;
    }

    ul{
        display: flex;
        align-items: center;
        list-style-type: none;
        cursor: pointer;
        flex: 70%;
        justify-content: space-between;
        gap: 1em;
    }

    li{
        color: #000000;
        font-family: 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background: #000000;
    }

    .hamburger{
        display: none;
        cursor: pointer;
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
            left: -100%;
            top: var(--nav-height);
            gap: 0;
            width: 100%;
            height: fill-available;
            justify-content: space-evenly;
            margin: 0;
            background: #FFFFFF;
            flex-direction: column;
            text-align: center;
            transition: 0.3;
            color: #000000;
            padding: 0;
        }

        ul.active{
            left: 0;
        }
    }
`

const NavBar = () => {

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

        document.querySelectorAll('a').forEach(i => i.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflowY = 'visible';
        }))

        function resetToDefault() {
            if (window.screen.availWidth >= 1023) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflowY = 'visible';
            }
        }

        window.addEventListener('resize', resetToDefault);

    })
    

    return (
        <NavBarWrapper>
            <div className='Logo-Container'>
                <Link href='/'><img src={Logo} alt=
                    {'Logo'}></img></Link>
            </div>
            <ul className={isActive ? "active" : null}>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/homeloan'}><li>Home Loan</li></Link>
                <Link><li>Tips & Guide</li></Link>
                <Link><li>News</li></Link>
                <Link><li>Contact</li></Link>
            </ul>
            <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </NavBarWrapper>
    )
}

export default NavBar