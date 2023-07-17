import { styled } from "styled-components";
import { AiFillGithub } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { PiLightningFill } from "react-icons/pi";
import {RxCross2} from 'react-icons/rx';
import { HiMenuAlt3 } from 'react-icons/hi';

// Navbar
export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: var(--color-navy);
    @media screen and (max-width: 640px) {
        padding: 1rem;
    }
`;

// Portfolio
export const PortfolioDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-white);
    cursor: default;
    transition: 0.3s ease;

    &:hover {
        color: var(--color-l-blue);
    }
    p {
        font-family: var(--font-base);
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        line-height: 28px;
        font-size: 15px;
    }
    @media screen and (max-width: 1024px) {
        flex: 1;
    }
    @media screen and (max-width: 450px) {
        p {
            font-size: 12px;
        }
    }
`;
export const LogoLightning = styled(PiLightningFill)`
    margin-right: 0.3rem;
    font-size: 18px;
    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`;


// Navbar Links
export const Ul = styled.ul`
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        margin: 0 1rem; 
        font-family: var(--font-alt);
        color: var(--color-white);
        font-weight: 400;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        line-height: 28px;
        font-size: 16px;
        transition: 0.2s ease;

        &:hover {
            color: var(--color-l-blue);
            opacity: 1;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

// Social Icons
export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const GithubIcon = styled(AiFillGithub)`
    font-size: 1.5rem;
	z-index: 1;
	transition: 0.2s ease-in-out;
`;
export const UpworkIcon = styled(SiUpwork)`
    margin-top: 0.2rem;
    font-size: 1.5rem;
	z-index: 1;
	transition: 0.2s ease-in-out;
`;
export const DiscordIcon = styled(FaDiscord)`
    font-size: 1.6rem;
	z-index: 1;
	transition: 0.2s ease-in-out;
`;

export const SocialIcon = styled.a`
    margin-right: 1.7rem;
    padding: 0.5rem;
    width: 42px;
    height: 42px;
    color: #ffffff;
    background: rgba(166, 177, 225, 0.2);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.7);
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        width: 42px;
        height: 42px;
        position: absolute;
        background: #ffffff;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.2s ease-in-out;
    }

    &:hover::before {
        transform: scale(1);
    }
    &:hover ${GithubIcon} {
        color: var(--color-navy);
    }
    &:hover ${UpworkIcon} {
        color: var(--color-navy);
    }
    &:hover ${DiscordIcon} {
        color: var(--color-navy);
    }

    @media screen and (max-width: 1024px) {
        width: 35px;
        height: 35px;
        margin-right: 1.2rem;

        &::before {
            width: 35px;
            height: 35px;
        }
    }
    @media screen and (max-width: 450px) {
        width: 30px;
        height: 30px;
        padding: 0.3rem;
        margin-right: 0.3rem;

        &::before {
            width: 30px;
            height: 30px;
        }
    }
`;

// smallscreen
export const SmallScreenContainer = styled.div`
    display: none;
    
    @media screen and (max-width: 1024px) {
        display: flex;
    }
`;
export const SmallScreen = styled.div`
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-navy);
    opacity: 0.95;
    transition: .5s ease;
    flex-direction: column;

    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-left {
        0% {
            -webkit-transform: translateX(100px);
                    transform: translateX(100px);
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
    }
    @keyframes slide-left {
        0% {
            -webkit-transform: translateX(200px);
                    transform: translateX(200px);
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
    }

`;

export const MenuIcon = styled(HiMenuAlt3)`
    font-size: 25px;
    color: var(--color-white);
`;
export const CloseMenu = styled(RxCross2)`
    font-size: 25px;
    color: var(--color-white);
    cursor: pointer;

    position: absolute;
    top: 20px;
    right: 20px;
`;
export const SmallScreenLinks = styled.ul`
    list-style: none;

    li {
        font-family: var(--font-base);
        margin: 2rem;
        cursor: pointer;
        color: var(--color-white);
        font-size: 1.5rem;
        text-align: center;
        
        &:hover {
            color: var(--color-l-blue);
        }
    }
`;