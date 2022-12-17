import React from 'react';
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
`

const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className='Logo-Container'>
                <Link href='/'><img src={Logo} alt=
                    {'Logo'}></img></Link>
            </div>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link><li>Home Loan</li></Link>
                <Link><li>Tips & Guide</li></Link>
                <Link><li>News</li></Link>
                <Link><li>Contact</li></Link>
            </ul>
        </NavBarWrapper>
    )
}

export default NavBar