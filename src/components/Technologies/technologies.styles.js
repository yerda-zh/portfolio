import { styled } from "styled-components";

export const TechContainer = styled.div`
    color: #fff;
    font-family: var(--font-base);
    width: 100%;
    height: 100%;
    padding: 2rem 2rem 5rem 2rem;
    max-width: 100%!important; height: auto; overflow: hidden!important;

`;
export const TechTitle = styled.div`

    h2 {
        font-weight: 700;
        font-size: 3.4rem;
        line-height: 62px;
        background: linear-gradient(304deg, #DCD6F7 0%, #A6B1E1 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 1.2rem;
        line-height: 40px;
        font-weight: 400;
        max-width: 100%;
        margin: 2rem 0;
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 40px;
            line-height: 50px;
            padding-bottom: 0.5rem;
        }
    }
    @media screen and (max-width: 540px) {
        h2 {
            font-size: 30px;
            line-height: 20px;
        }
        p {
            font-size: .9rem;
            line-height: 20px;
        }
    }
`;
export const TitleDivider = styled.div`
    width: 120px;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);
    margin-top: 0.5rem;

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 4px;
    }
    @media screen and (max-width: 540px) {
        width: 80px;
        height: 3px;
    }
`;
export const TechDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.1fr 1fr;
    
    margin: 0 10rem;
    
    h3 {
        margin-left: 1rem;
        font-weight: bold;
    }
    p {
        margin-top: 1rem;
        font-size: .95rem;
        text-align: center;
    }

    @media screen and (max-width: 1080px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 4rem;
        margin: 0;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 2rem;
    }
    @media screen and (max-width: 460px) {
        padding: 0 .5rem;
    }
`;
export const FrontDev = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    padding: .5rem 2rem;
    background: #1F2941;
    border-radius: 8px;
    transition: .2s ease-in-out;
    cursor: default;
    &:hover {
        background: #121B32;;
    }
`;

export const FrontDevTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: var(--color-l-blue);
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
`;
export const StateDev = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    padding: .5rem 2rem;
    background: #1F2941;
    border-radius: 8px;
    transition: .2s ease-in-out;
    cursor: default;
    &:hover {
        background: #121B32;;
    }
`;
export const StateDevTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--color-l-blue);

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;
export const UIDev = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    padding: .5rem 2rem;
    background: #1F2941;
    border-radius: 8px;
    transition: .2s ease-in-out;
    cursor: default;

    &:hover {
        background: #121B32;;
    }
`;
export const UIDevTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--color-l-blue);

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
`;