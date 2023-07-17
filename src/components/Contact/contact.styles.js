import { styled } from "styled-components";

export const ContactContainer = styled.div`
    color: #fff;
    font-family: var(--font-base);
    background: var(--color-navy);
    width: 100%;
    height: 100%;
    padding: 2rem 2rem 5rem 2rem;

    display: flex;

    @media screen and (max-width: 840px) {
        flex-direction: column-reverse
    }

    p {
        padding-top: .5rem;
    }
`;
export const ContactImg = styled.div`
    img {
        width: 100%;
        height: 100%;
        margin-right: 3rem;
    }
    @media screen and (min-width: 2000px) {
        img {
            padding: 3rem 4rem 0 4rem;
            margin-right: 15rem;
        }
    }

    @media screen and (max-width: 840px) {
        img {
            padding: 3rem 4rem 0 4rem;
            margin: 0;
        }
    }
    @media screen and (max-width: 560px) {
        img {
            padding: 3rem 1rem 0 1rem;
        }
    }
`;
export const GetInTouchContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 700;
        font-size: 3.4rem;
        line-height: 3.9rem;
        background: linear-gradient(304deg, #DCD6F7 0%, #A6B1E1 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    input, textarea{
        width: 100%;
        background: rgba(166, 177, 225, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 15px;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
        font-size: 1.1rem;
        font-family: var(--font-base);
        transition: 0.2s ease-in-out;

        &::placeholder {
            color: #fff;
            font-weight: 400;
        }
        &:focus::placeholder {
            color: #121212;
            opacity: 0.4;
        }

        &:focus {
            background: rgba(166, 177, 225, 1);
            color: var(--color-navy);
        }
    }
    

    button {
        font-weight: 700;
        width: 100%;
        color: #000;
        background-color: #fff;
        font-family: var(--font-base);
        padding: .9rem 3rem;
        font-size: 1.1rem;
        margin-top: 3rem;
        transition: 0.2s ease-in-out;
        position: relative;
        z-index: 1;
        border: 1px solid #fff;
        cursor: pointer;
    }

    span {
        z-index: 1;
        position: relative;
    }

    button:hover {
        color: #fff;
    }

    button::before {
        content: "";
        background: var(--color-navy);
        width: 0%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: 0.3s ease-in-out;
    }
    button:hover::before {
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        h2 {
            font-size: 3rem;
            line-height: 3.2rem;
        }
    }
    @media screen and (max-width: 840px) {
        padding: 0;

        h2 {
            font-size: 2.4rem;
            line-height: 2.4rem;
        }
    }
    @media screen and (max-width: 560px) {
        h2 {
            font-size: 1.9rem;
            line-height: 1.5rem;
        }
    }
`;

export const GetInTouchDivider = styled.div`
    width: 120px;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);
    margin-top: 0.5rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        width: 100px;
        height: 4px;
    }
    @media screen and (max-width: 560px) {
        width: 80px;
        height: 3px;
    }
`;

export const ContactA = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;

    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
    }

`;
export const ContactB = styled.div`
    textarea {
        margin-top: .5rem;
    }
`;