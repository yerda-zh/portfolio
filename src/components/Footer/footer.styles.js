import { styled } from "styled-components";
import { PiLightningFill } from "react-icons/pi";
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';

export const FooterContainer = styled.div`
    color: #fff;
    font-family: var(--font-base);
    background: var(--color-navy);
    width: 100%;
    height: 100%;
    padding:  0 2rem 3rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FooterDivider = styled.div`
    width: 80%;
    height: 2px;
    border-radius: 5px;
    background: var(--color-m-purple);
    margin-bottom: 3rem;
    opacity: 0.8;
`;
export const FooterDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
export const PortfolioDivFooter = styled.div`
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
        font-size: 1rem;
    }
    @media screen and (max-width: 450px) {
        p {
            font-size: .75rem;
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
export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 1rem;
`;
export const GithubIcon = styled(AiFillGithub)`
    font-size: 1.5rem;
	z-index: 1;
	transition: 0.2s ease-in-out;
`;
export const DiscordIcon = styled(FaDiscord)`
    font-size: 1.6rem;
	z-index: 1;
	transition: 0.2s ease-in-out;
`;
export const LinkedInIcon = styled(BiLogoLinkedin)`
    font-size: 1.4rem;
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
    &:hover ${DiscordIcon} {
        color: var(--color-navy);
    }
    &:hover ${LinkedInIcon} {
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
        padding: 0.4rem;
        margin-right: 0.5rem;

        &::before {
            width: 30px;
            height: 30px;
        }
    }
`;

export const Copyright = styled.p`
    font-size: 0.9rem;

    @media screen and (max-width: 450px) {
        align-self: flex-end;
        font-size: .5rem;
    }
`;