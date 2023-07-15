import { styled } from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    z-index: -1;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
    }
`;

export const LeftSideContainer = styled.div`
    width: 75%;
    color: var(--color-white);
    font-family: var(--font-base);
    padding: 8rem 2rem 10rem 5rem;
    z-index: 1;

    h1 {
        font-weight: 700;
        font-size: 65px;
        line-height: 72px;
        width: max-content;
        max-width: 100%;
        background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 16px;
    }
    p {
        font-size: 24px;
        line-height: 40px;
        font-weight: 400;
        max-width: 100%;
        padding-bottom: 3rem;
        opacity: 0.7;
    }

    div {
        width: 200px;
        height: 60px;
        border-radius: 50px;
        overflow: hidden;
        border: none;
        position: relative;
        z-index: 1;
    }

    button {
        font-weight: 700;
        border: 1.5px solid #F4EEFF;
        color: #fff;
        padding: 18px 34px;
        font-size: 18px;
        border-radius: 50px;
        width: 100%;
        height: 100%;
        background-color: transparent;
	    transition: 0.25s ease-in-out;
        cursor: pointer;
    }
    span {
        z-index: 1;
    }

    button::before {
        content: "";
        border-radius: 50px;
        width: 0%;
        height: 100%;
        position: absolute;
        background: linear-gradient(304deg, #F4EEFF 0%, #DCD6F7 100%);
        left: 0;
        top: 0;
        z-index: -1;
        transition: 0.25s ease-in-out;
    }
    button:hover {
        color: var(--color-navy);
    }
    button:hover::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
    }


    @media screen and (min-width: 1800px) {

        padding: 16rem 2rem 10rem 12rem;

        h1 {
            font-size: 90px;
            line-height: 102px;
            margin-bottom: 36px;
        }

        p {
            font-size: 32px;
            line-height: 60px;
            max-width: 1000px;
            padding-bottom: 6rem;
        }

        div {
            width: 400px;
            height: 120px;
            border-radius: 100px;
        }

        button {
            border: 3px solid #F4EEFF;
            padding: 36px 68px;
            font-size: 36px;
            border-radius: 100px;
        }
        button::before {
            border-radius: 100px;
        }
    }

    @media screen and (max-width: 1100px) {

        width: 100%;
        padding: 8rem 5rem 10rem 5rem;
    }
    @media screen and (max-width: 1024px) {

        padding: 5rem 3rem 5rem 3rem;

        h1 {
            font-size: 55px;
            line-height: 62px;
        }

        p {
            line-height: 35px;
        } 
    }
    @media screen and (max-width: 768px) {

        padding: 4rem 2rem 2rem 2rem;

        h1 {
            font-size: 50px;
            line-height: 55px;
        }

        p {
            font-size: 20px;
            line-height: 25px;
        } 
    }
    @media screen and (max-width: 640px) {

        margin-bottom: 3rem;

        h1 {
            font-size: 40px;
            line-height: 45px;
            padding-bottom: 3rem;
        }

        p {
            font-size: 22px;
            line-height: 25px;
        }

        div {
            width: 150px;
            height: 50px;
            border-radius: 50px;
        }

        button {
            border: 3px solid #F4EEFF;
            padding: 5px 10px;
            font-size: 16px;
            border-radius: 50px;
        }
        button::before {
            border-radius: 50px;
        }

    }
    @media screen and (max-width: 450px) {

        h1 {
            font-size: 35px;
            line-height: 40px;
            padding-bottom: 2rem;
        }

        p {
            font-size: 16px;
            line-height: 20px;
        }
    }

`;

export const ImgContainer = styled.div`
    margin-right: 3rem;

    img {
        width: 100%;
        height: 100%;
        animation: updown 3s linear infinite;

        @keyframes updown {
            0% {
                transform: translateY(-20px);
            }
            50% {
                transform: translateY(20px);
            }
            100% {
                transform: translateY(-20px);
            }
        }
    }

    @media screen and (max-width: 1200px) {
        margin: 0 4rem 4rem 4rem;
        display: flex;
        justify-content: center;
    }
`;