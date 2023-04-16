import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import Logo from './Assets/Logo.svg';

const NavBarWrapper = styled.nav`
   position: sticky;
   top: 0;
   left: 0;
   right: 0;
   background: #FFFFFF;
   box-shadow: 0 5 10px rgba(0, 0, 0, .1);
   padding: var(--page-padding);
   display: flex;
   align-items: center;
   justify-content: space-between;
   z-index: 1000;
   min-height: var(--nav-height);

   .Links-Container ul{
    list-style: none; 
    padding-inline-start: 0;
    margin:0;
   }

   .Links-Container ul li:nth-child(1){
        border-top: none;
    }

   .Links-Container ul li{
        position: relative;
        float: left;
   }

   .Links-Container ul li a{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        padding: 0 1.4em;
        text-decoration: none;
        color: #000000;
   }

   .Links-Container ul li a:hover{
    // font-styling
    background: 
    color: 
   }

   #Drop-Down li a{
        padding:0;
   }

   #Drop-Down li{
        padding: 1.5em;
   }

   ul li ul{
        position: absolute;
        left: 0;
        width: 270px;
        background: #FFFFFF;
        display: none;
        padding-top: 1.3em;
   }

   ul li ul li{
        border-top: 1px solid rgba(0, 0, 0, .1);
   }

   .Links-Container ul li:focus-within > ul,
   .Links-Container ul li:hover > ul{
        display: block;
   }
   #hamburger{
        display: none;
   }

   label{
        font-size: 20px;
        color: #333;
        cursor: pointer;
        display: none;
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

    @media (max-width: 1280px){
    .Logo-Container img{
        width: 70%;
    }
   }

   @media (max-width: 1024px){
    label{
        display: initial;
    }
    .Links-Container{
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #FFFFFF;
        border-top: 1px solid rgba(0, 0, 0, .1);
        padding: var(--page-padding);
        height: max-content;
    }
    .Hide{
        display: none;
    }
    label.active .bar:nth-child(2){
        opacity: 0;
    }
    label.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }
    label.active .bar:nth-child(3){
        transform: translateY(-8px) rotate(-45deg);
    }
    .Links-Container ul li{
        width: 100%;
        padding: 0.5em 0;
        border-top: 1px solid rgba(0, 0, 0, .1);
    }
    #Drop-Down li{
        width: fill-available;
    }
    .Links-Container ul li a{
        padding: 0;
    }
    .Links-Container ul li ul{
        position: relative;
        width: 100%;
    }
    .Links-Container ul li ul li{
        background: #eeeeee;
    }
    #hamburger:not(:checked) ~ .Links-Container{
        display: none;
    }
    #Drop-Down li{
        padding: 0.5em;
    }
   }
   
   @media (max-width: 768px){
    .Logo-Container img{
        width: 50%;
    }
   }
`

const NavBar = () => {

    const [isClicked, setisClicked] = useState(false);

    const handleClick = () => {
        setisClicked(!isClicked);
    }

    return (
        <NavBarWrapper>
            <div className='Logo-Container'>
                <Link href='/'>
                    <img src={Logo} alt=
                        {'Logo'}></img>
                </Link>
            </div>
            <input type={'checkbox'} id='hamburger'></input>
            <label htmlFor='hamburger' onClick={handleClick} className={isClicked ? 'active' : 'not-active'}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </label>
            <div className={isClicked || window.screen.availWidth >= 1024 ? 'Links-Container' : 'Hide'}>
                <ul className='links'>
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
                        <Link>Tips & Guide +</Link>
                        <ul id='Drop-Down'>
                            <li>
                                <Link to={"/Tips & Guide/Becoming a first home buyer"}>Becoming a first
                                    home buyer</Link>
                            </li>
                            <li>
                                <Link to={"/Tips & Guide/Let’s buy a home together."}>Let’s buy a home
                                    together.</Link>
                            </li>
                            <li>
                                <Link to={"/Tips & Guide/Research and having the right people to help you are the keys when investing in property."}>Research and having the right people to help you are the keys when investing in property.</Link>
                            </li>
                            <li>
                                <Link to={"/Tips & Guide/Refinancing your homeloan."}>Refinancing
                                    your home
                                    loan.</Link>
                            </li>
                            <li>
                                <Link to={"/Tips & Guide/Here’s a checklist of required documents"}>Here’s a checklist of required documents</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/news'}>News</Link>
                    </li>
                    <li>
                        <HashLink to='#Footer' smooth>Contact</HashLink>
                    </li>
                </ul>
            </div>
        </NavBarWrapper>
    )
}

export default NavBar